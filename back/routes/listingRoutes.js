const express = require('express');
const Listing = require('../models/Listing');
const router = express.Router();

// Route 1: Créer une nouvelle annonce (POST /api/listings)
router.post('/', async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.status(201).json(newListing);
    } catch (error) {
        // En cas d'erreur de validation (champs manquants), on renvoie 400
        res.status(400).json({ message: "Erreur lors de la création de l'annonce", error: error.message });
    }
});

// Route 2: Récupérer toutes les annonces (GET /api/listings)
// C'est la route appelée par votre SearchBar
router.get('/', async (req, res) => {
    try {
        // Logique de filtrage très simplifiée pour l'instant (peut être étendue plus tard)
        const { location, dates } = req.query;
        let filter = {};

        if (location) {
            // Recherche simple par ville (non optimisée, à améliorer avec des index ou un service de géocodage)
            filter['location.city'] = { $regex: location, $options: 'i' }; 
        }
        // Le filtre de dates est ignoré pour l'instant car il nécessite une logique complexe de disponibilité

        const listings = await Listing.find(filter).limit(20);
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des annonces", error: error.message });
    }
});

module.exports = router;