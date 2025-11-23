const express = require('express');
const VisitRequest = require('../models/VisitRequest');

const router = express.Router();

// GET /api/visits
// Liste paginée/filtrée de toutes les demandes de visite
// Filtres supportés: listingId, status, hostName, email
router.get('/', async (req, res) => {
    try {
        const { listingId, status, hostName, email, page = 1, limit = 20 } = req.query;
        const query = {};
        if (listingId) query.listing = listingId;
        if (status) query.status = status;
        if (hostName) query.hostName = hostName;
        if (email) query.requesterEmail = email.toLowerCase();

        const skip = (Number(page) - 1) * Number(limit);

        const [items, total] = await Promise.all([
            VisitRequest.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
            VisitRequest.countDocuments(query)
        ]);

        res.status(200).json({
            page: Number(page),
            limit: Number(limit),
            total,
            pages: Math.ceil(total / Number(limit) || 1),
            items
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des demandes de visite.', error: error.message });
    }
});

// GET /api/visits/:id
router.get('/:id', async (req, res) => {
    try {
        const visit = await VisitRequest.findById(req.params.id);
        if (!visit) return res.status(404).json({ message: 'Demande non trouvée.' });
        res.status(200).json(visit);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la demande.', error: error.message });
    }
});

// PATCH /api/visits/:id/status
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const allowed = ['new', 'confirmed', 'declined', 'completed'];
        if (!allowed.includes(status)) {
            return res.status(400).json({ message: 'Statut invalide.' });
        }
        const updated = await VisitRequest.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'Demande non trouvée.' });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour du statut.', error: error.message });
    }
});

// DELETE /api/visits/:id
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await VisitRequest.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Demande non trouvée.' });
        res.status(200).json({ message: 'Demande supprimée.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression.', error: error.message });
    }
});

module.exports = router;
