import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/listings';

const SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSearch = async (e) => {
        e.preventDefault();

    const params = {};
    if (location) params.location = location;
    if (checkIn) params.checkIn = checkIn;
    if (checkOut) params.checkOut = checkOut;
    params.guests = guests; // Always send guests count

        try {
            const response = await axios.get(API_URL, { params });
            onSearch(response.data);
        } catch (error) {
            console.error('Erreur lors de la recherche :', error);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-pill-form">
            <div className="search-section">
                <label>Where</label>
                <input
                    placeholder="Search destinations"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <div className="search-section">
                <label>When</label>
                <div className="date-range">
                    <input
                        placeholder="Check in"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                    />
                    <input
                        placeholder="Check out"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                    />
                </div>
            </div>

            <div className="search-section who-section">
                <label>Who</label>
                <div className="number-input">
                    <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
                    <input 
                        type="number" 
                        value={guests} 
                        onChange={(e) => setGuests(Math.max(1, Math.min(16, parseInt(e.target.value) || 1)))}
                        min="1" 
                        max="16"
                    />
                    <button type="button" onClick={() => setGuests(Math.min(16, guests + 1))}>+</button>
                </div>
                <button type="submit" className="search-button">
                    <img src="/search-icon.png" alt="Search" style={{ width: 18, height: 18 }} />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;