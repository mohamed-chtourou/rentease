import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const AnalyticsInsights = () => {
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
                    <h1>Analytics & Insights</h1>
                    <p className="lead">
                        Track your performance, understand your guests, and make data-driven decisions to grow your hosting business.
                        Use analytics to optimize pricing, improve your listing, and increase bookings.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="content-grid">
                    <div className="content-card">
                        <div className="content-icon">📈</div>
                        <h3>Performance Dashboard</h3>
                        <p>Monitor key metrics to understand how your property is performing and identify areas for improvement.</p>

                        <div className="content-subgrid">
                            <div className="content-item">
                                <h4>Booking Metrics</h4>
                                <ul>
                                    <li><strong>Occupancy Rate:</strong> Percentage of nights booked</li>
                                    <li><strong>Booking Window:</strong> Average days between booking and check-in</li>
                                    <li><strong>Cancellation Rate:</strong> Percentage of cancelled bookings</li>
                                    <li><strong>Repeat Guests:</strong> Percentage returning guests</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Revenue Metrics</h4>
                                <ul>
                                    <li><strong>Average Daily Rate:</strong> Revenue per booked night</li>
                                    <li><strong>Revenue per Available:</strong> Total revenue divided by available nights</li>
                                    <li><strong>Booking Value:</strong> Average revenue per booking</li>
                                    <li><strong>Seasonal Trends:</strong> Performance by month/season</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tips-section">
                            <h4>Dashboard Best Practices</h4>
                            <ul>
                                <li>Review metrics weekly to spot trends early</li>
                                <li>Compare performance against similar properties</li>
                                <li>Track changes after implementing improvements</li>
                                <li>Use data to set realistic goals and benchmarks</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">👥</div>
                        <h3>Guest Demographics & Behavior</h3>
                        <p>Understand who your guests are and how they behave to better tailor your property and services.</p>

                        <div className="tips-columns">
                            <div className="tips-column">
                                <h4>Guest Profile Data</h4>
                                <ul>
                                    <li>Age groups and family composition</li>
                                    <li>Geographic locations and travel distance</li>
                                    <li>Booking frequency and patterns</li>
                                    <li>Preferred amenities and property types</li>
                                    <li>Budget ranges and spending habits</li>
                                    <li>Review scores and feedback themes</li>
                                </ul>
                            </div>

                            <div className="tips-column">
                                <h4>Behavioral Insights</h4>
                                <ul>
                                    <li>Most popular booking times</li>
                                    <li>Length of stay preferences</li>
                                    <li>Cancellation patterns</li>
                                    <li>Communication preferences</li>
                                    <li>Special request frequency</li>
                                    <li>Review timing and content</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">💰</div>
                        <h3>Pricing Optimization</h3>
                        <p>Use data to set competitive prices that maximize revenue while maintaining occupancy rates.</p>

                        <div className="content-subgrid">
                            <div className="content-item">
                                <h4>Dynamic Pricing Factors</h4>
                                <ul>
                                    <li>Seasonal demand patterns</li>
                                    <li>Day of week variations</li>
                                    <li>Local events and holidays</li>
                                    <li>Competitor pricing changes</li>
                                    <li>Weather impact on bookings</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Price Optimization Strategies</h4>
                                <ul>
                                    <li>A/B testing different price points</li>
                                    <li>Gradual price adjustments</li>
                                    <li>Minimum stay requirements</li>
                                    <li>Discounts for longer stays</li>
                                    <li>Early bird and last-minute pricing</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tips-section">
                            <h4>Pricing Tips</h4>
                            <ul>
                                <li>Monitor competitor rates daily during peak seasons</li>
                                <li>Test price changes gradually (5-10% at a time)</li>
                                <li>Consider raising prices when occupancy is consistently high</li>
                                <li>Lower prices strategically when demand is low</li>
                                <li>Factor in cleaning fees and occupancy costs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">🔍</div>
                        <h3>Competitor Analysis</h3>
                        <p>Study your competition to understand market positioning and identify opportunities for differentiation.</p>

                        <div className="content-subgrid">
                            <div className="content-item">
                                <h4>Market Research</h4>
                                <ul>
                                    <li>Similar properties in your area</li>
                                    <li>Their pricing strategies</li>
                                    <li>Amenities and services offered</li>
                                    <li>Review scores and guest feedback</li>
                                    <li>Occupancy rates and availability</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Competitive Advantages</h4>
                                <ul>
                                    <li>Unique amenities or features</li>
                                    <li>Superior location benefits</li>
                                    <li>Better value proposition</li>
                                    <li>Stronger host reviews</li>
                                    <li>More flexible cancellation policies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">📉</div>
                        <h3>Review Analysis & Improvement</h3>
                        <p>Analyze guest feedback to identify strengths and areas for improvement in your property and service.</p>

                        <div className="tips-columns">
                            <div className="tips-column">
                                <h4>Review Metrics</h4>
                                <ul>
                                    <li>Overall rating trends</li>
                                    <li>Response rate to reviews</li>
                                    <li>Common positive themes</li>
                                    <li>Recurring complaints</li>
                                    <li>Review score distribution</li>
                                </ul>
                            </div>

                            <div className="tips-column">
                                <h4>Improvement Actions</h4>
                                <ul>
                                    <li>Address negative feedback promptly</li>
                                    <li>Highlight positive aspects</li>
                                    <li>Implement guest suggestions</li>
                                    <li>Track improvement impact</li>
                                    <li>Share updates with guests</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">🚀</div>
                        <h3>Growth Strategies</h3>
                        <p>Use analytics to identify growth opportunities and scale your hosting business effectively.</p>

                        <div className="tips-grid">
                            <div className="tip-item">
                                <h4>Expansion Opportunities</h4>
                                <p>Analyze which seasons perform best and consider adding more properties during peak demand periods.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Revenue Optimization</h4>
                                <p>Identify high-margin services and amenities that guests value most, then focus on those offerings.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Marketing Insights</h4>
                                <p>Use booking data to understand which marketing channels drive the most valuable guests.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Operational Efficiency</h4>
                                <p>Track time spent on various tasks to identify automation opportunities and process improvements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Turn Data into Dollars</h2>
                    <p>Use analytics to make informed decisions that increase your bookings and revenue.</p>
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

export default AnalyticsInsights;