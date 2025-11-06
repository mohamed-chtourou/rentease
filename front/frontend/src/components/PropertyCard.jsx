import React, { useState } from 'react';
import './PropertyCard.css';

const PropertyCard = ({ listing }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleRequestTour = () => {
        // Logique pour demander une visite
        alert(`Demande de visite pour: ${listing.title}`);
    };

    return (
        <div className="property-card">
            {/* Image avec bouton favori */}
            <div className="property-image-container">
                <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="property-image"
                />
                <button 
                    className={`favorite-button ${isFavorite ? 'active' : ''}`}
                    onClick={toggleFavorite}
                    aria-label="Add to favorites"
                >
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill={isFavorite ? "currentColor" : "none"}
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>

            {/* Informations de la propriété */}
            <div className="property-info">
                <div className="property-header">
                    <h3 className="property-title">{listing.title}</h3>
                    <span className="property-price">{listing.price}DT</span>
                </div>

                <div className="property-details">
                    <span className="detail-item">
                        {listing.bedrooms} bds
                    </span>
                    <span className="detail-separator">|</span>
                    <span className="detail-item">
                        {listing.bathrooms} ba
                    </span>
                    <span className="detail-separator">|</span>
                    <span className="detail-item">
                        {listing.surface}m
                    </span>
                </div>

                {/* Bouton Request a tour */}
                <button 
                    className="request-tour-button"
                    onClick={handleRequestTour}
                >
                    <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Request a tour
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
