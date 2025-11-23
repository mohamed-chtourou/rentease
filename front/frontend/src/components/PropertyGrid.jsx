import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyGrid.css';

const PropertyGrid = ({ listings, title = "Our newest Ads" }) => {
    return (
        <div className="property-grid-section">
            <h2 className="section-title">{title}</h2>

            {listings.length === 0 ? (
                <p className="muted">Aucune annonce à afficher pour le moment.</p>
            ) : (
                <div className="property-grid">
                    {listings.map((listing) => (
                        <PropertyCard
                            key={listing._id}
                            listing={listing}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PropertyGrid;
