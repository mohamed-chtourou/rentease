const express = require('express');
const ContactMessage = require('../models/ContactMessage');

const router = express.Router();

// Enregistrer un nouveau message pour un hôte
router.post('/', async (req, res) => {
    try {
        const { email, message, listingId, listingTitle, hostName, hostEmail } = req.body;

        if (!email || !message || !listingId || !listingTitle) {
            return res.status(400).json({ message: 'Email, message, listingId et listingTitle sont requis.' });
        }

        if (message.trim().length < 10) {
            return res.status(400).json({ message: 'Le message doit contenir au moins 10 caractères.' });
        }

        const newMessage = await ContactMessage.create({ email, message, listingId, listingTitle, hostName, hostEmail });
        return res.status(201).json(newMessage);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la création du message', error: error.message });
    }
});

// Récupérer tous les messages (toutes conversations)
router.get('/', async (_req, res) => {
    try {
        const messages = await ContactMessage.find().sort({ createdAt: -1 });
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des messages', error: error.message });
    }
});

// Récupérer tous les messages pour un listing donné (utile pour un tableau de bord hôte)
router.get('/listing/:listingId', async (req, res) => {
    try {
        const messages = await ContactMessage.find({ listingId: req.params.listingId }).sort({ createdAt: -1 });
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des messages', error: error.message });
    }
});

// Récupérer tous les messages associés à un hôte via son email (tableau de bord)
router.get('/host/:hostEmail', async (req, res) => {
    try {
        const { hostEmail } = req.params;
        const messages = await ContactMessage.find({ hostEmail }).sort({ createdAt: -1 });
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la récupération des messages par hôte', error: error.message });
    }
});

// Mettre à jour le statut d'un message (new|read|archived)
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const allowed = ['new', 'read', 'archived'];
        if (!allowed.includes(status)) {
            return res.status(400).json({ message: 'Statut invalide.' });
        }
        const updated = await ContactMessage.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!updated) return res.status(404).json({ message: 'Message non trouvé.' });
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la mise à jour du statut', error: error.message });
    }
});

module.exports = router;
