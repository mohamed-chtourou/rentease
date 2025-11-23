import React from 'react';
import './InfoPages.css';

const Trust = () => {
    return (
        <div className="info-page">
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
