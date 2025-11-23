import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Community = () => {
    const navigate = useNavigate();

    return (
        <div className="info-page">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
            </div>
            <section className="hero-panel">
                <p className="eyebrow">Community</p>
                <h1>Community Forum</h1>
                <p className="lead">
                    Connect with other hosts and renters, share experiences, and get advice.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Join the Conversation</h2>
                    <p>
                        Our community forum is a place to connect, learn, and grow together.
                    </p>
                    <ul className="bullets">
                        <li>Ask questions and get answers from experienced hosts</li>
                        <li>Share your success stories and tips</li>
                        <li>Stay updated on platform changes</li>
                        <li>Network with local hosts and guests</li>
                    </ul>
                </div>
            </section>

            <div className="content-card" style={{ textAlign: 'center' }}>
                <h3>Forum Coming Soon</h3>
                <p style={{ color: '#1e584f' }}>
                    We're building a vibrant community space. Check back soon!
                </p>
            </div>
        </div>
    );
};

export default Community;
