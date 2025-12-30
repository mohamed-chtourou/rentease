import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HostListingForm.css';
import './HostListingForm.css';

const HostListingForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        type: 'Apartment',
        bedrooms: 1,
        bathrooms: 1,
        surface: '',
        address: '',
        city: '',
        latitude: '',
        longitude: '',
        highlights: '',
        notes: '',
        amenities: '',
        image: '',
        images: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
        // Convert strings to arrays where needed
        const dataToSend = {
            title: formData.title,
            description: formData.description,
            price: parseFloat(formData.price),
            type: formData.type,
            bedrooms: parseInt(formData.bedrooms),
            bathrooms: parseInt(formData.bathrooms),
            surface: parseFloat(formData.surface),
            address: formData.address,
            city: formData.city,
            // NESTED location object as per your schema
            location: {
                latitude: parseFloat(formData.latitude),
                longitude: parseFloat(formData.longitude)
            },
            highlights: formData.highlights.split(',').map(h => h.trim()).filter(h => h),
            notes: formData.notes.split(',').map(n => n.trim()).filter(n => n),
            amenities: formData.amenities.split(',').map(a => a.trim()).filter(a => a),
            image: formData.image,
            images: formData.images.split(',').map(img => img.trim()).filter(img => img),
            // Add required nested objects
            availability: {
                status: 'available',
                availableFrom: new Date(),
                availableTo: null
            },
            contact: {
                phone: '', // Add these if your form has them
                email: '',
                officeHours: ''
            },
            rating: 0, // Default values
            reviewCount: 0,
            reviews: []
        };

        console.log('Sending data:', dataToSend);
        
        const response = await axios.post('http://localhost:5000/api/listings', dataToSend);
        console.log('Listing created:', response.data);
        navigate('/');
    } catch (err) {
        console.error('Error creating listing:', err);
        setError(err.response?.data?.message || 'Failed to create listing');
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="listing-form-container">
            <div className="form-header">
                <h1>List Your Property</h1>
                <p>Fill in the details below to create your rental listing</p>
            </div>

            <form onSubmit={handleSubmit} className="listing-form">
                {error && <div className="error-message">{error}</div>}

                <div className="form-section">
                    <h2>Basic Information</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="title">Title *</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Cozy Apartment in City Center"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Property Type</label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="Apartment">Apartment</option>
                                <option value="House">House</option>
                                <option value="Room">Room</option>
                                <option value="Studio">Studio</option>
                                <option value="Villa">Villa</option>
                                <option value="Loft">Loft</option>
                                <option value="Maison">Maison</option>
                                <option value="Home">Home</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Describe your property, its features, and what makes it special..."
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h2>Pricing & Details</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="price">Price per night (DT) *</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                min="0"
                                step="0.01"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surface">Surface (m²) *</label>
                            <input
                                type="number"
                                id="surface"
                                name="surface"
                                value={formData.surface}
                                onChange={handleChange}
                                required
                                min="0"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="bedrooms">Bedrooms</label>
                            <input
                                type="number"
                                id="bedrooms"
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                                min="0"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bathrooms">Bathrooms</label>
                            <input
                                type="number"
                                id="bathrooms"
                                name="bathrooms"
                                value={formData.bathrooms}
                                onChange={handleChange}
                                min="0"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h2>Location</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="address">Address *</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="Street address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City *</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                placeholder="City name"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="latitude">Latitude *</label>
                            <input
                                type="number"
                                id="latitude"
                                name="latitude"
                                value={formData.latitude}
                                onChange={handleChange}
                                required
                                step="any"
                                placeholder="e.g., 36.8065"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="longitude">Longitude *</label>
                            <input
                                type="number"
                                id="longitude"
                                name="longitude"
                                value={formData.longitude}
                                onChange={handleChange}
                                required
                                step="any"
                                placeholder="e.g., 10.1815"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h2>Additional Information</h2>
                    <div className="form-group">
                        <label htmlFor="highlights">Highlights (comma-separated)</label>
                        <input
                            type="text"
                            id="highlights"
                            name="highlights"
                            value={formData.highlights}
                            onChange={handleChange}
                            placeholder="e.g., WiFi, Parking, Balcony"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="amenities">Amenities (comma-separated)</label>
                        <input
                            type="text"
                            id="amenities"
                            name="amenities"
                            value={formData.amenities}
                            onChange={handleChange}
                            placeholder="e.g., Kitchen, TV, Washer"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Notes (comma-separated)</label>
                        <input
                            type="text"
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="e.g., No smoking, Pets allowed"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Main Image URL</label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="images">Additional Images (comma-separated URLs)</label>
                        <input
                            type="text"
                            id="images"
                            name="images"
                            value={formData.images}
                            onChange={handleChange}
                            placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <button type="button" onClick={() => navigate(-1)} className="cancel-btn">
                        Cancel
                    </button>
                    <button type="submit" disabled={loading} className="submit-btn">
                        {loading ? 'Creating Listing...' : 'Create Listing'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HostListingForm;