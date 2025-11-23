import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';
import { mockListings } from '../data/mockListings';
import PropertyCard from '../components/PropertyCard';
import './Favorites.css';

const Favorites = ({ listings = mockListings }) => {
    const navigate = useNavigate();
    const { favorites } = useFavorites();

    const favoriteListings = useMemo(
        () => listings.filter((listing) => favorites.includes(listing._id)),
        [favorites, listings],
    );

    return (
        <main className="favorites-page">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
            </div>
            <div className="favorites-header">
                <h1>Vos favoris</h1>
                <p className="muted">Retrouvez rapidement les annonces que vous avez enregistrées.</p>
            </div>

            {favoriteListings.length === 0 ? (
                <div className="empty-state">
                    <p>Aucun favori pour le moment.</p>
                    <Link className="cta" to="/">Explorer les annonces</Link>
                </div>
            ) : (
                <div className="property-grid">
                    {favoriteListings.map((listing) => (
                        <PropertyCard key={listing._id} listing={listing} />
                    ))}
                </div>
            )}
        </main>
    );
};

export default Favorites;
