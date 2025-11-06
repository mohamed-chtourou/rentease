import React from 'react';
import './RentOptionsSection.css';

const RentOptionsSection = ({ onRoom, onHome, onLogin, onSignIn, onHost }) => {
  const handle = (fn, fallbackMsg) => () => {
    if (typeof fn === 'function') return fn();
    alert(fallbackMsg);
  };

  return (
    <section className="rent-options">
      {/* Left card: Rent a room */}
      <div className="rent-card">
        <div className="illustration-wrap">
          <img
            className="illustration"
            alt="Rent a room"
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=520&fit=crop"
          />
        </div>
        <h3 className="rent-title">Rent a room</h3>
        <button className="rent-cta" onClick={handle(onRoom, 'Find rentals: room')}>
          Find rentals
        </button>
      </div>

      {/* Middle card: info + auth */}
      <div className="rent-card info-card">
        <p className="info-text">
          We’re creating a seamless online experience - from shopping on the largest rental
          network, to applying, to paying rent.
        </p>
        <div className="auth-actions">
          <button className="auth-btn" onClick={handle(onLogin, 'Log in')}>Log in</button>
          <button className="auth-btn" onClick={handle(onSignIn, 'Sign in')}>Sign in</button>
        </div>
        <button className="host-btn" onClick={handle(onHost, 'Become a host')}>Become a host</button>
      </div>

      {/* Right card: Rent a home */}
      <div className="rent-card">
        <div className="illustration-wrap">
          <img
            className="illustration"
            alt="Rent a home"
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c54a?w=800&h=520&fit=crop"
          />
        </div>
        <h3 className="rent-title">Rent a home</h3>
        <button className="rent-cta" onClick={handle(onHome, 'Find rentals: home')}>
          Find rentals
        </button>
      </div>
    </section>
  );
};

export default RentOptionsSection;
