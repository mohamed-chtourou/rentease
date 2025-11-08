const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    // Le score de l'évaluation (de 1 à 5)
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, 'Une note est requise (1-5)']
    },
    // Le commentaire de l'utilisateur
    comment: {
        type: String,
        required: [true, 'Un commentaire est requis'],
        trim: true
    },
    // Référence à l'Annonce (Listing)
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },
    // Référence à l'Utilisateur (pour savoir qui a posté l'avis)
    // Nous utiliserons l'ID d'un Utilisateur quand le modèle sera créé.
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // Pour l'instant, on peut le laisser non requis si le modèle User n'est pas encore prêt.
    },
    // Nom de l'utilisateur (temporaire avant le modèle User)
    userName: {
        type: String,
        default: 'Locataire Anonyme'
    }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;