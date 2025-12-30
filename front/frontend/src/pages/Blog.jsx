import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Blog = () => {
    const navigate = useNavigate();

    return (
        <div className="info-page">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Back</button>
            </div>
            <section className="hero-panel">
                <p className="eyebrow">Blog</p>
                <h1>RentEase Blog</h1>
                <p className="lead">
                    Tips, insights, and stories from the rental community.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Coming Soon</h2>
                    <p>
                        We're working on bringing you helpful content about renting, hosting, and making the most of your rental experience.
                    </p>
                </div>
            </section>

            <div className="content-card" style={{ textAlign: 'center' }}>
                <h3>Stay Tuned</h3>
                <p style={{ color: '#1e584f' }}>
                    Check back soon for our latest articles and updates.
                </p>
            </div>
        </div>
    );
};

export default Blog;
