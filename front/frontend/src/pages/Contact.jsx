import React, { useState } from 'react';
import './InfoPages.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="info-page">
      <section className="hero-panel">
        <p className="eyebrow">Contact</p>
        <h1>Une question, une idée, besoin d&apos;aide ?</h1>
        <p className="lead">
          Notre équipe vous répond du lundi au samedi, que vous soyez propriétaire ou locataire. Envoyez-nous un
          message, nous vous recontactons rapidement.
        </p>
      </section>

      <div className="contact-grid">
        <div className="form-card">
          <h2>Écrivez-nous</h2>
          {submitted && (
            <p className="meta" style={{ marginBottom: '0.6rem' }}>
              Merci ! Votre message a été enregistré. Nous revenons vers vous dans les plus brefs délais.
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nom complet</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="vous@email.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Détaillez votre question ou votre projet..."
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Envoyer</button>
          </form>
        </div>

        <div className="contact-card">
          <h2>Nos coordonnées</h2>
          <p className="muted">Choisissez le canal qui vous convient, nous sommes là pour vous aider.</p>
          <ul>
            <li><strong>Email :</strong> <a href="mailto:support@rentease.com">support@rentease.com</a></li>
            <li><strong>Téléphone :</strong> +216 70 000 000</li>
            <li><strong>Réseaux :</strong> <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a> · <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><strong>Support hôtes :</strong> hote@rentease.com</li>
          </ul>
        </div>

        <div className="map-card">
          <p>Carte à venir : visualisez bientôt nos bureaux et les principales villes où nous opérons.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
