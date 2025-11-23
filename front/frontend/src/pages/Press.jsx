import React from 'react';
import './InfoPages.css';

const Press = () => {
    return (
        <div className="info-page">
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
