const express = require('express');
const VisitRequest = require('../models/VisitRequest');
const Listing = require('../models/Listing');

// mergeParams pour accéder à :listingId défini dans le chemin parent
const router = express.Router({ mergeParams: true });

// GET /api/listings/:listingId/visits
// Récupérer toutes les demandes de visite pour une annonce
router.get('/', async (req, res) => {
    try {
        const listingId = req.params.listingId;
        const visits = await VisitRequest.find({ listing: listingId }).sort({ createdAt: -1 });
        return res.status(200).json(visits);
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération des demandes de visite.", error: error.message });
    }
});

// POST /api/listings/:listingId/visits
// Créer une nouvelle demande de visite
router.post('/', async (req, res) => {
    try {
        const listingId = req.params.listingId;
        const { requesterName, requesterEmail, preferredDate, timeSlot, note, hostName } = req.body;

        if (!requesterEmail || !preferredDate) {
            return res.status(400).json({ message: 'Email et date de visite sont requis.' });
        }

        // Vérifier que la date est valide
        const preferred = new Date(preferredDate);
        if (isNaN(preferred.getTime())) {
            return res.status(400).json({ message: 'Date de visite invalide.' });
        }

        // Optionnel: vérifier que l'annonce existe réellement (si on utilise la DB pour les listings)
        try { await Listing.findById(listingId); } catch (_) { /* ignore si listings mock côté front */ }

        const visitRequest = new VisitRequest({
            listing: listingId,
            requesterName,
            requesterEmail,
            preferredDate: preferred,
            timeSlot,
            note,
            hostName,
        });
        await visitRequest.save();
        return res.status(201).json(visitRequest);
    } catch (error) {
        return res.status(400).json({ message: "Erreur lors de la création de la demande de visite.", error: error.message });
    }
});

module.exports = router;
