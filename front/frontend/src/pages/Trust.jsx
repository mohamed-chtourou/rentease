import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Trust = () => {
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
                <p className="eyebrow">Trust & Safety</p>
                <h1>Building a Trusted Community</h1>
                <p className="lead">
                    How we maintain trust and safety across the RentEase platform.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Our Commitment</h2>
                    <p>
                        We work hard to create a trustworthy environment for everyone using RentEase.
                    </p>
                    <ul className="bullets">
                        <li>Identity verification for all users</li>
                        <li>Review and rating system</li>
                        <li>Secure messaging platform</li>
                        <li>Fraud detection and prevention</li>
                        <li>Community standards enforcement</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Trust;
