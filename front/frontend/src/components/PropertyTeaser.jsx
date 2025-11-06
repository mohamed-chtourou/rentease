import React, { useState } from 'react';
import './PropertyTeaser.css';

const PropertyTeaser = ({ listing, onRequest }) => {
  const [fav, setFav] = useState(false);

  const handleRequest = () => {
    if (onRequest) onRequest(listing);
    else alert(`Request a tour for: ${listing.title}`);
  };

  return (
    <div className="teaser-card">
      <div className="teaser-image-wrap">
        <img className="teaser-image" src={listing.image} alt={listing.title} />
        <button
          className={`teaser-fav ${fav ? 'active' : ''}`}
          onClick={() => setFav(v => !v)}
          aria-label="Toggle favorite"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <button className="teaser-cta" onClick={handleRequest}>
        <span className="cta-icon">🏛️</span>
        Request a tour
      </button>
    </div>
  );
};

export default PropertyTeaser;
