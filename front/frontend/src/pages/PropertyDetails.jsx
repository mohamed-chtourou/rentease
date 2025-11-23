import React, { useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './PropertyDetails.css';
import { mockListings } from '../data/mockListings';
import { useFavorites } from '../contexts/FavoritesContext';
import ContactHostForm from '../components/ContactHostForm';

const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const availabilityBadge = (availability) => {
    switch (availability?.status) {
    case 'available':
        return 'Disponible';
    case 'booked':
        return 'Réservé actuellement';
    case 'coming_soon':
        return 'Bientôt disponible';
    default:
        return 'Disponibilité à confirmer';
    }
};

const formatDate = (date) => {
    if (!date) return 'Date sur demande';
    return new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
};

const PropertyDetails = ({ listings = mockListings }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toggleFavorite, isFavorite } = useFavorites();

    const listing = useMemo(() => listings.find((item) => item._id === id), [id, listings]);

    const galleryImages = useMemo(() => {
        if (listing?.images?.length) return listing.images;
        if (listing?.image) return [listing.image];
        return [];
    }, [listing]);

    const averageRating = useMemo(() => {
        if (!listing) return null;
        if (listing.rating) return listing.rating;
        if (listing.reviews?.length) {
            const total = listing.reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
            return Math.round((total / listing.reviews.length) * 10) / 10;
        }
        return null;
    }, [listing]);

    const reviewCount = listing?.reviewCount || listing?.reviews?.length || 0;

    if (!listing) {
        return (
            <div className="property-details container">
                <p>Cette annonce n'existe pas.</p>
                <Link to="/" className="back-link">Retour à l'accueil</Link>
            </div>
        );
    }

    const position = listing.location ? [listing.location.latitude, listing.location.longitude] : null;
    const availabilityText = availabilityBadge(listing.availability);

    return (
        <main className="property-details container">
            <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
            <div className="details-header">
                <div>
                    <div className="badge-row">
                        <p className="badge">{listing.type}</p>
                        {averageRating && (
                            <span className="rating-chip" aria-label={`Note ${averageRating} sur 5`}>
                                ★ {averageRating} ({reviewCount})
                            </span>
                        )}
                        <span className="availability-chip">{availabilityText}</span>
                    </div>
                    <h1>{listing.title}</h1>
                    {listing.address && <p className="subline">{listing.address}</p>}
                </div>
                <div className="price-block">
                    <span className="price">{listing.price} DT/mois</span>
                    <p className="availability-sub">Libre dès {formatDate(listing.availability?.availableFrom)}</p>
                    <button
                        className={`favorite-toggle ${isFavorite(listing._id) ? 'active' : ''}`}
                        onClick={() => toggleFavorite(listing._id)}
                        aria-pressed={isFavorite(listing._id)}
                        aria-label="Ajouter ou retirer des favoris"
                    >
                        {isFavorite(listing._id) ? '♥ Retirer des favoris' : '♡ Ajouter aux favoris'}
                    </button>
                </div>
            </div>

            <section className="gallery">
                {galleryImages.map((src, index) => (
                    <img key={src} src={src} alt={`${listing.title} - photo ${index + 1}`} />
                ))}
            </section>

            <section className="details-grid">
                <div className="details-main">
                    <div className="stats">
                        <span>{listing.bedrooms} chambres</span>
                        <span>{listing.bathrooms} sdb</span>
                        <span>{listing.surface} m²</span>
                        {listing.city && <span>{listing.city}</span>}
                    </div>
                    <p className="description">{listing.description}</p>

                    {(listing.highlights?.length || listing.notes?.length || listing.amenities?.length) && (
                        <div className="insights-card">
                            <h3>Notes vérifiées</h3>
                            <div className="insights-grid">
                                {listing.highlights?.length > 0 && (
                                    <div>
                                        <p className="insight-title">Points clés</p>
                                        <ul>
                                            {listing.highlights.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {listing.notes?.length > 0 && (
                                    <div>
                                        <p className="insight-title">Retours des anciens locataires</p>
                                        <ul>
                                            {listing.notes.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {listing.amenities?.length > 0 && (
                                    <div>
                                        <p className="insight-title">Équipements</p>
                                        <ul className="tag-list">
                                            {listing.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {listing.reviews?.length > 0 && (
                        <div className="reviews-section" aria-label="Avis des locataires">
                            <h3>Avis des anciens locataires ({reviewCount})</h3>
                            <div className="review-grid">
                                {listing.reviews.map((review) => (
                                    <article key={`${review.tenantName}-${review.comment}`} className="review-card">
                                        <div className="review-header">
                                            <span className="review-author">{review.tenantName}</span>
                                            <span className="review-rating">★ {review.rating}</span>
                                        </div>
                                        {review.stayDuration && (
                                            <p className="review-meta">Séjour : {review.stayDuration}</p>
                                        )}
                                        <p className="review-comment">{review.comment}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <aside className="details-aside" aria-label="Localisation et contact">
                    {position ? (
                        <div className="map-card">
                            <div className="map-header">
                                <h3>Localisation</h3>
                                <p>{listing.city || 'Disponible'} · Vue interactive</p>
                            </div>
                            <MapContainer center={position} zoom={14} style={{ height: '260px', width: '100%' }} scrollWheelZoom>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} icon={defaultIcon}>
                                    <Popup>
                                        <strong>{listing.title}</strong>
                                        <p>{listing.address || 'Adresse disponible sur demande'}</p>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    ) : (
                        <div className="map-card muted">Carte en attente de coordonnées</div>
                    )}

                    <div className="availability-card" aria-label="Disponibilités et visites">
                        <h3>Disponibilités</h3>
                        <p className="availability-status">{availabilityText}</p>
                        <p className="availability-date">À partir du {formatDate(listing.availability?.availableFrom)}</p>
                        {listing.availability?.nextVisitSlots?.length > 0 && (
                            <ul className="visit-list">
                                {listing.availability.nextVisitSlots.map((slot) => (
                                    <li key={slot}>{slot}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="contact-card">
                        <h3>Contact</h3>
                        <p className="contact-line"><strong>Hôte :</strong> {listing.host || 'Hôte'}</p>
                        {listing.contact?.phone && <p className="contact-line"><strong>Téléphone :</strong> {listing.contact.phone}</p>}
                        {listing.contact?.email && <p className="contact-line"><strong>Email :</strong> {listing.contact.email}</p>}
                        {(listing.contact?.email || listing.contact?.officeHours) && (
                            <p className="contact-line">
                                <strong>Horaires :</strong> {listing.contact?.officeHours || 'Réponse rapide'}
                            </p>
                        )}
                    </div>

                    <ContactHostForm
                        listingId={listing._id}
                        listingTitle={listing.title}
                        hostName={listing.host || 'Hôte'}
                        hostEmail={listing.contact?.email}
                    />
                </aside>
            </section>
        </main>
    );
};

export default PropertyDetails;
