import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Press = () => {
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
                <p className="eyebrow">Press</p>
                <h1>Media & Press Resources</h1>
                <p className="lead">
                    News, updates, and media resources about RentEase.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Press Inquiries</h2>
                    <p>
                        For media inquiries, interviews, or press kits, please contact our communications team.
                    </p>
                </div>
            </section>

            <div className="content-card" style={{ textAlign: 'center' }}>
                <h3>Media Contact</h3>
                <p style={{ color: '#1e584f' }}>
                    Email us for press inquiries and media resources.
                </p>
            </div>
        </div>
    );
};

export default Press;
