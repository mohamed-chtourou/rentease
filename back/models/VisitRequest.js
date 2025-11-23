const mongoose = require('mongoose');

const visitRequestSchema = new mongoose.Schema({
    // Référence à l'annonce
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true,
    },
    requesterName: {
        type: String,
        default: 'Visiteur',
        trim: true,
    },
    requesterEmail: {
        type: String,
        required: [true, 'Un email est requis pour demander une visite'],
        trim: true,
        lowercase: true,
    },
    preferredDate: {
        type: Date,
        required: [true, 'Une date préférée est requise'],
    },
    timeSlot: {
        type: String,
        trim: true,
    },
    note: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    hostName: {
        type: String,
        default: 'Hôte',
    },
    status: {
        type: String,
        enum: ['new', 'confirmed', 'declined', 'completed'],
        default: 'new',
    },
}, { timestamps: true });

module.exports = mongoose.model('VisitRequest', visitRequestSchema);
