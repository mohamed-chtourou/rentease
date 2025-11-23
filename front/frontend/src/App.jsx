import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Header from './components/Header';
import MapView from './components/MapView';
import PropertyGrid from './components/PropertyGrid';
import AffordabilitySection from './components/AffordabilitySection';
import RentOptionsSection from './components/RentOptionsSection';
import HighlightsSection from './components/HighlightsSection';
import Footer from './components/Footer';
import { mockListings } from './data/mockListings';
import Rentals from './pages/Rentals';
import { HostOnboarding } from './pages/AuthPlaceholder';
import LoginSignup from './components/LoginSignup';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import PropertyDetails from './pages/PropertyDetails';
import Legal from './pages/Legal';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Blog from './pages/Blog';
import Safety from './pages/Safety';
import Cancellation from './pages/Cancellation';
import Trust from './pages/Trust';
import Report from './pages/Report';
import HostResources from './pages/HostResources';
import Community from './pages/Community';
import Responsible from './pages/Responsible';
import './App.css';

// Home page content extracted for routing clarity
const HomeContent = ({ listings, onSearch, searchResults, loading, error, lastQuery, sourceError }) => (
    <>
        <Header onSearch={onSearch} isSearching={loading} />
        <div className="main-content">
            <h1 className="page-title">Looking for a Home?</h1>
            <div style={{ width: '90%', maxWidth: '1400px', margin: '2rem auto', padding: '0 1rem' }}>
                <MapView listings={listings} loading={loading} error={error || sourceError} />
            </div>
            <PropertyGrid listings={listings} title="Our newest Ads" />
            <HighlightsSection listings={listings} />
            <AffordabilitySection listings={listings} />
            <RentOptionsSection />
            <div className="results-container">
                {loading && <p aria-live="polite">Recherche en cours...</p>}
                {error && <p className="error" role="alert">{error}</p>}
                {sourceError && !loading && (
                    <p className="error" role="alert">{sourceError}</p>
                )}
                {lastQuery && !loading && (
                    <p>
                        {searchResults.length > 0
                            ? `Affichage de ${searchResults.length} annonces trouvées.`
                            : 'Aucune annonce trouvée pour votre recherche.'}
                    </p>
                )}
            </div>
        </div>
    </>
);

function App() {
    const [listings, setListings] = useState(mockListings);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sourceError, setSourceError] = useState(null);
    const [lastQuery, setLastQuery] = useState(null);

    useEffect(() => {
        const fetchListings = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/api/listings');
                if (response.data?.length) {
                    setListings(response.data);
                }
                setSourceError(null);
            } catch (err) {
                console.error('Erreur lors du chargement des annonces', err);
                setSourceError('Affichage des annonces démo : connexion serveur indisponible.');
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    const visibleListings = useMemo(() => {
        if (lastQuery) {
            return searchResults;
        }
        return listings;
    }, [lastQuery, listings, searchResults]);

    const matchesQueryLocally = (listing, params) => {
        const query = params.location?.toLowerCase();
        const fieldsToSearch = [
            listing.address,
            listing.city,
            listing.title,
            listing.description,
            ...(listing.highlights || []),
            ...(listing.notes || []),
        ].filter(Boolean);

        const basicMatch = query
            ? fieldsToSearch.some((field) => field.toLowerCase().includes(query))
            : true;

        if (!basicMatch) return false;

        if (params.checkIn) {
            const availableFrom = listing.availability?.availableFrom ? new Date(listing.availability.availableFrom) : null;
            if (availableFrom && availableFrom > new Date(params.checkIn)) {
                return false;
            }
        }

        if (params.checkOut) {
            const availableTo = listing.availability?.availableTo ? new Date(listing.availability.availableTo) : null;
            if (availableTo && availableTo < new Date(params.checkOut)) {
                return false;
            }
        }

        return true;
    };

    const handleNewSearch = async (params) => {
        setLoading(true);
        setError(null);
        setLastQuery(params);

        try {
            const response = await axios.get('http://localhost:5000/api/listings', { params });
            setSearchResults(response.data || []);
        } catch (err) {
            console.error('Erreur lors de la recherche :', err);
            const fallbackResults = listings.filter((listing) => matchesQueryLocally(listing, params));
            setSearchResults(fallbackResults);
            setError('Impossible de récupérer les annonces en direct. Résultats filtrés sur les données de démonstration.');
        } finally {
            setLoading(false);
        }
    };

    const listingsForDetails = searchResults.length ? searchResults : listings;

    return (
        <AuthProvider>
            <FavoritesProvider>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route
                                path="/"
                                element={(
                                    <HomeContent
                                        listings={visibleListings}
                                        onSearch={handleNewSearch}
                                        searchResults={searchResults}
                                        loading={loading}
                                        error={error}
                                        lastQuery={lastQuery}
                                        sourceError={sourceError}
                                    />
                                )}
                            />
                            <Route path="/rentals" element={<Rentals />} />
                            <Route path="/listing/:id" element={<PropertyDetails listings={listingsForDetails} />} />
                            <Route path="/login" element={<LoginSignup />} />
                            <Route path="/signup" element={<LoginSignup />} />
                            <Route path="/host" element={<HostOnboarding />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/help" element={<Faq />} />
                            <Route path="/faq" element={<Faq />} />
                        </Routes>
                        <Footer />
                    </div>
                </BrowserRouter>
            </FavoritesProvider>
        </AuthProvider>
    );
}

export default App;
