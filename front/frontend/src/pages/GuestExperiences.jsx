import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const GuestExperiences = () => {
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
                    <p className="eyebrow">Guest Experiences</p>
                    <h1>Share Your Travel Stories</h1>
                    <p className="lead">
                        Connect with fellow travelers, share your experiences, and discover hidden gems through our community.
                    </p>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-number">45.8k</div>
                        <div className="stat-label">Travel Stories</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">127</div>
                        <div className="stat-label">Countries</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Community Chat</div>
                    </div>
                </div>
            </section>

            <section className="content-intro">
                <h2>Every Journey Has a Story</h2>
                <p>From unforgettable stays to travel tips that make all the difference, our guest community is your gateway to better travel experiences.</p>
            </section>

            <section className="discussion-categories">
                <div className="categories-grid">
                    <div className="category-card featured">
                        <div className="card-header">
                            <div className="card-meta">Trending</div>
                        </div>
                        <div className="category-icon">🏖️</div>
                        <h3>Destination Guides</h3>
                        <p>Local insights, hidden gems, and authentic experiences from around the world.</p>
                        <div className="category-stats">
                            <span>2.1k posts</span>
                            <span>156 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🏠</div>
                        <h3>Property Reviews</h3>
                        <p>Honest reviews of stays, host interactions, and property conditions.</p>
                        <div className="category-stats">
                            <span>3.2k posts</span>
                            <span>203 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">💡</div>
                        <h3>Travel Tips</h3>
                        <p>Booking strategies, packing tips, and advice for stress-free trips.</p>
                        <div className="category-stats">
                            <span>1.8k posts</span>
                            <span>89 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">👨‍👩‍👧‍👦</div>
                        <h3>Family Travel</h3>
                        <p>Family-friendly destinations, kid-approved stays, and parenting travel hacks.</p>
                        <div className="category-stats">
                            <span>945 posts</span>
                            <span>67 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">💼</div>
                        <h3>Business Travel</h3>
                        <p>Workation spots, extended stays, and productivity tips for remote workers.</p>
                        <div className="category-stats">
                            <span>756 posts</span>
                            <span>45 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🌟</div>
                        <h3>Memorable Moments</h3>
                        <p>Share your most amazing travel experiences and inspire others.</p>
                        <div className="category-stats">
                            <span>1.3k posts</span>
                            <span>78 active</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="guest-tips">
                <div className="tips-content">
                    <h2>Travel Smarter with Community Wisdom</h2>
                    <div className="tips-grid">
                        <div className="tip-item">
                            <div className="tip-icon">🔍</div>
                            <h4>Research Thoroughly</h4>
                            <p>Read reviews carefully and check recent photos before booking.</p>
                        </div>

                        <div className="tip-item">
                            <div className="tip-icon">💬</div>
                            <h4>Communicate Early</h4>
                            <p>Message hosts promptly with your questions and requirements.</p>
                        </div>

                        <div className="tip-item">
                            <div className="tip-icon">📝</div>
                            <h4>Leave Honest Reviews</h4>
                            <p>Your feedback helps other travelers and improves the community.</p>
                        </div>

                        <div className="tip-item">
                            <div className="tip-icon">🤝</div>
                            <h4>Be Respectful</h4>
                            <p>Treat properties and hosts with the same care you'd want for your own home.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recent-discussions">
                <div className="discussions-content">
                    <h2>Recent Guest Stories</h2>
                    <div className="discussions-list">
                        <div className="discussion-item">
                            <div className="discussion-meta">
                                <span className="discussion-author">Lisa T.</span>
                                <span className="discussion-time">3 hours ago</span>
                                <span className="discussion-category">Destination Guides</span>
                            </div>
                            <h4>Hidden beaches in Bali that locals love</h4>
                            <p>After 2 weeks exploring Bali, here are my favorite undiscovered spots that made my trip unforgettable.</p>
                            <div className="discussion-stats">
                                <span>24 replies</span>
                                <span>156 views</span>
                            </div>
                        </div>

                        <div className="discussion-item">
                            <div className="discussion-meta">
                                <span className="discussion-author">James P.</span>
                                <span className="discussion-time">6 hours ago</span>
                                <span className="discussion-category">Property Reviews</span>
                            </div>
                            <h4>Amazing host experience in Tokyo</h4>
                            <p>Our host went above and beyond - from detailed guides to local recommendations. Truly exceptional service!</p>
                            <div className="discussion-stats">
                                <span>18 replies</span>
                                <span>92 views</span>
                            </div>
                        </div>

                        <div className="discussion-item">
                            <div className="discussion-meta">
                                <span className="discussion-author">Maria G.</span>
                                <span className="discussion-time">1 day ago</span>
                                <span className="discussion-category">Family Travel</span>
                            </div>
                            <h4>Best family-friendly Airbnbs in Europe</h4>
                            <p>Traveling with kids? Here are our top picks for comfortable, fun stays across Europe.</p>
                            <div className="discussion-stats">
                                <span>31 replies</span>
                                <span>203 views</span>
                            </div>
                        </div>

                        <div className="discussion-item">
                            <div className="discussion-meta">
                                <span className="discussion-author">Alex M.</span>
                                <span className="discussion-time">2 days ago</span>
                                <span className="discussion-category">Travel Tips</span>
                            </div>
                            <h4>Long-term stay essentials</h4>
                            <p>Planning a 3-month workation? Here's what you actually need vs. what you think you need.</p>
                            <div className="discussion-stats">
                                <span>27 replies</span>
                                <span>178 views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="success-stories">
                <div className="stories-content">
                    <h2>Guest Travel Stories</h2>
                    <div className="stories-grid">
                        <div className="story-card">
                            <div className="story-quote">
                                "Thanks to the community tips, I found the most amazing hidden restaurant in Paris. The locals-only recommendations made my trip truly authentic."
                            </div>
                            <div className="story-author">Sophie Laurent, Frequent Traveler</div>
                        </div>

                        <div className="story-card">
                            <div className="story-quote">
                                "The family travel advice helped me plan the perfect vacation for my kids. We discovered playgrounds, kid-friendly hosts, and made memories that will last forever."
                            </div>
                            <div className="story-author">Michael Chen, Family Traveler</div>
                        </div>

                        <div className="story-card">
                            <div className="story-quote">
                                "Business travel used to be stressful until I found this community. The workation tips and host recommendations made my extended stays productive and enjoyable."
                            </div>
                            <div className="story-author">Emma Rodriguez, Digital Nomad</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Share Your Story?</h2>
                    <p>Join thousands of travelers sharing experiences and discovering new adventures.</p>
                    <div className="cta-actions">
                        <Link to="/auth" className="cta-button primary large">
                            Join Guest Discussions
                        </Link>
                        <Link to="/host-resources" className="cta-button secondary large">
                            Become a Host
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GuestExperiences;