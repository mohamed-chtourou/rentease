const express = require('express');
const ContactMessage = require('../models/ContactMessage');

const router = express.Router();

// Enregistrer un nouveau message pour un hôte
router.post('/', async (req, res) => {
    try {
        const { email, message, listingId, listingTitle, hostName } = req.body;

        if (!email || !message || !listingId || !listingTitle) {
            return res.status(400).json({ message: 'Email, message, listingId et listingTitle sont requis.' });
        }

        if (message.trim().length < 10) {
            return res.status(400).json({ message: 'Le message doit contenir au moins 10 caractères.' });
        }

        const newMessage = await ContactMessage.create({ email, message, listingId, listingTitle, hostName });
        return res.status(201).json(newMessage);
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la création du message', error: error.message });
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

module.exports = router;
