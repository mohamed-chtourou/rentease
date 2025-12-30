import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const PropertyManagement = () => {
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
                    <h1>Property Management</h1>
                    <p className="lead">
                        Keep your property in top condition and running smoothly. Learn essential maintenance,
                        cleaning standards, and inventory management to provide exceptional guest experiences.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="content-grid">
                    <div className="content-card">
                        <div className="content-icon">📋</div>
                        <h3>Maintenance Checklists</h3>
                        <p>Regular maintenance prevents costly repairs and ensures your property stays in excellent condition for guests.</p>

                        <div className="content-subgrid">
                            <div className="content-item">
                                <h4>Daily Maintenance</h4>
                                <ul>
                                    <li>Test all lights and switches</li>
                                    <li>Check water pressure and temperature</li>
                                    <li>Verify heating/cooling systems</li>
                                    <li>Inspect for any damage or issues</li>
                                    <li>Empty trash and recycling bins</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Weekly Maintenance</h4>
                                <ul>
                                    <li>Clean appliances thoroughly</li>
                                    <li>Vacuum carpets and rugs</li>
                                    <li>Wash bedding and towels</li>
                                    <li>Check smoke/CO detectors</li>
                                    <li>Test emergency equipment</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Monthly Maintenance</h4>
                                <ul>
                                    <li>Deep clean bathrooms and kitchen</li>
                                    <li>Check for pest issues</li>
                                    <li>Inspect plumbing fixtures</li>
                                    <li>Clean windows and curtains</li>
                                    <li>Service HVAC systems</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Seasonal Maintenance</h4>
                                <ul>
                                    <li>Check roof and gutters</li>
                                    <li>Inspect outdoor spaces</li>
                                    <li>Service heating systems</li>
                                    <li>Prepare for weather changes</li>
                                    <li>Update emergency supplies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">🧹</div>
                        <h3>Cleaning Standards</h3>
                        <p>Maintain high cleaning standards to ensure guest satisfaction and meet health and safety requirements.</p>

                        <div className="tips-columns">
                            <div className="tips-column">
                                <h4>Kitchen Cleaning</h4>
                                <ul>
                                    <li>Sanitize countertops and surfaces</li>
                                    <li>Clean appliances inside and out</li>
                                    <li>Scrub sink and dispose of old food</li>
                                    <li>Clean cabinets and drawers</li>
                                    <li>Mop floors thoroughly</li>
                                </ul>
                            </div>

                            <div className="tips-column">
                                <h4>Bathroom Cleaning</h4>
                                <ul>
                                    <li>Disinfect toilet, sink, and shower</li>
                                    <li>Clean mirrors and glass surfaces</li>
                                    <li>Replace towels and toiletries</li>
                                    <li>Mop floors and clean baseboards</li>
                                    <li>Check for mold or mildew</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tips-columns">
                            <div className="tips-column">
                                <h4>Bedroom & Living Areas</h4>
                                <ul>
                                    <li>Dust all surfaces and furniture</li>
                                    <li>Vacuum carpets and clean hard floors</li>
                                    <li>Wash windows and curtains</li>
                                    <li>Change bedding completely</li>
                                    <li>Organize closets and drawers</li>
                                </ul>
                            </div>

                            <div className="tips-column">
                                <h4>Common Areas</h4>
                                <ul>
                                    <li>Vacuum and mop all floors</li>
                                    <li>Clean light fixtures and switches</li>
                                    <li>Dust blinds and window treatments</li>
                                    <li>Empty and clean wastebaskets</li>
                                    <li>Check for wear and tear</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">📦</div>
                        <h3>Inventory Management</h3>
                        <p>Keep track of all property amenities and supplies to ensure nothing is missing when guests arrive.</p>

                        <div className="content-subgrid">
                            <div className="content-item">
                                <h4>Essential Supplies</h4>
                                <ul>
                                    <li>Toilet paper and tissues</li>
                                    <li>Trash bags and liners</li>
                                    <li>Laundry detergent</li>
                                    <li>Dish soap and sponges</li>
                                    <li>Cleaning supplies</li>
                                    <li>Light bulbs</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Amenities Checklist</h4>
                                <ul>
                                    <li>Bedding and towels</li>
                                    <li>Kitchen utensils and cookware</li>
                                    <li>Bathroom toiletries</li>
                                    <li>Entertainment equipment</li>
                                    <li>WiFi router and instructions</li>
                                    <li>Emergency kit</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tips-section">
                            <h4>Inventory Tips</h4>
                            <ul>
                                <li>Create a detailed checklist for each property</li>
                                <li>Take photos of inventory before each guest</li>
                                <li>Restock supplies immediately after checkout</li>
                                <li>Set up automatic reordering for consumables</li>
                                <li>Keep backup supplies for emergencies</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">🚨</div>
                        <h3>Emergency Preparedness</h3>
                        <p>Be prepared for emergencies to protect your guests and property. Have clear protocols for various situations.</p>

                        <div className="content-subgrid">
                            <div className="content-item">
                                <h4>Emergency Kit Essentials</h4>
                                <ul>
                                    <li>First aid supplies and manual</li>
                                    <li>Fire extinguishers (checked regularly)</li>
                                    <li>Flashlights and batteries</li>
                                    <li>Emergency contact numbers</li>
                                    <li>Local emergency services list</li>
                                    <li>Property emergency procedures</li>
                                </ul>
                            </div>

                            <div className="content-item">
                                <h4>Emergency Protocols</h4>
                                <ul>
                                    <li>Know location of shut-off valves</li>
                                    <li>Have backup power plans</li>
                                    <li>Prepare for severe weather</li>
                                    <li>Know nearest hospitals</li>
                                    <li>Have communication plans</li>
                                    <li>Document all emergency equipment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="content-card">
                        <div className="content-icon">🔧</div>
                        <h3>Working with Service Providers</h3>
                        <p>Build relationships with reliable service providers for maintenance and repairs.</p>

                        <div className="tips-grid">
                            <div className="tip-item">
                                <h4>Choosing Providers</h4>
                                <p>Select licensed, insured professionals with good reviews. Get multiple quotes and check references.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Maintenance Contracts</h4>
                                <p>Consider service contracts for HVAC, plumbing, and electrical work to ensure regular maintenance.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Emergency Contacts</h4>
                                <p>Keep a list of 24/7 emergency service providers for urgent repairs that can't wait.</p>
                            </div>

                            <div className="tip-item">
                                <h4>Cost Management</h4>
                                <p>Track maintenance costs and factor them into your pricing. Budget for regular upkeep and unexpected repairs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Keep Your Property in Top Shape</h2>
                    <p>Regular maintenance and high cleaning standards lead to better reviews and more bookings.</p>
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

export default PropertyManagement;