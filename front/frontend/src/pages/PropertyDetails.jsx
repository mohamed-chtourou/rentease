import React, { useMemo, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './PropertyDetails.css';
import { mockListings } from '../data/mockListings';
import { useFavorites } from '../contexts/FavoritesContext';
import ContactHostForm from '../components/ContactHostForm';
import VisitRequestForm from '../components/VisitRequestForm';
import ReviewForm from '../components/ReviewForm';

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

    // Reviews state with local persistence
    const storedReviewsKey = `reviews_${id}`;
    const initialReviews = useMemo(() => {
        try {
            const raw = localStorage.getItem(storedReviewsKey);
            if (raw) return JSON.parse(raw);
        } catch (_) { /* ignore */ }
        return listing?.reviews || [];
    }, [storedReviewsKey, listing]);

    const [reviews, setReviews] = useState(initialReviews);

    const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    // Fetch backend reviews (override initial local storage / listing reviews)
    useEffect(() => {
        let aborted = false;
        (async () => {
            try {
                const res = await fetch(`${API_BASE}/api/listings/${id}/reviews`);
                if (!res.ok) return; // keep existing if error
                const data = await res.json();
                if (!aborted && Array.isArray(data) && data.length) {
                    setReviews(data.map(r => ({
                        tenantName: r.userName || r.tenantName || 'Anonyme',
                        rating: r.rating,
                        comment: r.comment,
                        stayDuration: r.stayDuration || null,
                        _id: r._id,
                        createdAt: r.createdAt
                    })));
                }
            } catch (_) { /* ignore network errors */ }
        })();
        return () => { aborted = true; };
    }, [API_BASE, id]);

    const addReview = async (newReview) => {
        // Optimistic local append
        const optimistic = { ...newReview, _id: `local-${Date.now()}` };
        setReviews(prev => [optimistic, ...prev]);
        try {
            const res = await fetch(`${API_BASE}/api/listings/${id}/reviews`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    rating: newReview.rating,
                    comment: newReview.comment,
                    userName: newReview.tenantName,
                    stayDuration: newReview.stayDuration
                })
            });
            if (res.ok) {
                const saved = await res.json();
                setReviews(prev => [
                    { tenantName: saved.userName, rating: saved.rating, comment: saved.comment, stayDuration: saved.stayDuration || null, _id: saved._id, createdAt: saved.createdAt },
                    ...prev.filter(r => r._id !== optimistic._id)
                ]);
            }
        } catch (_) {
            // Fallback: persist locally only
        }
        // Persist snapshot to localStorage for offline reuse
        try { localStorage.setItem(storedReviewsKey, JSON.stringify(reviews)); } catch (_) {}
    };

    const averageRating = useMemo(() => {
        if (reviews.length === 0) return listing?.rating || null;
        const total = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
        return Math.round((total / reviews.length) * 10) / 10;
    }, [reviews, listing]);

    const reviewCount = reviews.length;
    const position = listing?.location ? [listing.location.latitude, listing.location.longitude] : null;
    const availabilityText = availabilityBadge(listing?.availability);

    const [lightboxSrc, setLightboxSrc] = useState(null);
    const primaryImage = galleryImages[0];

    if (!listing) {
        return (
            <main className="property-page">
                <div className="page-width">
                    <p>Cette annonce n'existe pas.</p>
                    <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
                </div>
            </main>
        );
    }

    return (
        <main className="property-page">
            <div className="page-width">
                <div className="page-nav-header">
                    <Link to="/" className="logo-home-link">
                        <img src="/logo.png" alt="RentEase" className="page-logo" />
                    </Link>
                    <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
                </div>
                <section className="hero" aria-label="Présentation du logement">
                    <div className="hero-mosaic" aria-label="Galerie principale">
                        {primaryImage ? (
                            <button className="mosaic main" onClick={() => setLightboxSrc(primaryImage)} aria-label="Agrandir la photo principale">
                                <img src={primaryImage} alt={`${listing.title} - photo principale`} />
                            </button>
                        ) : (
                            <div className="hero-placeholder main">Image indisponible</div>
                        )}
                        {galleryImages.slice(1,4).map((img) => (
                            <button key={img} className="mosaic side" onClick={() => setLightboxSrc(img)} aria-label="Agrandir la photo secondaire">
                                <img src={img} alt={`${listing.title} - vue supplémentaire`} />
                            </button>
                        ))}
                        {galleryImages.length > 4 && (
                            <div className="mosaic more-count" aria-label="Nombre de photos supplémentaires">
                                +{galleryImages.length - 4} photos
                            </div>
                        )}
                    </div>
                    <div className="hero-summary">
                        <div className="chips">
                            <span className="chip type">{listing.type}</span>
                            {averageRating && (
                                <span className="chip rating" aria-label={`Note ${averageRating} sur 5`}>
                                    ★ {averageRating} ({reviewCount})
                                </span>
                            )}
                            <span className="chip availability">{availabilityText}</span>
                        </div>
                        <h1 className="title">{listing.title}</h1>
                        {listing.address && <p className="address">{listing.address}</p>}
                        <nav className="anchor-nav" aria-label="Navigation de section">
                            <a href="#description">Description</a>
                            {listing.highlights?.length || listing.notes?.length || listing.amenities?.length ? <a href="#notes">Notes</a> : null}
                            {reviewCount > 0 ? <a href="#avis">Avis</a> : null}
                            <a href="#demande-visite">Visite</a>
                            <a href="#contact">Contact</a>
                        </nav>
                        <div className="meta-block">
                            <div className="stats-row" aria-label="Caractéristiques principales">
                                <span>{listing.bedrooms} chambres</span>
                                <span>{listing.bathrooms} sdb</span>
                                <span>{listing.surface} m²</span>
                                {listing.city && <span>{listing.city}</span>}
                            </div>
                            <div className="price-fav">
                                <div className="price-line">
                                    <span className="price-main">{listing.price} DT/mois</span>
                                    <span className="price-sub">Libre dès {formatDate(listing.availability?.availableFrom)}</span>
                                </div>
                                <button
                                    className={`fav-btn ${isFavorite(listing._id) ? 'active' : ''}`}
                                    onClick={() => toggleFavorite(listing._id)}
                                    aria-pressed={isFavorite(listing._id)}
                                >
                                    {isFavorite(listing._id) ? '♥ Retirer' : '♡ Favori'}
                                </button>
                                <button
                                    className="share-btn"
                                    onClick={() => {
                                        const url = window.location.href;
                                        if (navigator.share) {
                                            navigator.share({ title: listing.title, url }).catch(()=>{});
                                        } else {
                                            navigator.clipboard?.writeText(url);
                                        }
                                    }}
                                    aria-label="Partager l'annonce"
                                >
                                    ↗ Partager
                                </button>
                                <button
                                    type="button"
                                    className="hero-visit-btn"
                                    onClick={() => {
                                        const el = document.getElementById('demande-visite');
                                        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                >
                                    Demander une visite
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="details-layout">
                    <div className="col-main">
                        <section id="description" className="section description" aria-label="Description">
                            <h2>Description</h2>
                            <p>{listing.description}</p>
                        </section>
                        {(listing.highlights?.length || listing.notes?.length || listing.amenities?.length) && (
                            <section id="notes" className="section insights" aria-label="Notes vérifiées">
                                <h2>Notes vérifiées</h2>
                                <div className="insight-grid">
                                    {listing.highlights?.length > 0 && (
                                        <div className="insight-block">
                                            <h3>Points clés</h3>
                                            <ul>
                                                {listing.highlights.map((item) => <li key={item}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    {listing.notes?.length > 0 && (
                                        <div className="insight-block">
                                            <h3>Retours locataires</h3>
                                            <ul>
                                                {listing.notes.map((item) => <li key={item}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    {listing.amenities?.length > 0 && (
                                        <div className="insight-block">
                                            <h3>Équipements</h3>
                                            <ul className="tag-list">
                                                {listing.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}
                        <section id="avis" className="section reviews" aria-label="Avis des locataires">
                            <h2>Avis ({reviewCount})</h2>
                            <ReviewForm onAdd={addReview} />
                            {reviewCount === 0 && <p className="muted">Aucun avis pour le moment. Soyez le premier à donner votre retour.</p>}
                            {reviewCount > 0 && (
                                <div className="review-grid">
                                    {reviews.map((review) => (
                                        <article key={`${review.tenantName}-${review.comment}`} className="review-card">
                                            <header className="review-header">
                                                <span className="review-author">{review.tenantName}</span>
                                                <span className="review-rating">★ {review.rating}</span>
                                            </header>
                                            {review.stayDuration && (
                                                <p className="review-meta">Séjour : {review.stayDuration}</p>
                                            )}
                                            <p className="review-comment">{review.comment}</p>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                    <aside className="col-aside" aria-label="Actions et informations secondaires">
                        {position ? (
                            <div className="card map-card">
                                <h2 className="card-title">Localisation</h2>
                                <MapContainer center={position} zoom={14} style={{ height: '240px', width: '100%' }} scrollWheelZoom>
                                    <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position} icon={defaultIcon}>
                                        <Popup>
                                            <strong>{listing.title}</strong>
                                            <p>{listing.address || 'Adresse sur demande'}</p>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        ) : (
                            <div className="card map-card muted">Carte en attente</div>
                        )}
                        <div className="card availability-card" aria-label="Disponibilités">
                            <h2 className="card-title">Disponibilités</h2>
                            <p className="availability-status">{availabilityText}</p>
                            <p className="availability-date">À partir du {formatDate(listing.availability?.availableFrom)}</p>
                            {listing.availability?.nextVisitSlots?.length > 0 && (
                                <ul className="visit-list">
                                    {listing.availability.nextVisitSlots.map((slot) => (
                                        <li key={slot}>{slot}</li>
                                    ))}
                                </ul>
                            )}
                            <a className="visit-link-btn" href="#demande-visite">Demander une visite →</a>
                        </div>
                        <div className="card visit-card" aria-label="Demander une visite">
                            <h2 className="card-title">Planifier une visite</h2>
                            <VisitRequestForm
                                listingId={listing._id}
                                listingTitle={listing.title}
                                hostName={listing.host || 'Hôte'}
                                slots={listing.availability?.nextVisitSlots || []}
                            />
                        </div>
                        <div id="contact" className="card contact-card" aria-label="Contact hôte">
                            <h2 className="card-title">Contact</h2>
                            <p className="contact-line"><strong>Hôte :</strong> {listing.host || 'Hôte'}</p>
                            {listing.contact?.phone && <p className="contact-line"><strong>Téléphone :</strong> {listing.contact.phone}</p>}
                            {listing.contact?.email && <p className="contact-line"><strong>Email :</strong> {listing.contact.email}</p>}
                            {(listing.contact?.email || listing.contact?.officeHours) && (
                                <p className="contact-line">
                                    <strong>Horaires :</strong> {listing.contact?.officeHours || 'Réponse rapide'}
                                </p>
                            )}
                        </div>
                        <div className="card form-card">
                            <h2 className="card-title">Contacter l'hôte</h2>
                            <ContactHostForm
                                listingId={listing._id}
                                listingTitle={listing.title}
                                hostName={listing.host || 'Hôte'}
                                hostEmail={listing.contact?.email}
                                onSent={(lid) => {
                                    // Redirige vers la page messages avec pré-sélection
                                    navigate(`/messages?listingId=${encodeURIComponent(lid)}`);
                                }}
                            />
                        </div>
                    </aside>
                </div>
            </div>
            {lightboxSrc && (
                <div className="lightbox" role="dialog" aria-modal="true" aria-label="Agrandissement image">
                    <button className="lightbox-close" onClick={() => setLightboxSrc(null)} aria-label="Fermer">×</button>
                    <img src={lightboxSrc} alt="aperçu agrandi" />
                </div>
            )}
        </main>
    );
};

export default PropertyDetails;
