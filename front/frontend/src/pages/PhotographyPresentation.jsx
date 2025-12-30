import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResourcePages.css';

const PhotographyPresentation = () => {
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
                    <p className="eyebrow">Photography & Presentation</p>
                    <h1>Showcase Your Space Like a Pro</h1>
                    <p className="lead">
                        Learn professional photography techniques to make your listing stand out and attract more bookings.
                    </p>
                </div>
            </section>

            <section className="content-section">
                <div className="content-grid">
                    <div className="content-card">
                        <h3>📸 Camera Settings</h3>
                        <p>Use natural light and avoid flash. Shoot during golden hour (early morning or late afternoon) for the best results.</p>
                        <ul>
                            <li>Use your phone's highest resolution</li>
                            <li>Keep ISO low (100-400) for less noise</li>
                            <li>Focus on the subject, not the background</li>
                            <li>Hold camera steady or use a tripod</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <h3>💡 Lighting Techniques</h3>
                        <p>Good lighting can make or break your photos. Natural light is always best.</p>
                        <ul>
                            <li>Open all curtains and blinds</li>
                            <li>Turn on all lights in the room</li>
                            <li>Avoid shooting towards windows</li>
                            <li>Use reflectors to bounce light into dark areas</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <h3>🏠 Room Staging</h3>
                        <p>Present your space in its best light by decluttering and arranging thoughtfully.</p>
                        <ul>
                            <li>Remove personal items and clutter</li>
                            <li>Make beds with fresh linens</li>
                            <li>Arrange furniture to maximize space</li>
                            <li>Add fresh flowers or plants for appeal</li>
                        </ul>
                    </div>

                    <div className="content-card">
                        <h3>✨ Photo Editing</h3>
                        <p>Basic edits can enhance your photos without making them look artificial.</p>
                        <ul>
                            <li>Adjust brightness and contrast slightly</li>
                            <li>Crop to improve composition</li>
                            <li>Remove dust spots or minor imperfections</li>
                            <li>Maintain natural colors</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="photo-examples">
                <div className="examples-content">
                    <h2>Photo Checklist</h2>
                    <p>Every great listing needs these essential shots:</p>

                    <div className="checklist-grid">
                        <div className="checklist-item">
                            <div className="check-icon">✅</div>
                            <div className="check-content">
                                <h4>Exterior Shots</h4>
                                <p>Front of building, entrance, surrounding area</p>
                            </div>
                        </div>
                        <div className="checklist-item">
                            <div className="check-icon">✅</div>
                            <div className="check-content">
                                <h4>Living Areas</h4>
                                <p>Main rooms, seating areas, common spaces</p>
                            </div>
                        </div>
                        <div className="checklist-item">
                            <div className="check-icon">✅</div>
                            <div className="check-content">
                                <h4>Bedrooms</h4>
                                <p>All sleeping areas with made beds</p>
                            </div>
                        </div>
                        <div className="checklist-item">
                            <div className="check-icon">✅</div>
                            <div className="check-content">
                                <h4>Bathrooms</h4>
                                <p>Clean and well-lit bathroom photos</p>
                            </div>
                        </div>
                        <div className="checklist-item">
                            <div className="check-icon">✅</div>
                            <div className="check-content">
                                <h4>Kitchen</h4>
                                <p>Clean countertops and functional spaces</p>
                            </div>
                        </div>
                        <div className="checklist-item">
                            <div className="check-icon">✅</div>
                            <div className="check-content">
                                <h4>Amenities</h4>
                                <p>Show off special features and conveniences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tips-section">
                <div className="tips-content">
                    <h2>Photography Do's and Don'ts</h2>
                    <div className="tips-columns">
                        <div className="tips-column">
                            <h3>✅ Do's</h3>
                            <ul>
                                <li>Take photos during the day with natural light</li>
                                <li>Include wide shots and detail shots</li>
                                <li>Show real-life scenarios</li>
                                <li>Use a clean, uncluttered background</li>
                                <li>Photograph from multiple angles</li>
                            </ul>
                        </div>
                        <div className="tips-column">
                            <h3>❌ Don'ts</h3>
                            <ul>
                                <li>Don't use flash photography</li>
                                <li>Avoid blurry or poorly lit photos</li>
                                <li>Don't include people or pets</li>
                                <li>Never use stock photos</li>
                                <li>Avoid cluttered or messy spaces</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Take Better Photos?</h2>
                    <p>Apply these techniques to create stunning listings that attract more guests.</p>
                    <div className="cta-actions">
                        <Link to="/host/listing" className="cta-button primary large">
                            Create Your Listing
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

export default PhotographyPresentation;