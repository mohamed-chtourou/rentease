const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: 'DT' }, // Devise: Dinar Tunisien
    bedrooms: { type: Number, default: 1 },
    bathrooms: { type: Number, default: 1 },
    area: { type: Number, required: true }, // Superficie en m²
    propertyType: { 
        type: String, 
        enum: ['Apartment', 'House', 'Room', 'Studio'],
        required: true 
    },
    images: [{ type: String }], // URLs des photos
    
    // CHAMPS GÉOGRAPHIQUES ESSENTIELS POUR LA CARTE LEAFLET
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        latitude: { type: Number, required: true }, // <--- LATITUDE
        longitude: { type: Number, required: true }, // <--- LONGITUDE
    },

    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Pour plus tard

}, { timestamps: true });

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;