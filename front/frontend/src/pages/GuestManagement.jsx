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
                    <h1>Guest Management</h1>
                    <p className="lead">
                        Build lasting relationships with your guests through excellent communication and service.
                        Learn how to create memorable experiences that lead to positive reviews and repeat bookings.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="content-grid">
                    <div className="content-card">
                        <div className="content-icon">💬</div>
                        <h3>Communication Best Practices</h3>
                        <p>Effective communication is the foundation of great guest experiences. Here's how to communicate professionally and build trust.</p>

                        <div className="content-subgrid">
                            <div className="content-item">
                                <h4>Response Time Guidelines</h4>
                                <ul>
                                    <li><strong>Initial Inquiry:</strong> Respond within 1 hour during business hours</li>
                                    <li><strong>Booking Requests:</strong> Respond within 2 hours</li>
                                    <li><strong>Urgent Issues:</strong> Respond within 30 minutes</li>
                                    <li><strong>Regular Messages:</strong> Respond within 24 hours</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Communication Channels</h4>
                                <ul>
                                    <li><strong>RentEase Messages:</strong> Primary communication platform</li>
                                    <li><strong>Phone:</strong> For urgent situations only</li>
                                    <li><strong>Email:</strong> For detailed information and confirmations</li>
                                    <li><strong>Emergency Contact:</strong> Always provide local emergency numbers</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">📝</div>
                        <h3>Check-in & Check-out Procedures</h3>
                        <p>Streamline your guest arrival and departure process to ensure smooth transitions and positive first and last impressions.</p>

                        <div className="steps-container">
                            <div className="step-card">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Pre-Check-in Communication</h4>
                                    <p>Send welcome message 24 hours before arrival with check-in instructions, WiFi details, and parking information.</p>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Check-in Process</h4>
                                    <p>Be available for check-in or provide self-check-in options. Verify guest ID and provide property tour.</p>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>During Stay Support</h4>
                                    <p>Check in periodically and be responsive to any issues or questions that arise during the guest's stay.</p>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Check-out Procedures</h4>
                                    <p>Confirm check-out time, provide final instructions, and collect keys or access devices promptly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">🎯</div>
                        <h3>Handling Special Requests</h3>
                        <p>Guests often have unique needs. Learn how to accommodate special requests while maintaining your boundaries.</p>

                        <div className="tips-columns">
                            <div className="tips-column">
                                <h4>Common Special Requests</h4>
                                <ul>
                                    <li>Late check-in/check-out</li>
                                    <li>Extra bedding or amenities</li>
                                    <li>Pet accommodations</li>
                                    <li>Accessibility needs</li>
                                    <li>Dietary restrictions</li>
                                    <li>Transportation assistance</li>
                                </ul>
                            </div>

                            <div className="tips-column">
                                <h4>Response Strategy</h4>
                                <ul>
                                    <li>Assess feasibility and impact</li>
                                    <li>Check your house rules first</li>
                                    <li>Offer alternatives when needed</li>
                                    <li>Document agreements clearly</li>
                                    <li>Follow through on commitments</li>
                                    <li>Charge appropriate fees if applicable</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">⭐</div>
                        <h3>Review Management</h3>
                        <p>Reviews are crucial for your success. Learn how to encourage positive reviews and handle negative feedback professionally.</p>

                        <div className="content-subgrid">
                            <div className="content-item">
                                <h4>Encouraging Reviews</h4>
                                <ul>
                                    <li>Provide exceptional service</li>
                                    <li>Send review requests after check-out</li>
                                    <li>Respond to reviews promptly</li>
                                    <li>Thank guests for positive feedback</li>
                                    <li>Address concerns in negative reviews</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Handling Negative Reviews</h4>
                                <ul>
                                    <li>Stay professional and calm</li>
                                    <li>Take responsibility for issues</li>
                                    <li>Offer solutions or compensation</li>
                                    <li>Respond publicly with resolution</li>
                                    <li>Follow up privately if needed</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">🛡️</div>
                        <h3>Safety & Security</h3>
                        <p>Ensure guest safety while protecting your property and personal information.</p>

                        <div className="tips-grid">
                            <div className="tip-item">
                                <h4>Guest Verification</h4>
                                <p>Always verify guest identity through RentEase's verification system before sharing access details.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Emergency Protocols</h4>
                                <p>Have clear emergency procedures and provide local emergency contact numbers to all guests.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Property Security</h4>
                                <p>Install and maintain security cameras, good locks, and lighting. Inform guests about security features.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Privacy Protection</h4>
                                <p>Never share personal contact information. Use RentEase messaging for all communications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Provide Exceptional Guest Experiences?</h2>
                    <p>Apply these guest management strategies to build your reputation as a top RentEase host.</p>
                    <div className="cta-actions">
                        <Link to="/host/listing" className="cta-button primary large">
                            List Your Property
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

export default GuestManagement;