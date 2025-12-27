import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import des styles Leaflet
import './MapView.css'; // Import des styles personnalisés pour les popups
import { useFavorites } from '../contexts/FavoritesContext';

// Correction d'un problème d'icône par défaut de Leaflet avec React
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


// Définissez le point central par défaut (Ex: Tunis, El Ghazala)
const defaultCenter = [36.885, 10.165];
const mapContainerStyle = { width: '100%', height: '500px', borderRadius: '15px' };

const availabilityLabel = (availability) => {
    if (!availability?.status) return 'Disponibilité à confirmer';
    if (availability.status === 'available') return 'Disponible';
    if (availability.status === 'coming_soon') return 'Bientôt dispo';
    if (availability.status === 'booked') return 'Réservé';
    return 'Sur demande';
};

const MapView = ({ listings = [], loading = false, error = null }) => {
    const { toggleFavorite, isFavorite } = useFavorites();
    const hasLocations = listings.some((listing) => listing.location?.latitude && listing.location?.longitude);

    return (
        <div className="map-shell" aria-busy={loading}>
            {error && <div className="map-alert error" role="alert">{error}</div>}
            {!hasLocations && !loading && (
                <div className="map-alert muted">No location available at this time.</div>
            )}
            {loading && (
                <div className="map-alert muted" aria-live="polite">
                    Loading map and results...
                </div>
            )}
            <MapContainer
                center={defaultCenter}
                zoom={12}
                scrollWheelZoom={false}
                style={mapContainerStyle}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {listings.map((listing) => {
                    if (listing.location && listing.location.latitude && listing.location.longitude) {
                        const position = [listing.location.latitude, listing.location.longitude];
                        const rating = listing.rating || (listing.reviews?.length
                            ? Math.round((listing.reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / listing.reviews.length) * 10) / 10
                            : null);
                        const reviewCount = listing.reviewCount || listing.reviews?.length || 0;

                        return (
                            <Marker key={listing._id} position={position}>
                                <Popup maxWidth={300} minWidth={280}>
                                    <div className="custom-popup">
                                        {listing.image && (
                                            <img
                                                src={listing.image}
                                                alt={listing.title}
                                                className="popup-image"
                                            />
                                        )}

                                        <div className="popup-content">
                                            <div className="popup-header">
                                                <h3 className="popup-title">🏡 {listing.title}</h3>
                                                <button
                                                    className={`favorite-dot ${isFavorite(listing._id) ? 'active' : ''}`}
                                                    onClick={() => toggleFavorite(listing._id)}
                                                    aria-pressed={isFavorite(listing._id)}
                                                    aria-label="Basculer en favori"
                                                >
                                                    ♥
                                                </button>
                                            </div>

                                            <div className="popup-price">
                                                {listing.price} dt/month
                                            </div>

                                            <div className="popup-details">
                                                {listing.bedrooms && (
                                                    <div className="popup-detail-item">
                                                        🛏️ <span>{listing.bedrooms}</span> ch.
                                                    </div>
                                                )}
                                                {listing.bathrooms && (
                                                    <div className="popup-detail-item">
                                                        🚿 <span>{listing.bathrooms}</span> sdb.
                                                    </div>
                                                )}
                                                {listing.surface && (
                                                    <div className="popup-detail-item">
                                                        📐 <span>{listing.surface}</span> m²
                                                    </div>
                                                )}
                                            </div>

                                            {(rating || listing.availability) && (
                                                <div className="popup-meta-row">
                                                    {rating && (
                                                        <span className="popup-rating">★ {rating} ({reviewCount})</span>
                                                    )}
                                                    {listing.availability && (
                                                        <span className="popup-availability">{availabilityLabel(listing.availability)}</span>
                                                    )}
                                                </div>
                                            )}

                                            {listing.description && (
                                                <p className="popup-description">
                                                    {listing.description.length > 100
                                                        ? `${listing.description.substring(0, 100)}...`
                                                        : listing.description}
                                                </p>
                                            )}

                                            <div className="popup-actions">
                                                <a
                                                    href={`/listing/${listing._id}`}
                                                    className="popup-link"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        window.location.href = `/listing/${listing._id}`;
                                                    }}
                                                >
                                                    See all details →
                                                </a>
                                                <a
                                                    href={`/listing/${listing._id}#contact-host`}
                                                    className="popup-secondary"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        window.location.href = `/listing/${listing._id}#contact-host`;
                                                    }}
                                                >
                                                    Contact Host
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    }
                    return null;
                })}
            </MapContainer>
        </div>
    );
};

export default MapView;
