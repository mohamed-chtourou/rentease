import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HostResources.css';

const HostResources = () => {
    const navigate = useNavigate();

    return (
        <div className="host-resources-container">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
            </div>

            <section className="hero-section">
                <div className="hero-content">
                    <p className="eyebrow">Host Resources</p>
                    <h1>Everything You Need to Succeed</h1>
                    <p className="lead">
                        Comprehensive tools, guides, and support to help you become a successful RentEase host.
                    </p>
                    <div className="hero-actions">
                        <Link to="/host/listing" className="cta-button primary">
                            List Your Property
                        </Link>
                        <Link to="/host" className="cta-button secondary">
                            Become a Host
                        </Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Active Hosts</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">Satisfaction Rate</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="resources-grid">
                <Link to="/getting-started" className="resource-card-link">
                    <div className="resource-card">
                        <div className="resource-icon">📋</div>
                        <h3>Getting Started</h3>
                        <p>Step-by-step guides to create your first listing and start hosting.</p>
                        <ul className="resource-list">
                            <li>How to create a compelling listing</li>
                            <li>Setting the right price</li>
                            <li>Understanding host requirements</li>
                            <li>Verification process</li>
                        </ul>
                    </div>
                </Link>

                <Link to="/photography-presentation" className="resource-card-link">
                    <div className="resource-card">
                        <div className="resource-icon">📸</div>
                        <h3>Photography & Presentation</h3>
                        <p>Professional tips to showcase your property at its best.</p>
                        <ul className="resource-list">
                            <li>Best camera settings</li>
                            <li>Lighting techniques</li>
                            <li>Room staging tips</li>
                            <li>Photo editing basics</li>
                        </ul>
                    </div>
                </Link>

                <Link to="/earnings-pricing" className="resource-card-link">
                    <div className="resource-card">
                        <div className="resource-icon">💰</div>
                        <h3>Earnings & Pricing</h3>
                        <p>Maximize your income with smart pricing strategies.</p>
                        <ul className="resource-list">
                            <li>Dynamic pricing guide</li>
                            <li>Seasonal rate optimization</li>
                            <li>Competitor analysis</li>
                            <li>Revenue forecasting</li>
                        </ul>
                    </div>
                </Link>

                <Link to="/guest-management" className="resource-card-link">
                    <div className="resource-card">
                        <div className="resource-icon">👥</div>
                        <h3>Guest Management</h3>
                        <p>Build great relationships with your guests.</p>
                        <ul className="resource-list">
                            <li>Communication templates</li>
                            <li>Check-in/check-out procedures</li>
                            <li>Handling special requests</li>
                            <li>Review management</li>
                        </ul>
                    </div>
                </Link>

                <Link to="/property-management" className="resource-card-link">
                    <div className="resource-card">
                        <div className="resource-icon">🛠️</div>
                        <h3>Property Management</h3>
                        <p>Tools and tips for maintaining your property.</p>
                        <ul className="resource-list">
                            <li>Maintenance checklists</li>
                            <li>Cleaning standards</li>
                            <li>Inventory management</li>
                            <li>Emergency preparedness</li>
                        </ul>
                    </div>
                </Link>

                <Link to="/analytics-insights" className="resource-card-link">
                    <div className="resource-card">
                        <div className="resource-icon">📊</div>
                        <h3>Analytics & Insights</h3>
                        <p>Track your performance and grow your business.</p>
                        <ul className="resource-list">
                            <li>Performance dashboard</li>
                            <li>Booking analytics</li>
                            <li>Guest demographics</li>
                            <li>Growth strategies</li>
                        </ul>
                    </div>
                </Link>
            </section>

            <section className="support-section">
                <div className="support-content">
                    <h2>Need Help? We're Here for You</h2>
                    <p>Get support whenever you need it with our comprehensive host assistance program.</p>
                    <div className="support-options">
                        <div className="support-item">
                            <div className="support-icon">📞</div>
                            <h4>Phone Support</h4>
                            <p>Speak directly with our team</p>
                            <p className="contact-info">+216 98 769 351</p>
                        </div>
                        <div className="support-item">
                            <div className="support-icon">📧</div>
                            <h4>Email Support</h4>
                            <p>Detailed assistance for complex issues</p>
                            <p className="contact-info">rentease@gmail.com</p>
                        </div>
                        <div className="support-item">
                            <div className="support-icon">📚</div>
                            <h4>Knowledge Base</h4>
                            <p>Self-service resources and FAQs</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Start Your Hosting Journey?</h2>
                    <p>Join thousands of successful hosts on RentEase and start earning from your property today.</p>
                    <div className="cta-actions">
                        <Link to="/host/listing" className="cta-button primary large">
                            Create Your Listing
                        </Link>
                        <Link to="/contact" className="cta-button secondary large">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HostResources;
