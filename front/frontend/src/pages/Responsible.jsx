import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Responsible = () => {
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
                <p className="eyebrow">Responsible Hosting</p>
                <h1>Host Responsibly</h1>
                <p className="lead">
                    Guidelines for sustainable and respectful hosting practices.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Be a Great Host</h2>
                    <p>
                        Responsible hosting benefits everyone—your guests, your neighbors, and your community.
                    </p>
                    <ul className="bullets">
                        <li>Respect local regulations and zoning laws</li>
                        <li>Maintain good neighbor relations</li>
                        <li>Ensure property safety and cleanliness</li>
                        <li>Be responsive and communicative with guests</li>
                        <li>Consider environmental sustainability</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Responsible;
