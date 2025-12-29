import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const GuestManagement = () => {
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
                    <p className="eyebrow">Host Resources</p>
                    <h1>Master Guest Management</h1>
                    <p className="lead">
                        Transform every guest interaction into a five-star experience.
                        Build lasting relationships that drive repeat bookings and exceptional reviews.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">95%</div>
                            <div className="stat-label">Guest Satisfaction</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">4.8★</div>
                            <div className="stat-label">Average Rating</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">87%</div>
                            <div className="stat-label">Repeat Guests</div>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-icon-large">👥</div>
                </div>
            </section>

            <section className="content-section">
                <div className="content-intro">
                    <h2>Essential Guest Management Strategies</h2>
                    <p>From first contact to final review, every interaction matters. Master these key areas to become a top-rated host.</p>
                </div>

                <div className="content-grid">
                    <div className="content-card featured">
                        <div className="card-header">
                            <div className="content-icon">💬</div>
                            <div className="card-meta">Foundation</div>
                        </div>
                        <h3>Communication Excellence</h3>
                        <p>Professional, timely communication builds trust and sets expectations from the very first message.</p>

                        <div className="communication-grid">
                            <div className="comm-item">
                                <div className="comm-icon">⚡</div>
                                <div className="comm-content">
                                    <h4>Response Times</h4>
                                    <ul>
                                        <li><strong>Initial Inquiry:</strong> Within 1 hour</li>
                                        <li><strong>Booking Request:</strong> Within 2 hours</li>
                                        <li><strong>Urgent Issues:</strong> Within 30 minutes</li>
                                        <li><strong>Regular Messages:</strong> Within 24 hours</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="comm-item">
                                <div className="comm-icon">📱</div>
                                <div className="comm-content">
                                    <h4>Communication Channels</h4>
                                    <ul>
                                        <li><strong>RentEase Messages:</strong> Primary platform</li>
                                        <li><strong>Phone:</strong> Urgent situations only</li>
                                        <li><strong>Email:</strong> Detailed confirmations</li>
                                        <li><strong>Emergency:</strong> Local contact numbers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="card-header">
                            <div className="content-icon">🏨</div>
                            <div className="card-meta">Operations</div>
                        </div>
                        <h3>Seamless Check-in & Check-out</h3>
                        <p>Create smooth transitions that leave lasting positive impressions and encourage return visits.</p>

                        <div className="process-timeline">
                            <div className="timeline-item">
                                <div className="timeline-number">1</div>
                                <div className="timeline-content">
                                    <h4>Pre-Arrival Welcome</h4>
                                    <p>Send detailed welcome message with check-in instructions, WiFi codes, parking info, and local recommendations.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-number">2</div>
                                <div className="timeline-content">
                                    <h4>Arrival Experience</h4>
                                    <p>Be available for check-in or provide self-check-in. Verify ID, give property tour, and address immediate questions.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-number">3</div>
                                <div className="timeline-content">
                                    <h4>During Stay Support</h4>
                                    <p>Check in periodically via message. Be responsive to issues and offer assistance proactively.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-number">4</div>
                                <div className="timeline-content">
                                    <h4>Smooth Departure</h4>
                                    <p>Confirm check-out time, provide final instructions, and collect keys/access devices promptly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="card-header">
                            <div className="content-icon">🎯</div>
                            <div className="card-meta">Service</div>
                        </div>
                        <h3>Special Requests & Accommodations</h3>
                        <p>Handle unique guest needs professionally while maintaining your boundaries and property standards.</p>

                        <div className="requests-matrix">
                            <div className="matrix-section">
                                <h4>Common Requests</h4>
                                <div className="request-tags">
                                    <span className="request-tag">Late Check-in/Out</span>
                                    <span className="request-tag">Extra Bedding</span>
                                    <span className="request-tag">Pet Accommodation</span>
                                    <span className="request-tag">Accessibility Needs</span>
                                    <span className="request-tag">Dietary Requirements</span>
                                    <span className="request-tag">Transportation Help</span>
                                </div>
                            </div>

                            <div className="matrix-section">
                                <h4>Response Framework</h4>
                                <div className="response-steps">
                                    <div className="response-step">
                                        <div className="step-icon">🔍</div>
                                        <span>Assess feasibility & impact</span>
                                    </div>
                                    <div className="response-step">
                                        <div className="step-icon">📋</div>
                                        <span>Check house rules & policies</span>
                                    </div>
                                    <div className="response-step">
                                        <div className="step-icon">💡</div>
                                        <span>Offer alternatives when needed</span>
                                    </div>
                                    <div className="response-step">
                                        <div className="step-icon">📝</div>
                                        <span>Document agreements clearly</span>
                                    </div>
                                    <div className="response-step">
                                        <div className="step-icon">✅</div>
                                        <span>Follow through on commitments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="card-header">
                            <div className="content-icon">⭐</div>
                            <div className="card-meta">Reputation</div>
                        </div>
                        <h3>Review Management & Growth</h3>
                        <p>Leverage reviews to build your reputation and attract more high-quality guests to your property.</p>

                        <div className="review-strategy">
                            <div className="strategy-section">
                                <h4>Encouraging Positive Reviews</h4>
                                <div className="strategy-tips">
                                    <div className="tip-item">
                                        <div className="tip-icon">🌟</div>
                                        <div className="tip-text">Deliver exceptional service consistently</div>
                                    </div>
                                    <div className="tip-item">
                                        <div className="tip-icon">📧</div>
                                        <div className="tip-text">Send review requests after successful stays</div>
                                    </div>
                                    <div className="tip-item">
                                        <div className="tip-icon">⚡</div>
                                        <div className="tip-text">Respond to reviews within 24 hours</div>
                                    </div>
                                    <div className="tip-item">
                                        <div className="tip-icon">🙏</div>
                                        <div className="tip-text">Thank guests for positive feedback</div>
                                    </div>
                                </div>
                            </div>

                            <div className="strategy-section">
                                <h4>Handling Negative Reviews</h4>
                                <div className="strategy-tips">
                                    <div className="tip-item">
                                        <div className="tip-icon">😌</div>
                                        <div className="tip-text">Stay professional and calm</div>
                                    </div>
                                    <div className="tip-item">
                                        <div className="tip-icon">🤝</div>
                                        <div className="tip-text">Take responsibility for issues</div>
                                    </div>
                                    <div className="tip-item">
                                        <div className="tip-icon">🔧</div>
                                        <div className="tip-text">Offer solutions or compensation</div>
                                    </div>
                                    <div className="tip-item">
                                        <div className="tip-icon">💬</div>
                                        <div className="tip-text">Follow up privately when appropriate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-card featured">
                        <div className="card-header">
                            <div className="content-icon">🛡️</div>
                            <div className="card-meta">Security</div>
                        </div>
                        <h3>Safety & Trust Building</h3>
                        <p>Create a secure environment for guests while protecting your property and personal information.</p>

                        <div className="security-grid">
                            <div className="security-item">
                                <div className="security-icon">🔐</div>
                                <h4>Guest Verification</h4>
                                <p>Always verify guest identity through RentEase's verification system before sharing access details.</p>
                            </div>

                            <div className="security-item">
                                <div className="security-icon">🚨</div>
                                <h4>Emergency Preparedness</h4>
                                <p>Have clear emergency procedures and provide local emergency contact numbers to all guests.</p>
                            </div>

                            <div className="security-item">
                                <div className="security-icon">📹</div>
                                <h4>Property Security</h4>
                                <p>Install and maintain security cameras, good locks, and adequate lighting throughout the property.</p>
                            </div>

                            <div className="security-item">
                                <div className="security-icon">🔒</div>
                                <h4>Privacy Protection</h4>
                                <p>Never share personal contact information. Use RentEase messaging for all communications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="success-stories">
                <div className="stories-content">
                    <h2>Success Stories from Top Hosts</h2>
                    <div className="stories-grid">
                        <div className="story-card">
                            <div className="story-quote">"Implementing structured communication protocols increased my response rate by 40% and boosted my ratings from 4.6 to 4.9 stars."</div>
                            <div className="story-author">- Sarah M., Downtown Apartment Host</div>
                        </div>
                        <div className="story-card">
                            <div className="story-quote">"Personalized check-in experiences and proactive guest support led to 85% repeat guest rate and consistent 5-star reviews."</div>
                            <div className="story-author">- Michael R., Beach House Host</div>
                        </div>
                        <div className="story-card">
                            <div className="story-quote">"Professional review management turned a negative experience into a loyal guest who now refers friends to my property."</div>
                            <div className="story-author">- Emma L., Mountain Cabin Host</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Elevate Your Guest Experience?</h2>
                    <p>Join thousands of successful hosts who have mastered guest management and consistently earn top ratings.</p>
                    <div className="cta-actions">
                        <Link to="/host/listing" className="cta-button primary large">
                            Start Your Journey
                        </Link>
                        <Link to="/contact" className="cta-button secondary large">
                            Get Expert Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GuestManagement;