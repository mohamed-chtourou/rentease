import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const Header = ({ onSearch }) => {
    const [view, setView] = useState('Homes');
    const { isAuthenticated } = useAuth();

        return (
            <header className="header-container">
                <div className="header-inner">
                    <div className="main-nav">
                        <Link to="/">
                            <img src="/logo.png" alt="RentEase" className="logo" />
                        </Link>
                    </div>
                    <div className="nav-tabs">
                        <Link
                            to="/"
                            className={`nav-item ${view === 'Homes' ? 'active' : ''}`}
                            onClick={() => setView('Homes')}
                        >
                            <img src="/House-icon.png" alt="" />
                            <span>Homes</span>
                        </Link>
                        <Link
                            to="/rentals?type=room"
                            className={`nav-item ${view === 'Rooms' ? 'active' : ''}`}
                            onClick={() => setView('Rooms')}
                        >
                            <img src="/room-icon.png" alt="" />
                            <span>Rooms</span>
                        </Link>
                    </div>
                    <div className="user-actions">
                        <Link to="/host" className="host-button">Become a host</Link>
                        <Link to="/messages" className="chat-button" aria-label="Messages">
                            <img src="/message-icon.png" alt="Messages" />
                        </Link>
                        {isAuthenticated ? (
                            <UserMenu />
                        ) : (
                            <Link to="/login" className="menu-button" aria-label="Menu">
                                <img src="/menu-icon.png" alt="Menu" />
                            </Link>
                        )}
                    </div>
                </div>
                <div className="header-search-row">
                    <SearchBar onSearch={onSearch} />
                </div>
            </header>
        );
};

export default Header;