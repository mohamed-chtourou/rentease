const express = require('express');
const Review = require('../models/Review');
const router = express.Router({ mergeParams: true }); // mergeParams est essentiel !

// Route 1: GET /api/listings/:listingId/reviews
// Récupérer tous les avis pour une annonce spécifique
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find({ listing: req.params.listingId })
            // Optionnel: on pourrait 'populate' (remplir) le champ user ici si le modèle User existait.
            .sort({ createdAt: -1 }); // Les plus récents en premier
            
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des avis.", error: error.message });
    }
});

// Route 2: POST /api/listings/:listingId/reviews
// Créer un nouvel avis pour une annonce spécifique
router.post('/', async (req, res) => {
    try {
        const { rating, comment, userName, stayDuration } = req.body;
        const listingId = req.params.listingId;

        if (!rating || !comment) {
            return res.status(400).json({ message: "Note et commentaire sont requis." });
        }

        const newReview = new Review({
            rating,
            comment,
            userName,
            stayDuration,
            listing: listingId,
        });

        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de l'ajout de l'avis.", error: error.message });
    }
});

module.exports = router;