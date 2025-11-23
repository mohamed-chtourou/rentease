import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import './Messages.css';
import { Link, useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const formatDate = (dateString) => {
    if (!dateString) return 'Date inconnue';
    return new Date(dateString).toLocaleString('fr-FR', {
        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
};

const Messages = () => {
    const navigate = useNavigate();
    // plus de filtres manuels: on charge toutes les conversations
    const [rawMessages, setRawMessages] = useState([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');
    const [activeConversation, setActiveConversation] = useState(null); // key listingId
    const [filterTab, setFilterTab] = useState('all'); // all | unread | archived
    const [searchTerm, setSearchTerm] = useState('');
    const [marking, setMarking] = useState(false);

    // Chargement initial de toutes les conversations
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const preselect = params.get('listingId');
        const loadAll = async () => {
            setStatus('loading');
            setError('');
            try {
                const res = await axios.get(`${API_BASE_URL}/api/messages`);
                setRawMessages(res.data || []);
                setStatus('success');
                if (preselect) {
                    // Only set if that listingId exists among messages
                    if ((res.data || []).some(m => m.listingId === preselect)) {
                        setActiveConversation(preselect);
                    }
                }
            } catch (err) {
                console.error('Erreur chargement messages', err);
                setError("Impossible de charger les messages.");
                setStatus('error');
            }
        };
        loadAll();
    }, []);

    // Group messages by listingId for conversation list
    const conversations = useMemo(() => {
        const groups = {};
        rawMessages.forEach(m => {
            const key = m.listingId || 'inconnu';
            if (!groups[key]) groups[key] = { listingId: key, title: m.listingTitle || 'Annonce', messages: [], unread: 0, archived: 0, latest: null };
            groups[key].messages.push(m);
            if (m.status === 'new') groups[key].unread += 1;
            if (m.status === 'archived') groups[key].archived += 1;
            if (!groups[key].latest || new Date(m.createdAt) > new Date(groups[key].latest.createdAt)) {
                groups[key].latest = m;
            }
        });
        let arr = Object.values(groups).sort((a,b)=> new Date(b.latest?.createdAt) - new Date(a.latest?.createdAt));
        if (filterTab === 'unread') arr = arr.filter(c => c.unread > 0);
        if (filterTab === 'archived') arr = arr.filter(c => c.archived === c.messages.length && c.messages.length>0);
        if (searchTerm.trim()) {
            const q = searchTerm.toLowerCase();
            arr = arr.filter(c => c.title.toLowerCase().includes(q));
        }
        return arr;
    }, [rawMessages, filterTab, searchTerm]);

    const activeMessages = useMemo(() => {
        if (!activeConversation) return [];
        return conversations.find(c => c.listingId === activeConversation)?.messages || [];
    }, [activeConversation, conversations]);

    const markConversationRead = async () => {
        if (!activeMessages.length) return;
        const toMark = activeMessages.filter(m => m.status === 'new');
        if (!toMark.length) return;
        setMarking(true);
        try {
            await Promise.all(toMark.map(m => axios.patch(`${API_BASE_URL}/api/messages/${m._id}/status`, { status: 'read' })));
            setRawMessages(prev => prev.map(m => toMark.find(x=>x._id===m._id) ? { ...m, status: 'read' } : m));
        } catch (err) {
            console.error('Erreur marquage lu', err);
        } finally {
            setMarking(false);
        }
    };

    return (
        <main className="messages-page">
            <aside className="messages-sidebar">
                <div className="sidebar-header">
                    <h2>Discussions</h2>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Rechercher une annonce"
                            value={searchTerm}
                            onChange={(e)=>setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="tabs">
                        <button type="button" onClick={()=>setFilterTab('all')} className={filterTab==='all'?'active':''}>Tout</button>
                        <button type="button" onClick={()=>setFilterTab('unread')} className={filterTab==='unread'?'active':''}>Non lus</button>
                        <button type="button" onClick={()=>setFilterTab('archived')} className={filterTab==='archived'?'active':''}>Archivés</button>
                    </div>
                </div>
                <div className="conversation-scroll" aria-live="polite">
                    {status==='error' && <div className="error-inline">{error}</div>}
                    {status==='success' && conversations.length===0 && <div className="empty-thread">Aucune conversation</div>}
                    {conversations.map(conv => {
                        const latest = conv.latest;
                        const time = latest ? new Date(latest.createdAt).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}) : '';
                        return (
                            <div
                                key={conv.listingId}
                                className={`conv-item ${activeConversation===conv.listingId?'active':''}`}
                                onClick={()=> setActiveConversation(conv.listingId)}
                            >
                                <div className="avatar">{conv.title.charAt(0).toUpperCase()}</div>
                                <div className="conv-body">
                                    <p className="conv-title">{conv.title}</p>
                                    <p className="conv-snippet">{latest?.message.slice(0,60) || '—'}</p>
                                </div>
                                <div className="conv-meta">
                                    <span className="time">{time}</span>
                                    {conv.unread>0 && <span className="badge-unread">{conv.unread}</span>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </aside>
            <section className="thread-pane">
                <div className="thread-header">
                    <h3>{activeConversation ? conversations.find(c=>c.listingId===activeConversation)?.title : 'Sélectionnez une conversation'}</h3>
                    {activeConversation && <button type="button" className="mark-read-btn" disabled={marking} onClick={markConversationRead}>{marking?'...':'Marquer lu'}</button>}
                </div>
                <div className="thread-messages">
                    {activeConversation && activeMessages.length===0 && <div className="empty-thread">Aucun message dans cette conversation.</div>}
                    {!activeConversation && <div className="empty-thread">Choisissez une annonce pour voir les messages.</div>}
                    {activeMessages.map(m => (
                        <div key={m._id} className="bubble">
                            <div className="bubble-header">
                                <span>{m.email}</span>
                                <span>{formatDate(m.createdAt)}</span>
                            </div>
                            <div className="bubble-body">{m.message}</div>
                            {m.status && <span className={`status-pill pill-${m.status}`}>{m.status}</span>}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Messages;
