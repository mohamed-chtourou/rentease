const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    tenantName: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true },
    stayDuration: { type: String },
    postedAt: { type: Date, default: Date.now },
}, { _id: false });

const availabilitySchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['available', 'booked', 'unavailable', 'coming_soon'],
        default: 'available',
    },
    availableFrom: { type: Date },
    availableTo: { type: Date },
    nextVisitSlots: [{ type: String }],
}, { _id: false });

const contactSchema = new mongoose.Schema({
    phone: { type: String },
    email: { type: String },
    officeHours: { type: String },
}, { _id: false });

const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: 'DT' },
    type: {
        type: String,
        enum: ['Home', 'Apartment', 'House', 'Room', 'Studio', 'Loft', 'Villa', 'Maison'],
        default: 'Apartment',
    },
    bedrooms: { type: Number, default: 1 },
    bathrooms: { type: Number, default: 1 },
    surface: { type: Number, required: true },
    image: { type: String },
    images: [{ type: String }],
    address: { type: String, required: true },
    city: { type: String, required: true },
    host: { type: String, default: 'Host' },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
    highlights: [{ type: String }],
    notes: [{ type: String }],
    amenities: [{ type: String }],
    rating: { type: Number, min: 0, max: 5, default: 0 },
    reviewCount: { type: Number, default: 0 },
    reviews: [reviewSchema],
    availability: availabilitySchema,
    contact: contactSchema,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
