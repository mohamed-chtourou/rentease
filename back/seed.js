require('dotenv').config();
const mongoose = require('mongoose');
const Listing = require('./models/Listing');
const demoListings = require('./data/demoListings');

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('❌ Impossible de lancer le seed : MONGODB_URI manquant');
    process.exit(1);
}

const seedListings = async () => {
    try {
        await mongoose.connect(uri);
        console.log('✅ Connecté à MongoDB pour le seed');

        await Listing.deleteMany({});
        console.log('🧹 Anciennes annonces supprimées');

        const created = await Listing.insertMany(demoListings);
        console.log(`✨ ${created.length} annonces démo insérées`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Erreur lors du seed', error);
        process.exit(1);
    }
};

seedListings();
