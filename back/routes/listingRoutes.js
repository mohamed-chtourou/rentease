const express = require('express');
const Listing = require('../models/Listing');
const router = express.Router();

// Créer une nouvelle annonce (POST /api/listings)
router.post('/', async (req, res) => {
    try {
        const newListing = new Listing(req.body);
        await newListing.save();
        res.status(201).json(newListing);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création de l'annonce", error: error.message });
    }
});

// Récupérer toutes les annonces (GET /api/listings)
router.get('/', async (req, res) => {
    try {
        const { location, city, minPrice, maxPrice, type, checkIn, checkOut } = req.query;
        const filter = {};
        const andFilters = [];

        const textQuery = location || city;
        if (textQuery) {
            const regex = new RegExp(textQuery, 'i');
            andFilters.push({
                $or: [
                    { city: regex },
                    { address: regex },
                    { title: regex },
                    { description: regex },
                ],
            });
        }

        if (minPrice || maxPrice) {
            const priceFilter = {};
            if (minPrice) {
                priceFilter.$gte = Number(minPrice);
            }
            if (maxPrice) {
                priceFilter.$lte = Number(maxPrice);
            }
            filter.price = priceFilter;
        }

        if (type) {
            filter.type = { $in: type.split(',').map((value) => value.trim()) };
        }

        if (checkIn || checkOut) {
            filter['availability.status'] = { $ne: 'unavailable' };
            const dateFilters = [];

            if (checkIn) {
                const start = new Date(checkIn);
                dateFilters.push({
                    $or: [
                        { 'availability.availableFrom': { $lte: start } },
                        { 'availability.availableFrom': { $exists: false } },
                        { 'availability.availableFrom': null },
                    ],
                });
            }

            if (checkOut) {
                const end = new Date(checkOut);
                dateFilters.push({
                    $or: [
                        { 'availability.availableTo': { $gte: end } },
                        { 'availability.availableTo': { $exists: false } },
                        { 'availability.availableTo': null },
                    ],
                });
            }

            if (dateFilters.length) {
                andFilters.push(...dateFilters);
            }
        }

        if (andFilters.length) {
            filter.$and = andFilters;
        }

        const listings = await Listing.find(filter).sort({ createdAt: -1 }).limit(50);
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des annonces", error: error.message });
    }
});

// Récupérer une annonce par son ID (GET /api/listings/:id)
router.get('/:id', async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return res.status(404).json({ message: "Annonce introuvable" });
        }
        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'annonce", error: error.message });
    }
});

module.exports = router;
