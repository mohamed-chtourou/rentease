import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const HostResources = () => {
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
                <p className="eyebrow">Host Resources</p>
                <h1>Tools & Guides for Hosts</h1>
                <p className="lead">
                    Everything you need to succeed as a RentEase host.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Hosting Made Easy</h2>
                    <p>
                        Access guides, tools, and best practices to make hosting simple and profitable.
                    </p>
                    <ul className="bullets">
                        <li>Step-by-step listing setup guides</li>
                        <li>Photography and description tips</li>
                        <li>Pricing optimization tools</li>
                        <li>Guest communication templates</li>
                        <li>Property management best practices</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default HostResources;
