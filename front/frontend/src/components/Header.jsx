import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => {
    const [view, setView] = useState('Homes');

    return (
        <header className="header-container">
            <div className="header-inner">
                <div className="main-nav">
                    <img src="/logo.png" alt="RentEase" className="logo" />
                </div>

                <div className="nav-tabs">
                <div
                    className={`nav-item ${view === 'Homes' ? 'active' : ''}`}
                    onClick={() => setView('Homes')}
                >
                    <img src="/House-icon.png" alt="" />
                    <span>Homes</span>
                </div>
                <div
                    className={`nav-item ${view === 'Rooms' ? 'active' : ''}`}
                    onClick={() => setView('Rooms')}
                >
                    <img src="/room-icon.png" alt="" />
                    <span>Rooms</span>
                </div>
            </div>
                <div className="user-actions">
                    <button className="host-button">Become a host</button>
                    <button className="chat-button">
                        <img src="/message-icon.png" alt="Messages" />
                    </button>
                    <button className="menu-button">
                        <img src="/menu-icon.png" alt="Menu" />
                    </button>
                </div>
            </div>
            
            {/* Search bar row beneath header */}
            <div className="header-search-row">
                <SearchBar onSearch={onSearch} />
            </div>
        </header>
    );
};

export default Header;