import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const HostDiscussions = () => {
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
                    <p className="eyebrow">Host Discussions</p>
                    <h1>Connect with Fellow Hosts</h1>
                    <p className="lead">
                        Join conversations with experienced hosts, share your challenges, and learn from the community.
                    </p>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <div className="stat-number">15.2k</div>
                        <div className="stat-label">Active Hosts</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">89.4k</div>
                        <div className="stat-label">Discussions</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Community Support</div>
                    </div>
                </div>
            </section>

            <section className="content-intro">
                <h2>Share Your Hosting Journey</h2>
                <p>Whether you're just starting out or have years of experience, our host community is here to support you every step of the way.</p>
            </section>

            <section className="discussion-categories">
                <div className="categories-grid">
                    <div className="category-card featured">
                        <div className="card-header">
                            <div className="card-meta">Hot Topic</div>
                        </div>
                        <div className="category-icon">💰</div>
                        <h3>Revenue Optimization</h3>
                        <p>Strategies for maximizing income, dynamic pricing, and seasonal adjustments.</p>
                        <div className="category-stats">
                            <span>1.2k posts</span>
                            <span>89 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🧹</div>
                        <h3>Property Maintenance</h3>
                        <p>Tips for keeping your property in top condition and handling repairs.</p>
                        <div className="category-stats">
                            <span>856 posts</span>
                            <span>45 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">👥</div>
                        <h3>Guest Relations</h3>
                        <p>Managing difficult situations, building trust, and creating memorable experiences.</p>
                        <div className="category-stats">
                            <span>1.5k posts</span>
                            <span>67 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">📸</div>
                        <h3>Photography & Presentation</h3>
                        <p>Professional photography tips and staging advice for better listings.</p>
                        <div className="category-stats">
                            <span>623 posts</span>
                            <span>34 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">📋</div>
                        <h3>Legal & Regulations</h3>
                        <p>Understanding local laws, taxes, and compliance requirements.</p>
                        <div className="category-stats">
                            <span>742 posts</span>
                            <span>28 active</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🌟</div>
                        <h3>Success Stories</h3>
                        <p>Celebrate achievements and learn from other hosts' experiences.</p>
                        <div className="category-stats">
                            <span>934 posts</span>
                            <span>52 active</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="host-tips">
                <div className="tips-content">
                    <h2>Community Guidelines for Hosts</h2>
                    <div className="tips-grid">
                        <div className="tip-item">
                            <div className="tip-icon">🤝</div>
                            <h4>Be Supportive</h4>
                            <p>Share your knowledge generously and help new hosts succeed.</p>
                        </div>

                        <div className="tip-item">
                            <div className="tip-icon">🎯</div>
                            <h4>Stay Professional</h4>
                            <p>Maintain high standards and represent the hosting community well.</p>
                        </div>

                        <div className="tip-item">
                            <div className="tip-icon">🔒</div>
                            <h4>Respect Privacy</h4>
                            <p>Never share personal information about guests or other hosts.</p>
                        </div>

                        <div className="tip-item">
                            <div className="tip-icon">📈</div>
                            <h4>Share Successes</h4>
                            <p>Celebrate wins and help others learn from your experiences.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recent-discussions">
                <div className="discussions-content">
                    <h2>Recent Discussions</h2>
                    <div className="discussions-list">
                        <div className="discussion-item">
                            <div className="discussion-meta">
                                <span className="discussion-author">Sarah M.</span>
                                <span className="discussion-time">2 hours ago</span>
                                <span className="discussion-category">Revenue Optimization</span>
                            </div>
                            <h4>Dynamic pricing strategies for peak season</h4>
                            <p>Looking for advice on implementing smart pricing for summer months. What's worked for you?</p>
                            <div className="discussion-stats">
                                <span>12 replies</span>
                                <span>48 views</span>
                            </div>
                        </div>

                        <div className="discussion-item">
                            <div className="discussion-meta">
                                <span className="discussion-author">Mike R.</span>
                                <span className="discussion-time">5 hours ago</span>
                                <span className="discussion-category">Guest Relations</span>
                            </div>
                            <h4>Handling late-night arrivals</h4>
                            <p>What's your policy for guests arriving after midnight? Any tips for smooth handoffs?</p>
                            <div className="discussion-stats">
                                <span>8 replies</span>
                                <span>32 views</span>
                            </div>
                        </div>

                        <div className="discussion-item">
                            <div className="discussion-meta">
                                <span className="discussion-author">Emma L.</span>
                                <span className="discussion-time">1 day ago</span>
                                <span className="discussion-category">Property Maintenance</span>
                            </div>
                            <h4>Recommended cleaning services</h4>
                            <p>Can anyone recommend reliable cleaning services in their area? Looking for consistent quality.</p>
                            <div className="discussion-stats">
                                <span>15 replies</span>
                                <span>67 views</span>
                            </div>
                        </div>

                        <div className="discussion-item">
                            <div className="discussion-meta">
                                <span className="discussion-author">David K.</span>
                                <span className="discussion-time">2 days ago</span>
                                <span className="discussion-category">Legal & Regulations</span>
                            </div>
                            <h4>Short-term rental laws update</h4>
                            <p>Anyone following the new regulations in their city? How are you adapting?</p>
                            <div className="discussion-stats">
                                <span>23 replies</span>
                                <span>89 views</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="success-stories">
                <div className="stories-content">
                    <h2>Host Success Stories</h2>
                    <div className="stories-grid">
                        <div className="story-card">
                            <div className="story-quote">
                                "The host community helped me turn my vacation home into a full-time income source. The advice on pricing and guest communication was invaluable."
                            </div>
                            <div className="story-author">Maria Rodriguez, Host since 2019</div>
                        </div>

                        <div className="story-card">
                            <div className="story-quote">
                                "I was nervous about hosting, but the discussions about safety and guest screening gave me the confidence to start. Now I have guests booking months in advance!"
                            </div>
                            <div className="story-author">James Chen, Host since 2021</div>
                        </div>

                        <div className="story-card">
                            <div className="story-quote">
                                "The maintenance tips from experienced hosts saved me thousands in repairs. This community truly supports each other."
                            </div>
                            <div className="story-author">Sarah Thompson, Host since 2020</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Join the Conversation?</h2>
                    <p>Connect with hosts worldwide and grow your hosting business together.</p>
                    <div className="cta-actions">
                        <Link to="/auth" className="cta-button primary large">
                            Join Host Discussions
                        </Link>
                        <Link to="/getting-started" className="cta-button secondary large">
                            New to Hosting?
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HostDiscussions;