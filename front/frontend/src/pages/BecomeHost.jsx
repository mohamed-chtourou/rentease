import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const BecomeHost = () => {
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
                <p className="eyebrow">Become a Host</p>
                <h1>Earn Money by Renting Your Space</h1>
                <p className="lead">
                    Join thousands of hosts who are making the most of their properties on RentEase.
                </p>
                <Link to="/host/listing" className="cta-button">
                    Start Hosting Today
                </Link>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Why Host on RentEase?</h2>
                    <p>
                        Hosting on RentEase is easy, flexible, and rewarding. Whether you have an extra room, a vacation home, or a unique space, you can turn it into income.
                    </p>
                    <ul className="bullets">
                        <li>Set your own schedule and pricing</li>
                        <li>Reach millions of potential renters</li>
                        <li>Get paid securely and on time</li>
                        <li>Access to host resources and support</li>
                        <li>Join a community of successful hosts</li>
                    </ul>
                </div>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>How It Works</h2>
                    <ol className="numbered-list">
                        <li><strong>Create your account:</strong> Sign up as a host and verify your identity.</li>
                        <li><strong>List your space:</strong> Add photos, description, and set your rates.</li>
                        <li><strong>Welcome guests:</strong> Communicate with renters and provide a great experience.</li>
                        <li><strong>Get paid:</strong> Receive payments directly to your account.</li>
                    </ol>
                </div>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Ready to Get Started?</h2>
                    <p>
                        Becoming a host is quick and free. Join RentEase today and start earning from your property.
                    </p>
                    <Link to="/host/listing" className="cta-button secondary">
                        Become a Host Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BecomeHost;