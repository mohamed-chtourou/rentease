import React, { useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { mockListings } from '../data/mockListings';
import './Profile.css';

const Profile = ({ listings = mockListings }) => {
    const { user, logout, loading, isAuthenticated } = useAuth();
    const { favorites } = useFavorites();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, loading, navigate]);

    const favoriteListings = useMemo(
        () => listings.filter((listing) => favorites.includes(listing._id)).slice(0, 3),
        [favorites, listings],
    );

    const spotlightListings = useMemo(() => {
        if (user?.role === 'Host') {
            return listings.slice(0, 3);
        }
        return listings.slice(3, 6);
    }, [listings, user?.role]);

    const handleEdit = () => {
        alert('La modification du profil arrivera bientôt.');
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <main className="profile-page">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
            </div>
            <section className="profile-card">
                <div className="profile-header">
                    <div className="avatar-circle">{user?.username?.charAt(0).toUpperCase()}</div>
                    <div>
                        <h1>{user?.username || 'Utilisateur'}</h1>
                        <p className="muted">{user?.email}</p>
                        <span className="role-pill">{user?.role === 'Host' ? 'Hôte' : 'Locataire'}</span>
                    </div>
                </div>
                <div className="profile-actions">
                    <button type="button" onClick={handleEdit}>Modifier le profil</button>
                    <button type="button" className="ghost" onClick={handleLogout}>Déconnexion</button>
                </div>
            </section>
            <section className="profile-grid">
                <article className="profile-section">
                    <div className="section-header">
                        <div>
                            <p className="muted">Votre activité</p>
                            <h2>{user?.role === 'Host' ? 'Mes annonces' : 'Mes réservations'}</h2>
                        </div>
                        <Link to="/rooms" className="small-link">Tout voir</Link>
                    </div>
                    <div className="mini-cards">
                        {spotlightListings.map((listing) => (
                            <Link key={listing._id} to={`/listing/${listing._id}`} className="mini-card">
                                <img src={listing.image} alt={listing.title} />
                                <div>
                                    <p className="badge">{listing.type}</p>
                                    <h3>{listing.title}</h3>
                                    <p className="muted">{listing.city}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </article>
                <article className="profile-section">
                    <div className="section-header">
                        <div>
                            <p className="muted">Favoris</p>
                            <h2>Wishlist rapide</h2>
                        </div>
                        <Link to="/favorites" className="small-link">Gérer</Link>
                    </div>
                    {favoriteListings.length === 0 ? (
                        <p className="muted">Aucun favori pour le moment.</p>
                    ) : (
                        <div className="mini-cards">
                            {favoriteListings.map((listing) => (
                                <Link key={listing._id} to={`/listing/${listing._id}`} className="mini-card">
                                    <img src={listing.image} alt={listing.title} />
                                    <div>
                                        <p className="badge">{listing.type}</p>
                                        <h3>{listing.title}</h3>
                                        <p className="muted">{listing.city}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </article>
            </section>
        </main>
    );
};

export default Profile;
