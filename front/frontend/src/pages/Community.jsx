import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const Community = () => {
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
                    <p className="eyebrow">Community</p>
                    <h1>Connect, Share, Grow Together</h1>
                    <p className="lead">
                        Join thousands of hosts and guests in our vibrant community forum. Share experiences, get advice, and build lasting connections.
                    </p>
                </div>
            </section>

            <section className="content-intro">
                <h2>Why Join Our Community?</h2>
                <p>Our community forum is more than just a discussion space—it's where RentEase hosts and guests come together to share knowledge, solve problems, and celebrate successes.</p>
            </section>

            <section className="forum-categories">
                <div className="categories-grid">
                    <div className="category-card">
                        <div className="category-icon">🏠</div>
                        <h3>Host Discussions</h3>
                        <p>Share hosting tips, ask questions about property management, and learn from experienced hosts.</p>
                        <div className="category-stats">
                            <span>2.3k members</span>
                            <span>156 discussions</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🗣️</div>
                        <h3>Guest Experiences</h3>
                        <p>Discuss travel tips, share booking advice, and help fellow travelers find their perfect stay.</p>
                        <div className="category-stats">
                            <span>1.8k members</span>
                            <span>89 discussions</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">💡</div>
                        <h3>Platform Updates</h3>
                        <p>Stay informed about new features, policy changes, and platform improvements.</p>
                        <div className="category-stats">
                            <span>3.1k members</span>
                            <span>45 discussions</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🌍</div>
                        <h3>Local Communities</h3>
                        <p>Connect with hosts and guests in your area for local insights and networking opportunities.</p>
                        <div className="category-stats">
                            <span>950 members</span>
                            <span>67 discussions</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🛠️</div>
                        <h3>Technical Support</h3>
                        <p>Get help with account issues, booking problems, and technical questions.</p>
                        <div className="category-stats">
                            <span>2.7k members</span>
                            <span>203 discussions</span>
                        </div>
                    </div>

                    <div className="category-card">
                        <div className="category-icon">🎉</div>
                        <h3>Success Stories</h3>
                        <p>Celebrate achievements, share positive experiences, and inspire others in the community.</p>
                        <div className="category-stats">
                            <span>1.5k members</span>
                            <span>78 discussions</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="guidelines-section">
                <div className="guidelines-content">
                    <h2>Community Guidelines</h2>
                    <p className="section-intro">Help us maintain a positive and respectful environment for everyone</p>

                    <div className="guidelines-grid">
                        <div className="guideline-item">
                            <div className="guideline-icon">🤝</div>
                            <h4>Be Respectful</h4>
                            <p>Treat all members with kindness and respect, regardless of background or experience level.</p>
                        </div>

                        <div className="guideline-item">
                            <div className="guideline-icon">🎯</div>
                            <h4>Stay On Topic</h4>
                            <p>Keep discussions relevant to hosting, traveling, and the RentEase platform.</p>
                        </div>

                        <div className="guideline-item">
                            <div className="guideline-icon">🚫</div>
                            <h4>No Spam</h4>
                            <p>Avoid promotional content and focus on genuine community discussions.</p>
                        </div>

                        <div className="guideline-item">
                            <div className="guideline-icon">🔒</div>
                            <h4>Privacy First</h4>
                            <p>Never share personal information or ask for private details from other members.</p>
                        </div>

                        <div className="guideline-item">
                            <div className="guideline-icon">⚖️</div>
                            <h4>Follow Rules</h4>
                            <p>Adhere to RentEase's terms of service and local laws in all interactions.</p>
                        </div>

                        <div className="guideline-item">
                            <div className="guideline-icon">💬</div>
                            <h4>Constructive Feedback</h4>
                            <p>Provide helpful, constructive feedback when sharing experiences or advice.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="getting-started-forum">
                <div className="forum-steps">
                    <h2>Getting Started in the Forum</h2>
                    <p className="section-intro">Follow these simple steps to become an active community member</p>

                    <div className="forum-steps-grid">
                        <div className="forum-step">
                            <div className="step-number">1</div>
                            <h4>Create Your Profile</h4>
                            <p>Complete your community profile with a photo and brief bio to help others get to know you.</p>
                        </div>

                        <div className="forum-step">
                            <div className="step-number">2</div>
                            <h4>Introduce Yourself</h4>
                            <p>Start with a friendly introduction in the welcome section to connect with fellow members.</p>
                        </div>

                        <div className="forum-step">
                            <div className="step-number">3</div>
                            <h4>Find Your Niche</h4>
                            <p>Browse different categories and join discussions that interest you most.</p>
                        </div>

                        <div className="forum-step">
                            <div className="step-number">4</div>
                            <h4>Share Your Knowledge</h4>
                            <p>Contribute by answering questions and sharing your experiences with the community.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="community-stats">
                <div className="stats-content">
                    <h2>Community by the Numbers</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">15,000+</div>
                            <div className="stat-label">Active Members</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50,000+</div>
                            <div className="stat-label">Discussions</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Community Support</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">150+</div>
                            <div className="stat-label">Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Join the Conversation?</h2>
                    <p>Become part of our growing community of hosts and travelers today.</p>
                    <div className="cta-actions">
                        <Link to="/auth" className="cta-button primary large">
                            Join the Community
                        </Link>
                        <Link to="/host-resources" className="cta-button secondary large">
                            Explore Host Resources
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;
