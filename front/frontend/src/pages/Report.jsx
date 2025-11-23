import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Report = () => {
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
                <p className="eyebrow">Report</p>
                <h1>Report an Issue</h1>
                <p className="lead">
                    Help us maintain a safe community by reporting concerns.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>What to Report</h2>
                    <p>
                        If you encounter inappropriate behavior, suspicious activity, or safety concerns, please let us know immediately.
                    </p>
                    <ul className="bullets">
                        <li>Fraudulent listings or users</li>
                        <li>Harassment or discrimination</li>
                        <li>Safety hazards in properties</li>
                        <li>Violations of terms of service</li>
                    </ul>
                </div>
            </section>

            <div className="content-card" style={{ textAlign: 'center' }}>
                <h3>Need to report something?</h3>
                <p style={{ color: '#1e584f' }}>
                    Contact our support team immediately with details of your concern.
                </p>
                <Link to="/contact" className="cta-button">
                    Contact Support
                </Link>
            </div>
        </div>
    );
};

export default Report;
