import React from 'react';
import { Link } from 'react-router-dom';
import './ResourcePages.css';

const Responsible = () => {
    return (
        <div className="resource-page-container">
            {/* Navigation Header */}
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <Link to="/host-resources" className="back-link">← Back to Host Resources</Link>
            </div>

            {/* Hero Section */}
            <section className="resource-hero">
                <div className="hero-content">
                    <p className="eyebrow">Responsible Hosting</p>
                    <h1>Host with Purpose</h1>
                    <p className="lead">
                        Create positive impacts in your community while building a sustainable hosting business.
                    </p>

                    {/* Hero Stats */}
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">85%</div>
                            <div className="stat-label">Hosts Practice Sustainability</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">92%</div>
                            <div className="stat-label">Guests Value Responsible Hosts</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">4.8★</div>
                            <div className="stat-label">Avg Rating for Responsible Hosts</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="content-section">
                <div className="content-intro">
                    <h2>Core Principles of Responsible Hosting</h2>
                    <p>Build trust, respect your community, and create memorable experiences that benefit everyone involved.</p>
                </div>

                <div className="principles-grid">
                    <div className="principle-card">
                        <div className="principle-icon">🏘️</div>
                        <h3>Community Respect</h3>
                        <p>Be a good neighbor by respecting local regulations, maintaining quiet hours, and contributing positively to your community.</p>
                        <ul>
                            <li>Follow local zoning and permit requirements</li>
                            <li>Maintain appropriate noise levels</li>
                            <li>Support local businesses and initiatives</li>
                        </ul>
                    </div>

                    <div className="principle-card">
                        <div className="principle-icon">🌱</div>
                        <h3>Environmental Stewardship</h3>
                        <p>Minimize your environmental impact through sustainable practices that preserve the planet for future generations.</p>
                        <ul>
                            <li>Use energy-efficient appliances</li>
                            <li>Implement water conservation measures</li>
                            <li>Choose eco-friendly cleaning products</li>
                        </ul>
                    </div>

                    <div className="principle-card">
                        <div className="principle-icon">🤝</div>
                        <h3>Guest Safety & Trust</h3>
                        <p>Prioritize the safety and security of your guests while building trust through transparent and honest communication.</p>
                        <ul>
                            <li>Provide accurate listing descriptions</li>
                            <li>Maintain property safety standards</li>
                            <li>Respond promptly to guest concerns</li>
                        </ul>
                    </div>

                    <div className="principle-card">
                        <div className="principle-icon">⚖️</div>
                        <h3>Fair & Inclusive</h3>
                        <p>Create welcoming spaces that are accessible to all guests, regardless of background, ability, or circumstances.</p>
                        <ul>
                            <li>Ensure accessibility compliance</li>
                            <li>Avoid discriminatory practices</li>
                            <li>Provide clear cancellation policies</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Practical Guidelines */}
            <section className="content-section" style={{ background: '#f8f9fa' }}>
                <div className="content-intro">
                    <h2>Practical Guidelines</h2>
                    <p> actionable steps to implement responsible hosting practices in your daily operations.</p>
                </div>

                <div className="guidelines-grid">
                    <div className="guideline-section">
                        <h3>🏠 Property Management</h3>
                        <div className="guideline-items">
                            <div className="guideline-item">
                                <h4>Regular Maintenance</h4>
                                <p>Keep your property in excellent condition with regular inspections and timely repairs.</p>
                            </div>
                            <div className="guideline-item">
                                <h4>Clean & Sanitary</h4>
                                <p>Maintain high cleanliness standards using environmentally friendly products.</p>
                            </div>
                            <div className="guideline-item">
                                <h4>Safety First</h4>
                                <p>Install smoke detectors, fire extinguishers, and ensure all safety equipment works.</p>
                            </div>
                        </div>
                    </div>

                    <div className="guideline-section">
                        <h3>👥 Guest Relations</h3>
                        <div className="guideline-items">
                            <div className="guideline-item">
                                <h4>Clear Communication</h4>
                                <p>Set expectations upfront with detailed house rules and check-in procedures.</p>
                            </div>
                            <div className="guideline-item">
                                <h4>Responsive Support</h4>
                                <p>Be available to address guest questions and concerns promptly.</p>
                            </div>
                            <div className="guideline-item">
                                <h4>Cultural Respect</h4>
                                <p>Be mindful of cultural differences and create inclusive environments.</p>
                            </div>
                        </div>
                    </div>

                    <div className="guideline-section">
                        <h3>🌍 Community Impact</h3>
                        <div className="guideline-items">
                            <div className="guideline-item">
                                <h4>Local Engagement</h4>
                                <p>Share information about local attractions and support nearby businesses.</p>
                            </div>
                            <div className="guideline-item">
                                <h4>Noise Management</h4>
                                <p>Respect quiet hours and minimize disturbances to neighbors.</p>
                            </div>
                            <div className="guideline-item">
                                <h4>Parking Solutions</h4>
                                <p>Provide adequate parking and follow local parking regulations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stories */}
            <section className="impact-stories">
                <div className="stories-content">
                    <h2>Real Host Impact Stories</h2>
                    <p>Discover how responsible hosting creates positive change in communities around the world.</p>
                </div>

                <div className="stories-grid">
                    <div className="story-card">
                        <div className="story-icon">🌳</div>
                        <p className="story-quote">
                            "By implementing sustainable practices, I've reduced my property's carbon footprint by 40% while saving on utility costs. My guests appreciate the eco-friendly approach."
                        </p>
                        <div className="story-author">Maria, Barcelona Host</div>
                    </div>

                    <div className="story-card">
                        <div className="story-icon">🏘️</div>
                        <p className="story-quote">
                            "Being a responsible host means being part of the community. I volunteer at local events and recommend neighborhood businesses to my guests."
                        </p>
                        <div className="story-author">James, New York Host</div>
                    </div>

                    <div className="story-card">
                        <div className="story-icon">🤝</div>
                        <p className="story-quote">
                            "Focusing on accessibility has opened my property to more guests. The modifications I made for wheelchair access benefit everyone."
                        </p>
                        <div className="story-author">Sarah, London Host</div>
                    </div>
                </div>
            </section>

            {/* Resources & Support */}
            <section className="resources-section">
                <div className="resources-content">
                    <h2>Resources & Support</h2>
                    <p>Get the tools and knowledge you need to host responsibly and make a positive impact.</p>

                    <div className="resources-grid">
                        <div className="resource-card">
                            <h3>📚 Sustainability Guide</h3>
                            <p>Comprehensive guide to implementing eco-friendly practices in your hosting business.</p>
                            <button className="resource-button">Download Guide</button>
                        </div>

                        <div className="resource-card">
                            <h3>🏛️ Legal Compliance</h3>
                            <p>Stay informed about local regulations and legal requirements for short-term rentals.</p>
                            <button className="resource-button">View Requirements</button>
                        </div>

                        <div className="resource-card">
                            <h3>👥 Community Support</h3>
                            <p>Connect with other responsible hosts and share best practices in our community forum.</p>
                            <Link to="/community" className="resource-button">Join Discussion</Link>
                        </div>

                        <div className="resource-card">
                            <h3>🎯 Certification Program</h3>
                            <p>Earn recognition for your commitment to responsible hosting practices.</p>
                            <button className="resource-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Start Your Responsible Hosting Journey</h2>
                    <p>Join thousands of hosts who are making a positive impact while building successful businesses.</p>
                    <div className="cta-actions">
                        <Link to="/getting-started" className="cta-button primary large">Get Started Today</Link>
                        <Link to="/host-resources" className="cta-button secondary large">Explore Resources</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Responsible;
