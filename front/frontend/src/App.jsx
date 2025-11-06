import React, { useState } from 'react';
import Header from './components/Header';
import MapView from './components/MapView';
import PropertyGrid from './components/PropertyGrid';
import AffordabilitySection from './components/AffordabilitySection';
import RentOptionsSection from './components/RentOptionsSection';
import HighlightsSection from './components/HighlightsSection';
import Footer from './components/Footer';
import { mockListings } from './data/mockListings';
import './App.css';

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Données de test centralisées
    const [listings, setListings] = useState(mockListings);

    const handleNewSearch = (data) => {
        setSearchResults(data);
    };

    return (
        <div className="App">
            <Header onSearch={handleNewSearch} />
            
            <div className="main-content">
                <h1 className="page-title">
                    Looking for a Home?
                </h1>
                
                {/* Carte Leaflet */}
                <div style={{ 
                    width: '90%', 
                    maxWidth: '1400px', 
                    margin: '2rem auto',
                    padding: '0 1rem'
                }}>
                    <MapView listings={listings} />
                </div>

                {/* Grille de propriétés "Our newest Ads" */}
                <PropertyGrid listings={listings} title="Our newest Ads" />

                {/* Highlights before affordability */}
                <HighlightsSection listings={listings} />

                {/* Find homes you can afford */}
                <AffordabilitySection listings={listings} />

                {/* Rent options trio */}
                <RentOptionsSection />
                
                <div className="results-container">
                    {loading && <p>Recherche en cours...</p>}
                    {error && <p className="error">{error}</p>}
                    
                    {searchResults.length > 0 && (
                        <p>Affichage de {searchResults.length} annonces trouvées.</p>
                    )}
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;