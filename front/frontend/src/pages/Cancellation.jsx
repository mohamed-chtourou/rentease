import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './InfoPages.css';

const Cancellation = () => {
    const navigate = useNavigate();

    return (
        <div className="info-page">
            <div className="page-nav-header">
                <Link to="/" className="logo-home-link">
                    <img src="/logo.png" alt="RentEase" className="page-logo" />
                </Link>
                <button className="back-link" onClick={() => navigate(-1)}>← Back</button>
            </div>
            <section className="hero-panel">
                <p className="eyebrow">Cancellation</p>
                <h1>Cancellation Options</h1>
                <p className="lead">
                    Understand our cancellation policies and your options.
                </p>
            </section>

            <section className="content-block">
                <div className="content-text">
                    <h2>Flexible Policies</h2>
                    <p>
                        We offer various cancellation options to accommodate different situations while protecting both hosts and guests.
                    </p>
                    <ul className="bullets">
                        <li>Flexible cancellation up to 24 hours before check-in</li>
                        <li>Moderate cancellation with partial refunds</li>
                        <li>Strict cancellation for peak seasons</li>
                        <li>Special circumstances considered on a case-by-case basis</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Cancellation;
