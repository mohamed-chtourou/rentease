import React from 'react';
import './HighlightsSection.css';

const HighlightsSection = ({ listings = [], onLogin, onSignIn }) => {
  const top = listings[0];
  const second = listings[1] || top;
  const third = listings[2] || second;

  return (
    <section className="highlights-wrapper">
      {/* Seasonal / feature highlight */}
      <div className="highlight feature-block">
        <div className="feature-text">
          <h2 className="feature-title">See what’s new this fall</h2>
          <p className="feature-sub">smarter tools to make your home journey easier and more fun.</p>
        </div>
        <button className="feature-btn" onClick={() => alert('Fall Launch coming soon')}>Fall Launch</button>
      </div>

      {/* Recommendations / auth prompt */}
      <div className="recommend-block">
        <div className="recommend-text">
          <h2 className="recommend-title">Get home recommendations</h2>
          <p className="recommend-sub">Sign in for a more personalized experience.</p>
          <div className="recommend-actions">
            <button className="auth-button" onClick={() => (onLogin ? onLogin() : alert('Login placeholder'))}>Log in</button>
            <button className="auth-button" onClick={() => (onSignIn ? onSignIn() : alert('Sign in placeholder'))}>Sign in</button>
          </div>
        </div>
        {/* Stacked preview */}
        <div className="card-stack">
          {top && (
            <div className="stack-card top">
              <img src={top.image} alt={top.title} loading="lazy" />
              <button className="stack-heart" aria-label="favorite">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
              <div className="stack-meta">
                <span className="stack-details">{top.bedrooms} bds | {top.bathrooms} ba | {top.surface}m</span>
                <span className="stack-price">{top.price}DT</span>
              </div>
            </div>
          )}
          {second && (
            <div className="stack-card mid" aria-hidden="true" style={{ backgroundImage: `url(${second.image})` }} />
          )}
          {third && (
            <div className="stack-card back" aria-hidden="true" style={{ backgroundImage: `url(${third.image})` }} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
