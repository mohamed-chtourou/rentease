import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './UserMenu.css';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const getInitial = () => {
    return user?.username?.charAt(0).toUpperCase() || 'M';
  };

  return (
    <div className="user-menu-container" ref={menuRef}>
      <button 
        className="user-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User menu"
      >
        <div className="user-avatar">
          {getInitial()}
        </div>
      </button>

      {isOpen && (
        <div className="user-menu-dropdown">
          <div className="user-menu-header">
            <div className="user-avatar-large">
              {getInitial()}
            </div>
            <div className="user-info">
              <span className="user-name">{user?.username || 'User'}</span>
              <span className="user-email">{user?.email || ''}</span>
            </div>
          </div>

          <div className="user-menu-section">
            <Link to="/favorites" className="user-menu-item" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span>Favoris</span>
            </Link>

            <Link to="/trips" className="user-menu-item" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span>Voyages</span>
            </Link>

            <Link to="/messages" className="user-menu-item" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Messages</span>
            </Link>

            <Link to="/profile" className="user-menu-item" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>Profil</span>
            </Link>
          </div>

          <div className="user-menu-divider" />

          {user?.role === 'Host' && (
            <>
              <div className="user-menu-section">
                <Link to="/host/dashboard" className="user-menu-item host-item" onClick={() => setIsOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                  <div>
                    <div className="host-title">Devenir hôte</div>
                    <div className="host-subtitle">Devenir hôte et gagner des revenus supplémentaires, c'est facile.</div>
                  </div>
                </Link>
              </div>
              <div className="user-menu-divider" />
            </>
          )}

          <div className="user-menu-section">
            <Link to="/settings" className="user-menu-item" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m6-12l-5.2 3M7.2 15l-5.2 3m0-12l5.2 3M16.8 15l5.2 3"/>
              </svg>
              <span>Langues et devise</span>
            </Link>

            <Link to="/help" className="user-menu-item" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <span>Centre d'aide</span>
            </Link>
          </div>

          <div className="user-menu-divider" />

          <div className="user-menu-section">
            <button className="user-menu-item logout-item" onClick={handleLogout}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
