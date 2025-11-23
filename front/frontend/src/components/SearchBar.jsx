import React, { useState } from 'react';

const SearchBar = ({ onSearch, isSearching = false }) => {
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

        await onSearch(params);
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
                    <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} disabled={isSearching}>-</button>
                    <input
                        type="number"
                        value={guests}
                        onChange={(e) => setGuests(Math.max(1, Math.min(16, parseInt(e.target.value, 10) || 1)))}
                        min="1"
                        max="16"
                        disabled={isSearching}
                    />
                    <button type="button" onClick={() => setGuests(Math.min(16, guests + 1))} disabled={isSearching}>+</button>
                </div>
                <button type="submit" className="search-button" disabled={isSearching}>
                    <img src="/search-icon.png" alt="Search" style={{ width: 18, height: 18 }} />
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
