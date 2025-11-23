import React from 'react';
import './InfoPages.css';

const Careers = () => {
    return (
        <div className="info-page">
            <section className="hero-panel">
                <p className="eyebrow">Careers</p>
                <h1>Join Our Team</h1>
                <p className="lead">
                    Help us build the future of rental housing. We're looking for passionate people who want to make a difference.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Why RentEase?</h2>
                    <p>
                        We're on a mission to make finding and managing rental properties simple, transparent, and accessible to everyone.
                        Join a team that values innovation, collaboration, and customer satisfaction.
                    </p>
                </div>
            </section>

            <div className="content-card" style={{ textAlign: 'center' }}>
                <h3>Interested in joining us?</h3>
                <p style={{ color: '#1e584f' }}>
                    Check back soon for open positions or send us your resume.
                </p>
            </div>
        </div>
    );
};

export default Careers;
