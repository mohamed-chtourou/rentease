import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PropertyCard.css';
import { useFavorites } from '../contexts/FavoritesContext';

const formatAvailability = (availability) => {
    if (!availability) return 'Availability upon request';
    if (availability.status === 'coming_soon') return 'Coming soon';
    if (availability.status === 'booked') return 'Booked';
    if (availability.status === 'available' && availability.availableFrom) {
        return `Available from the ${new Date(availability.availableFrom).toLocaleDateString('en-EN')}`;
    }
    return 'Avaible';
};

const PropertyCard = ({ listing }) => {
    const { isFavorite, toggleFavorite } = useFavorites();

    const ratingLabel = useMemo(() => {
        const score = listing.rating || (listing.reviews?.length
            ? Math.round((listing.reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / listing.reviews.length) * 10) / 10
            : null);
        const count = listing.reviewCount || listing.reviews?.length || 0;
        if (!score) return null;
        return `★ ${score} (${count})`;
    }, [listing.rating, listing.reviewCount, listing.reviews]);

    const navigate = useNavigate();
    const handleRequestTour = () => {
        // Navigation vers la page détail avec l'ancre du formulaire
        navigate(`/listing/${listing._id}#demande-visite`);
    };

    return (
        <div className="property-card">
            <div className="property-image-container">
                <img
                    src={listing.image}
                    alt={listing.title}
                    className="property-image"
                />
                <button
                    className={`favorite-button ${isFavorite(listing._id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(listing._id)}
                    aria-label="Add to favorites"
                    aria-pressed={isFavorite(listing._id)}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={isFavorite(listing._id) ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                {ratingLabel && <span className="property-rating">{ratingLabel}</span>}
            </div>

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
                        {listing.surface} m²
                    </span>
                </div>

                <p className="property-availability">{formatAvailability(listing.availability)}</p>

                <div className="card-actions">
                    <button
                        type="button"
                        className="request-tour-button"
                        onClick={handleRequestTour}
                        aria-label={`Demander une visite pour ${listing.title}`}
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
                        Request a visit visit
                    </button>
                    <Link
                        to={`/listing/${listing._id}`}
                        className="details-link"
                        aria-label={`Voir le détail de ${listing.title}`}
                    >
                        See all details →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
