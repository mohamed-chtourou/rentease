import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const GettingStarted = () => {
    const navigate = useNavigate();

    return (
        <div className="resource-page-container">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
            </div>

            <section className="resource-hero">
                <div className="hero-content">
                    <p className="eyebrow">Getting Started</p>
                    <h1>Your Hosting Journey Begins Here</h1>
                    <p className="lead">
                        Follow our step-by-step guide to create your first listing and start welcoming guests.
                    </p>
                </div>
            </section>

            <section className="steps-section">
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Create Your Account</h3>
                            <p>Sign up as a host and complete your profile with personal information and payment details.</p>
                            <ul className="step-details">
                                <li>Choose "Host" during registration</li>
                                <li>Verify your identity</li>
                                <li>Set up payment preferences</li>
                                <li>Complete your host profile</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>List Your Property</h3>
                            <p>Use our intuitive listing tool to showcase your space to potential guests.</p>
                            <ul className="step-details">
                                <li>Describe your property in detail</li>
                                <li>Set competitive pricing</li>
                                <li>Upload high-quality photos</li>
                                <li>Define availability and rules</li>
                            </ul>
                            <Link to="/host/listing" className="step-action">Create Your Listing →</Link>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Get Verified</h3>
                            <p>Build trust with guests by completing our verification process.</p>
                            <ul className="step-details">
                                <li>Phone number verification</li>
                                <li>Email confirmation</li>
                                <li>Identity document upload</li>
                                <li>Address verification</li>
                            </ul>
                        </div>
                    </div>

                    <div className="step-card">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Welcome Your First Guest</h3>
                            <p>Once your listing goes live, start receiving booking requests.</p>
                            <ul className="step-details">
                                <li>Review booking requests</li>
                                <li>Communicate with guests</li>
                                <li>Prepare for check-in</li>
                                <li>Provide excellent service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="requirements-section">
                <div className="requirements-content">
                    <h2>Host Requirements</h2>
                    <p>To ensure the best experience for everyone, all hosts must meet these basic requirements:</p>

                    <div className="requirements-grid">
                        <div className="requirement-item">
                            <div className="req-icon">🏠</div>
                            <h4>Property Standards</h4>
                            <p>Your space must be clean, safe, and well-maintained</p>
                        </div>
                        <div className="requirement-item">
                            <div className="req-icon">📱</div>
                            <h4>Communication</h4>
                            <p>Respond to inquiries within 24 hours</p>
                        </div>
                        <div className="requirement-item">
                            <div className="req-icon">✅</div>
                            <h4>Verification</h4>
                            <p>Complete identity and property verification</p>
                        </div>
                        <div className="requirement-item">
                            <div className="req-icon">📋</div>
                            <h4>Legal Compliance</h4>
                            <p>Follow local laws and regulations</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tips-section">
                <div className="tips-content">
                    <h2>Pro Tips for New Hosts</h2>
                    <div className="tips-grid">
                        <div className="tip-card">
                            <h4>Start Small</h4>
                            <p>Begin with one property and expand as you gain experience and confidence in the RentEase platform.</p>
                        </div>
                        <div className="tip-card">
                            <h4>Be Responsive</h4>
                            <p>Quick responses to inquiries lead to more bookings and better reviews on our platform.</p>
                        </div>
                        <div className="tip-card">
                            <h4>Set Clear Expectations</h4>
                            <p>Clearly communicate house rules, check-in times, and amenities through your RentEase listing.</p>
                        </div>
                        <div className="tip-card">
                            <h4>Keep it Clean</h4>
                            <p>A clean space is the foundation of great guest experiences and positive RentEase reviews.</p>
                        </div>
                        <div className="tip-card">
                            <h4>Professional Photos</h4>
                            <p>High-quality photos showcasing your property will attract more guests on RentEase.</p>
                        </div>
                        <div className="tip-card">
                            <h4>Competitive Pricing</h4>
                            <p>Research similar properties and set competitive rates to maximize your RentEase bookings.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Get Started?</h2>
                    <p>Join thousands of successful hosts on RentEase today.</p>
                    <div className="cta-actions">
                        <Link to="/host/listing" className="cta-button primary large">
                            Create Your First Listing
                        </Link>
                        <Link to="/host-resources" className="cta-button secondary large">
                            Explore More Resources
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GettingStarted;