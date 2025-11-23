import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Safety = () => {
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
                <p className="eyebrow">Safety</p>
                <h1>Safety Information</h1>
                <p className="lead">
                    Your safety is our priority. Learn about our safety features and best practices.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Staying Safe</h2>
                    <p>
                        We provide tools and guidelines to help keep all RentEase users safe during their rental experience.
                    </p>
                    <ul className="bullets">
                        <li>Verified listings and user profiles</li>
                        <li>Secure payment processing</li>
                        <li>24/7 support for safety concerns</li>
                        <li>Clear communication guidelines</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Safety;
