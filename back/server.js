// 1. Charger les variables d'environnement
require('dotenv').config(); 
const listingRoutes = require('./routes/listingRoutes');
// Importation des routes d'avis
const reviewRoutes = require('./routes/reviewRoutes'); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Le port par défaut sera 5000

// Middlewares
app.use(cors());
app.use(express.json()); // Permet d'analyser les corps de requête JSON

// --- Connexion à MongoDB ---
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));

// --- Définition d'une Route de Test ---
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API RentEase ! Le serveur fonctionne.');
});

// --- Démarrage du Serveur ---
app.listen(port, () => {
    console.log(`Le serveur RentEase tourne sur le port: ${port}`);
});

// ... (code précédent)

// Importation des routes (à ajouter en haut avec les autres 'require')
// <-- NOUVEL IMPORT

// ... (code de connexion MongoDB)

// Utilisation des routes
app.use('/api/Listing', listingRoutes);

// Utiliser les routes d'avis comme sous-routes des annonces
// L'URL complète sera: /api/listings/:listingId/reviews
app.use('/api/Listing/:listingId/reviews', reviewRoutes); // <-- NOUVELLE LIGNE

// ... (suite du code)