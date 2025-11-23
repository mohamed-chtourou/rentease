import React, { useMemo, useState } from 'react';
import axios from 'axios';
import './ContactHostForm.css';

const ContactHostForm = ({ listingId, listingTitle, hostName = 'Host', hostEmail }) => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const canSubmit = useMemo(() => message.trim().length > 10 && email.includes('@'), [message, email]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!canSubmit) {
            return;
        }
        setStatus('loading');
        setStatusMessage('');

        try {
            await axios.post('http://localhost:5000/api/messages', {
                email,
                message,
                listingId,
                listingTitle,
                hostName,
                hostEmail,
            });
            setStatus('success');
            setStatusMessage("Message envoyé ! L'hôte vous répondra rapidement.");
            setMessage('');
        } catch (err) {
            console.error('Erreur lors de lenvoi du message', err);
            setStatus('error');
            setStatusMessage('Impossible denvoyer votre message pour le moment. Veuillez réessayer.');
        }
    };

    return (
        <section className="contact-host" id="contact-host" aria-live="polite">
            <div className="contact-header">
                <div>
                    <p className="contact-label">Contact host</p>
                    <h3 className="contact-title">Envoyer un message à {hostName}</h3>
                    <p className="contact-subtitle">Mentionnez vos dates, vos besoins et comment vous souhaitez échanger.</p>
                </div>
                <span className="contact-badge" aria-label="Message privé">🔒 Message privé</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-field" htmlFor="email">
                    <span>Email</span>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vous@example.com"
                        required
                    />
                </label>
                <label className="contact-field" htmlFor="message">
                    <span>Message</span>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={`Bonjour, je suis intéressé(e) par ${listingTitle}. Pouvez-vous me donner plus de détails ?`}
                        rows={4}
                        required
                    />
                </label>

                <div className="contact-actions">
                    <button
                        type="submit"
                        className="contact-button"
                        disabled={!canSubmit || status === 'loading'}
                        aria-busy={status === 'loading'}
                    >
                        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
                    </button>
                    <p className="contact-helper">Réponse moyenne &lt; 1h. Les demandes contiennent toutes vos coordonnées.</p>
                </div>
            </form>

            {status === 'success' && (
                <div className="contact-alert success" role="status">{statusMessage}</div>
            )}
            {status === 'error' && (
                <div className="contact-alert error" role="alert">{statusMessage}</div>
            )}
        </section>
    );
};

export default ContactHostForm;
