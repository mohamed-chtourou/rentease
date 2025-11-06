// 1. Charger les variables d'environnement
require('dotenv').config(); 

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