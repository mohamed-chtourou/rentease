// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routes
const listingRoutes = require('./routes/listingRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const visitRoutes = require('./routes/visitRoutes');
const allVisitRoutes = require('./routes/allVisitRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Global middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
if (!uri) {
    console.error('Missing MONGODB_URI in environment variables');
    process.exit(1);
}

mongoose.connect(uri)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });

// Health check route
app.get('/', (_req, res) => {
    res.json({ status: 'ok', service: 'RentEase API', env: process.env.NODE_ENV || 'development' });
});

// API routes (normalized to lowercase plural nouns)
app.use('/api/listings', listingRoutes);
// Nested review routes: /api/listings/:listingId/reviews
app.use('/api/listings/:listingId/reviews', reviewRoutes);
// User authentication routes: /api/users
app.use('/api/users', userRoutes);
// Contact messages routes: /api/messages
app.use('/api/messages', messageRoutes);
// Visit requests routes: /api/listings/:listingId/visits
app.use('/api/listings/:listingId/visits', visitRoutes);
// Global visit requests (dashboard/admin)
app.use('/api/visits', allVisitRoutes);

// Start server
app.listen(port, () => {
    console.log(`🚀 RentEase API listening on port ${port}`);
});
