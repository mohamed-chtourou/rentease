import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const EarningsPricing = () => {
    const navigate = useNavigate();

    return (
        <div className="resource-page-container">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Back</button>
            </div>

            <section className="resource-hero">
                <div className="hero-content">
                    <p className="eyebrow">Earnings & Pricing</p>
                    <h1>Maximize Your Income</h1>
                    <p className="lead">
                        Learn smart pricing strategies and revenue optimization techniques to increase your earnings as a host.
                    </p>
                </div>
            </section>

            <section className="pricing-basics">
                <div className="pricing-content">
                    <h2>Pricing Fundamentals</h2>
                    <p className="pricing-intro">Setting the right price is crucial for attracting guests while maximizing your revenue.</p>

                    <div className="pricing-cards">
                        <div className="pricing-card featured">
                            <div className="card-header">
                                <div className="card-icon">🔍</div>
                                <h3>Market Research</h3>
                            </div>
                            <p>Study similar properties in your area to understand competitive pricing.</p>
                            <ul className="pricing-list">
                                <li><span className="checkmark">✓</span> Check competitor rates</li>
                                <li><span className="checkmark">✓</span> Consider location and amenities</li>
                                <li><span className="checkmark">✓</span> Factor in seasonal demand</li>
                                <li><span className="checkmark">✓</span> Monitor local events</li>
                            </ul>
                        </div>

                        <div className="pricing-card">
                            <div className="card-header">
                                <div className="card-icon">📈</div>
                                <h3>Dynamic Pricing</h3>
                            </div>
                            <p>Adjust rates based on demand, season, and booking patterns.</p>
                            <ul className="pricing-list">
                                <li><span className="checkmark">↗</span> Increase rates during peak seasons</li>
                                <li><span className="checkmark">↘</span> Offer weekday discounts</li>
                                <li><span className="checkmark">📅</span> Consider length of stay</li>
                                <li><span className="checkmark">📊</span> Respond to demand fluctuations</li>
                            </ul>
                        </div>

                        <div className="pricing-card">
                            <div className="card-header">
                                <div className="card-icon">💰</div>
                                <h3>Cost Analysis</h3>
                            </div>
                            <p>Calculate your costs to ensure profitable pricing.</p>
                            <ul className="pricing-list">
                                <li><span className="checkmark">⚡</span> Include utilities and maintenance</li>
                                <li><span className="checkmark">🧹</span> Factor in cleaning fees</li>
                                <li><span className="checkmark">💳</span> Account for platform fees</li>
                                <li><span className="checkmark">📉</span> Plan for vacancies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="strategies-section">
                <div className="strategies-content">
                    <h2>Pricing Strategies</h2>

                    <div className="strategy-grid">
                        <div className="strategy-item">
                            <div className="strategy-icon">📈</div>
                            <h3>Premium Pricing</h3>
                            <p>For luxury properties or high-demand locations</p>
                            <p className="strategy-tip">15-25% above market average</p>
                        </div>

                        <div className="strategy-item">
                            <div className="strategy-icon">🎯</div>
                            <h3>Competitive Pricing</h3>
                            <p>Match or slightly undercut similar properties</p>
                            <p className="strategy-tip">5-10% below premium competitors</p>
                        </div>

                        <div className="strategy-item">
                            <div className="strategy-icon">💰</div>
                            <h3>Budget Pricing</h3>
                            <p>Attract price-sensitive travelers</p>
                            <p className="strategy-tip">20-30% below market average</p>
                        </div>

                        <div className="strategy-item">
                            <div className="strategy-icon">📅</div>
                            <h3>Seasonal Pricing</h3>
                            <p>Adjust rates based on demand cycles</p>
                            <p className="strategy-tip">Peak: +20-50%, Off-peak: -10-20%</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="optimization-section">
                <div className="optimization-content">
                    <h2>Revenue Optimization Tips</h2>

                    <div className="optimization-grid">
                        <div className="opt-tip">
                            <h4>Increase Your Rates Gradually</h4>
                            <p>Test small price increases and monitor booking rates. A 10% increase that maintains 90% occupancy improves revenue.</p>
                        </div>

                        <div className="opt-tip">
                            <h4>Offer Minimum Stays</h4>
                            <p>Require 2-3 night minimums during peak periods to increase total revenue per booking.</p>
                        </div>

                        <div className="opt-tip">
                            <h4>Create Packages</h4>
                            <p>Bundle services like breakfast or airport transfer for premium pricing.</p>
                        </div>

                        <div className="opt-tip">
                            <h4>Monitor Performance</h4>
                            <p>Track your occupancy rates and adjust pricing based on real data, not assumptions.</p>
                        </div>

                        <div className="opt-tip">
                            <h4>Special Promotions</h4>
                            <p>Use limited-time discounts to fill vacancy gaps and maintain steady income.</p>
                        </div>

                        <div className="opt-tip">
                            <h4>Guest Reviews Matter</h4>
                            <p>Higher ratings allow for premium pricing. Focus on delivering exceptional service.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Start Optimizing Your Earnings</h2>
                    <p>Apply these strategies to maximize your rental income and grow your hosting business.</p>
                    <div className="cta-actions">
                        <Link to="/host/listing" className="cta-button primary large">
                            Start Earning
                        </Link>
                        <Link to="/host-resources" className="cta-button secondary large">
                            More Resources
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EarningsPricing;