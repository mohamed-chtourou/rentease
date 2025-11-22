import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPages.css';

const faqs = [
  {
    question: 'Comment publier une annonce ?',
    answer: 'Créez un compte, ajoutez des photos, fixez vos règles et vos tarifs. Nous vous guidons pas à pas pour que votre annonce soit claire et attractive.',
  },
  {
    question: 'Comment réserver un logement ?',
    answer: 'Utilisez la recherche par dates et filtrez par type de bien. Une fois l’annonce sélectionnée, vérifiez les disponibilités et finalisez votre demande en ligne.',
  },
  {
    question: 'Comment contacter un propriétaire ?',
    answer: 'Depuis la page de l’annonce, cliquez sur "Contacter l’hôte" pour ouvrir la messagerie sécurisée. Les échanges restent centralisés dans votre espace RentEase.',
  },
  {
    question: 'Comment garantir la sécurité des paiements ?',
    answer: 'Nous collaborons avec des prestataires de paiement certifiés. Les fonds sont sécurisés jusqu’à la validation de l’entrée dans les lieux.',
  },
  {
    question: 'Que faire en cas d’imprévu ?',
    answer: 'Contactez le support via la messagerie ou la page Contact. Nous avons des procédures de relogement et des options d’annulation selon la politique choisie.',
  },
];

const Faq = () => (
  <div className="info-page">
    <section className="hero-panel">
      <p className="eyebrow">FAQ & Aide</p>
      <h1>Tout ce qu&apos;il faut savoir pour bien utiliser RentEase</h1>
      <p className="lead">
        Retrouvez les réponses aux questions les plus fréquentes pour publier une annonce, réserver ou contacter un
        propriétaire. Vous ne trouvez pas votre réponse ? Écrivez-nous.
      </p>
      <Link to="/contact" className="cta-button">Contactez-nous</Link>
    </section>

    <section className="grid-block">
      <div className="grid-header">
        <p className="eyebrow">Questions fréquentes</p>
        <h2>Guides rapides</h2>
      </div>
      <div className="faq-wrapper">
        {faqs.map((item) => (
          <div className="faq-card" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Faq;
