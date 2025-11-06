import React from 'react';
// Imports des composants Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import des styles Leaflet
import './MapView.css'; // Import des styles personnalisés pour les popups

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

const MapView = ({ listings }) => {

    return (
        // MapContainer est le conteneur principal de la carte
        <MapContainer 
            center={defaultCenter} 
            zoom={12} 
            scrollWheelZoom={false} // Empêche le scroll de la page quand on est sur la carte
            style={mapContainerStyle}
        >
            {/* TileLayer charge les images de fond de carte (OpenStreetMap) */}
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Afficher les marqueurs pour chaque annonce */}
            {listings.map((listing) => {
                // Leaflet utilise des coordonnées au format [latitude, longitude]
                if (listing.location && listing.location.latitude && listing.location.longitude) {
                    const position = [listing.location.latitude, listing.location.longitude];

                    return (
                        <Marker key={listing._id} position={position}>
                            {/* Popup enrichie avec image et informations détaillées */}
                            <Popup maxWidth={300} minWidth={280}>
                                <div className="custom-popup">
                                    {/* Image de la propriété */}
                                    {listing.image && (
                                        <img 
                                            src={listing.image} 
                                            alt={listing.title}
                                            className="popup-image"
                                        />
                                    )}
                                    
                                    <div className="popup-content">
                                        {/* Titre */}
                                        <h3 className="popup-title">
                                            🏡 {listing.title}
                                        </h3>
                                        
                                        {/* Prix */}
                                        <div className="popup-price">
                                            {listing.price} dt/mois
                                        </div>
                                        
                                        {/* Détails (chambres, surface, etc.) */}
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
                                        
                                        {/* Description courte */}
                                        {listing.description && (
                                            <p className="popup-description">
                                                {listing.description.length > 100 
                                                    ? `${listing.description.substring(0, 100)}...` 
                                                    : listing.description}
                                            </p>
                                        )}
                                        
                                        {/* Lien vers la page de détails */}
                                        <a 
                                            href={`/listing/${listing._id}`} 
                                            className="popup-link"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                // Vous pouvez ajouter ici une navigation React Router
                                                window.location.href = `/listing/${listing._id}`;
                                            }}
                                        >
                                            Voir les détails →
                                        </a>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                }
                return null;
            })}
        </MapContainer>
    );
};

export default MapView;
