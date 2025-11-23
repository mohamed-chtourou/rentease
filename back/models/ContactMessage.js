const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Un email est requis pour contacter un hôte'],
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Veuillez saisir un email valide'],
    },
    message: {
        type: String,
        required: [true, 'Un message est requis'],
        minlength: [10, 'Le message doit contenir au moins 10 caractères'],
        trim: true,
    },
    listingId: {
        type: String,
        required: true,
    },
    listingTitle: {
        type: String,
        required: true,
    },
    hostName: {
        type: String,
        default: 'Host',
    },
    hostEmail: {
        type: String,
        trim: true,
        lowercase: true,
    },
    status: {
        type: String,
        enum: ['new', 'read', 'archived'],
        default: 'new',
    },
}, { timestamps: true });

module.exports = mongoose.model('ContactMessage', contactMessageSchema);
