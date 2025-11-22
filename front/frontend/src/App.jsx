import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import MapView from './components/MapView';
import PropertyGrid from './components/PropertyGrid';
import AffordabilitySection from './components/AffordabilitySection';
import RentOptionsSection from './components/RentOptionsSection';
import HighlightsSection from './components/HighlightsSection';
import Footer from './components/Footer';
import { mockListings } from './data/mockListings';
import Rentals from './pages/Rentals';
import { LoginPage, SignupPage, HostOnboarding } from './pages/AuthPlaceholder';
import LoginSignup from './components/LoginSignup';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Legal from './pages/Legal';
import './App.css';
// Home page content extracted for routing clarity
const HomeContent = ({ listings, onSearch, searchResults, loading, error }) => (
    <>
        <Header onSearch={onSearch} />
        <div className="main-content">
            <h1 className="page-title">Looking for a Home?</h1>
            <div style={{ width: '90%', maxWidth: '1400px', margin: '2rem auto', padding: '0 1rem' }}>
                <MapView listings={listings} />
            </div>
            <PropertyGrid listings={listings} title="Our newest Ads" />
            <HighlightsSection listings={listings} />
            <AffordabilitySection listings={listings} />
            <RentOptionsSection />
            <div className="results-container">
                {loading && <p>Recherche en cours...</p>}
                {error && <p className="error">{error}</p>}
                {searchResults.length > 0 && (
                    <p>Affichage de {searchResults.length} annonces trouvées.</p>
                )}
            </div>
        </div>
    </>
);

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const loading = false;
    const error = null;
    const listings = mockListings;

    const handleNewSearch = (data) => {
        setSearchResults(data);
    };

    return (
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomeContent listings={listings} onSearch={handleNewSearch} searchResults={searchResults} loading={loading} error={error} />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/signup" element={<LoginSignup />} />
              <Route path="/host" element={<HostOnboarding />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Faq />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    );
}

export default App;