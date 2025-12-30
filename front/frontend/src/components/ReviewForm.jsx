import React, { useState } from 'react';

const ReviewForm = ({ onAdd }) => {
  const [tenantName, setTenantName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [stayDuration, setStayDuration] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setSubmitting(true);
    const review = {
      tenantName: tenantName.trim() || 'Anonyme',
      rating: Number(rating),
      comment: comment.trim(),
      stayDuration: stayDuration.trim() || null,
    };
    try {
      await onAdd(review);
      setTenantName('');
      setRating(5);
      setComment('');
      setStayDuration('');
    } catch (_) {
      // erreur silencieuse déjà gérée côté parent
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit} aria-label="Ajouter un avis">
      <div className="form-row">
        <label>
          Name (optionnel)
          <input
            type="text"
            value={tenantName}
            onChange={(e) => setTenantName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Review
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[5,4,3,2,1].map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>
        <label>
          Length of stay
          <input
            type="text"
            value={stayDuration}
            onChange={(e) => setStayDuration(e.target.value)}
            placeholder="ex: 6 mois"
          />
        </label>
      </div>
      <label className="block">
        Comment
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Describe your experience.."
          rows={3}
          required
        />
      </label>
      <button type="submit" disabled={submitting || !comment.trim()} className="submit-review-btn">
        {submitting ? 'Sending...' : 'Published l\'review'}
      </button>
    </form>
  );
};

export default ReviewForm;