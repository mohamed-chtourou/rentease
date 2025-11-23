import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Legal = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to hash target after route change (React Router doesn't always auto-scroll in SPAs)
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                // Smooth scroll for better UX
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            // Ensure page top when arriving without hash
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="info-page">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Retour</button>
            </div>
            <section className="hero-panel">
                <p className="eyebrow">Legal</p>
                <h1>Our policies, your peace of mind</h1>
                <p className="lead">
                    Understand how we protect your data, outline responsible use, and keep the RentEase experience clear and
                    transparent for everyone.
                </p>
                <Link to="/contact" className="cta-button">
                    Contactez-nous
                </Link>
            </section>

            <section className="content-block" id="terms">
                <div className="content-text">
                    <p className="eyebrow">Terms of Service</p>
                    <h2>Your agreement with RentEase</h2>
                    <p>
                        These terms describe how to use RentEase, what you can expect from us, and what we expect from you.
                        They cover listings, reservations, payments, and respectful conduct on the platform.
                    </p>
                    <ul className="bullets">
                        <li>Use accurate listing details and honor confirmed bookings.</li>
                        <li>Communicate and transact only through RentEase for safety.</li>
                        <li>Follow local laws and community standards for hosting and renting.</li>
                    </ul>
                </div>
                <div className="content-card">
                    <h3>Key commitments</h3>
                    <ul className="bullets">
                        <li>Clear cancellation and refund terms are shown before you book.</li>
                        <li>We may limit or suspend accounts that break these terms.</li>
                        <li>Disputes are handled through our support team for fair resolution.</li>
                    </ul>
                </div>
            </section>

            <section className="content-block" id="privacy">
                <div className="content-text">
                    <p className="eyebrow">Privacy Policy</p>
                    <h2>How we handle your data</h2>
                    <p>
                        We collect only the data needed to operate RentEase, process reservations, and improve your
                        experience. We never sell your data and always give you control over your information.
                    </p>
                    <ul className="bullets">
                        <li>Profile, booking, and payment details are encrypted in transit.</li>
                        <li>You can request exports or deletion of personal data.</li>
                        <li>We use anonymized analytics to enhance site performance.</li>
                    </ul>
                </div>
                <div className="content-card">
                    <h3>Your controls</h3>
                    <ul className="bullets">
                        <li>Update consent preferences and notifications in your account.</li>
                        <li>Manage saved payment methods securely at any time.</li>
                        <li>Reach our team for privacy questions via the Contact page.</li>
                    </ul>
                </div>
            </section>

            <section className="content-block" id="cookies">
                <div className="content-text">
                    <p className="eyebrow">Cookie Policy</p>
                    <h2>Keeping sessions secure</h2>
                    <p>
                        Cookies help us keep you signed in, remember preferences, and measure how features perform. You can
                        manage non-essential cookies through your browser settings.
                    </p>
                    <ul className="bullets">
                        <li>Essential cookies keep your account sessions stable and secure.</li>
                        <li>Analytics cookies inform product improvements without selling data.</li>
                        <li>Marketing cookies are minimal and can be disabled.</li>
                    </ul>
                </div>
                <div className="content-card">
                    <h3>What we avoid</h3>
                    <ul className="bullets">
                        <li>No third-party trackers that sell or reshare your browsing data.</li>
                        <li>No hidden data collection—our disclosures stay clear and concise.</li>
                        <li>No required marketing consent to use core RentEase features.</li>
                    </ul>
                </div>
            </section>

            <section className="grid-block" id="sitemap">
                <div className="grid-header">
                    <p className="eyebrow">Sitemap</p>
                    <h2>Find what you need, fast</h2>
                    <p className="lead">
                        A quick map to our most-visited areas so you can get support, list a property, or browse rentals
                        without searching around.
                    </p>
                </div>
                <div className="card-grid three">
                    <div className="info-card">
                        <h3>Getting started</h3>
                        <p>Browse rentals, save favorites, and create alerts.</p>
                        <ul className="bullets">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/rentals">Rentals</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="info-card">
                        <h3>Support & safety</h3>
                        <p>Find answers or talk with us about any issue.</p>
                        <ul className="bullets">
                            <li>
                                <Link to="/help">Help Center</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="info-card">
                        <h3>Hosting</h3>
                        <p>Share your space, manage bookings, and learn best practices.</p>
                        <ul className="bullets">
                            <li>
                                <Link to="/host">Host onboarding</Link>
                            </li>
                            <li>
                                <Link to="/rentals">Manage listings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="content-card" style={{ textAlign: 'center' }}>
                <h3>Need something clarified?</h3>
                <p style={{ color: '#1e584f' }}>
                    We are here to help. If you have questions about these policies or need assistance, reach out to our
                    team.
                </p>
                <Link to="/contact" className="cta-button">
                    Contactez-nous
                </Link>
            </div>
        </div>
    );
};

export default Legal;
