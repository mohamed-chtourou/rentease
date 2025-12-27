import React, { useState, useMemo } from 'react';
import './VisitRequestForm.css';

const VisitRequestForm = ({ listingId, listingTitle, hostName = 'Hôte', slots = [] }) => {
    const [requesterName, setRequesterName] = useState('');
    const [requesterEmail, setRequesterEmail] = useState('');
    const [preferredDate, setPreferredDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState('idle');
    const [feedback, setFeedback] = useState('');

    const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const canSubmit = useMemo(() => {
        return requesterEmail.includes('@') && preferredDate.length > 0;
    }, [requesterEmail, preferredDate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!canSubmit) return;
        setStatus('loading');
        setFeedback('');
        try {
            const res = await fetch(`${API_BASE}/api/listings/${listingId}/visits`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    requesterName,
                    requesterEmail,
                    preferredDate,
                    timeSlot,
                    note,
                    hostName,
                }),
            });
            if (!res.ok) {
                const err = await res.json().catch(()=>({message:'Erreur inconnue'}));
                throw new Error(err.message || 'Erreur serveur');
            }
            setStatus('success');
            setFeedback('Request sent! You will receive a confirmation soon.');
            setNote('');
        } catch (error) {
            setStatus('error');
            setFeedback(error.message || 'Failed to send request.');
        }
    };

    return (
        <section className="visit-request" aria-label="Demander une visite" id="demande-visite">
            <div className="visit-header">
                <h3>Request a visit</h3>
                <p className="visit-sub">Planne a visit "{listingTitle}".</p>
            </div>
            <form onSubmit={handleSubmit} className="visit-form">
                <label className="visit-field" htmlFor="vr-name">
                    <span>Name</span>
                    <input id="vr-name" type="text" value={requesterName} onChange={(e)=>setRequesterName(e.target.value)} placeholder="Your nom" />
                </label>
                <label className="visit-field" htmlFor="vr-email">
                    <span>Email *</span>
                    <input id="vr-email" type="email" required value={requesterEmail} onChange={(e)=>setRequesterEmail(e.target.value)} placeholder="You@example.com" />
                </label>
                <label className="visit-field" htmlFor="vr-date">
                    <span>Desired date *</span>
                    <input id="vr-date" type="date" required value={preferredDate} onChange={(e)=>setPreferredDate(e.target.value)} />
                </label>
                <label className="visit-field" htmlFor="vr-slot">
                    <span>Time</span>
                    <select id="vr-slot" value={timeSlot} onChange={(e)=>setTimeSlot(e.target.value)}>
                        <option value="">-- Choose --</option>
                        {slots.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </label>
                <label className="visit-field" htmlFor="vr-note">
                    <span>Rating</span>
                    <textarea id="vr-note" rows={3} value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Additional information, preferences..." />
                </label>
                <div className="visit-actions">
                    <button type="submit" disabled={!canSubmit || status==='loading'} aria-busy={status==='loading'}>
                        {status==='loading' ? 'Sending...' : 'Send the request'}
                    </button>
                </div>
            </form>
            {status==='success' && <div className="visit-alert success" role="status">{feedback}</div>}
            {status==='error' && <div className="visit-alert error" role="alert">{feedback}</div>}
        </section>
    );
};

export default VisitRequestForm;
