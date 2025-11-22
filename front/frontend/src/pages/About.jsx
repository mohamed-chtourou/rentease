import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const values = [
  {
    title: 'Transparence et confiance',
    description: 'Des annonces vérifiées, des propriétaires identifiés et une communication claire à chaque étape.',
  },
  {
    title: 'Expérience simple',
    description: 'Des outils modernes pour publier, réserver et gérer vos séjours en quelques clics.',
  },
  {
    title: 'Communauté bienveillante',
    description: 'Nous créons des liens durables entre hôtes et locataires autour de standards de qualité élevés.',
  },
];

const team = [
  {
    name: 'Nadia Ben Salem',
    role: 'CEO & Co‑founder',
    bio: "Entrepreneure passionnée par le logement accessible et l'expérience utilisateur.",
  },
  {
    name: 'Youssef Gharbi',
    role: 'CTO & Co‑founder',
    bio: 'Ingénieur produit, responsable des performances, de la sécurité et des intégrations.',
  },
  {
    name: 'Lina Trabelsi',
    role: 'Head of Community',
    bio: 'Experte relation client, elle accompagne les hôtes et locataires au quotidien.',
  },
];

const About = () => (
  <div className="info-page">
    <section className="hero-panel">
      <p className="eyebrow">À propos</p>
      <h1>La plateforme qui rapproche les personnes et les lieux</h1>
      <p className="lead">
        RentEase facilite la mise en relation entre propriétaires et locataires. Notre mission : offrir une expérience
        fluide, fiable et sécurisée pour trouver le bon logement, à court ou long terme.
      </p>
      <div className="stat-row">
        <div className="stat-card">
          <span className="stat-number">+4.8/5</span>
          <p className="stat-label">Satisfaction locataires</p>
        </div>
        <div className="stat-card">
          <span className="stat-number">15k</span>
          <p className="stat-label">Réservations accompagnées</p>
        </div>
        <div className="stat-card">
          <span className="stat-number">120</span>
          <p className="stat-label">Villes couvertes</p>
        </div>
      </div>
      <Link to="/contact" className="cta-button">Contactez-nous</Link>
    </section>

    <section className="content-block">
      <div className="content-text">
        <p className="eyebrow">Notre mission</p>
        <h2>Simplifier chaque étape d&apos;une location</h2>
        <p>
          De la publication d&apos;annonce à la remise des clés, nous proposons des outils et une assistance pour que chacun
          avance sereinement. Nous croyons à des logements accessibles, transparents et gérés avec soin.
        </p>
      </div>
      <div className="content-card">
        <h3>Ce qui nous guide</h3>
        <ul className="bullets">
          <li>Des annonces complètes, enrichies de vérifications et de visites virtuelles.</li>
          <li>Un accompagnement humain : support multilingue et réponses rapides.</li>
          <li>Des paiements sécurisés et des politiques équitables pour les deux parties.</li>
        </ul>
      </div>
    </section>

    <section className="grid-block">
      <div className="grid-header">
        <p className="eyebrow">Valeurs</p>
        <h2>Ce qui fait l&apos;ADN de RentEase</h2>
      </div>
      <div className="card-grid three">
        {values.map((value) => (
          <div className="info-card" key={value.title}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="grid-block">
      <div className="grid-header">
        <p className="eyebrow">L&apos;équipe</p>
        <h2>Des profils complémentaires pour un même objectif</h2>
      </div>
      <div className="card-grid three">
        {team.map((member) => (
          <div className="profile-card" key={member.name}>
            <div className="avatar-placeholder">{member.name[0]}</div>
            <div>
              <h3>{member.name}</h3>
              <p className="meta">{member.role}</p>
              <p className="muted">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
