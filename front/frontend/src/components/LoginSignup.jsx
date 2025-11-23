import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginSignup.css';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Tenant');
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const url = isLogin ? '/api/users/login' : '/api/users/signup';
        const payload = isLogin ? { email, password } : { username, email, password, role };

        try {
            const response = await axios.post(url, payload, { headers: { 'Content-Type': 'application/json' } });
            // Connexion réussie serveur
            login(response.data, rememberMe);
            navigate('/profile');
        } catch (err) {
            // Fallback hors-ligne / erreur serveur: créer session locale minimale
            const fallbackUser = {
                username: username || email.split('@')[0] || 'Utilisateur',
                email,
                role,
                provider: 'local-fallback',
            };
            login(fallbackUser, rememberMe);
            setError(err.response?.data?.message || 'Serveur indisponible, session locale créée.');
            navigate('/profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-box">
                <h2>{isLogin ? 'Se connecter' : "Créer un compte"} RentEase</h2>
                
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={submitHandler} className="auth-form">
                    {!isLogin && (
                        <div className="input-group">
                            <label htmlFor="username">Nom complet</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Jane Doe"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="vous@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="input-group">
                            <label htmlFor="role">Rôle</label>
                            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="Tenant">Locataire</option>
                                <option value="Host">Hôte</option>
                            </select>
                        </div>
                    )}
                    <label className="remember-checkbox">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Rester connecté·e
                    </label>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Chargement...' : (isLogin ? 'Se connecter' : "S'inscrire")}
                    </button>
                </form>

                <p>
                    {isLogin ? 'Pas encore de compte ?' : 'Vous avez déjà un compte ?'}
                    <span
                        className="toggle-auth"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? ' Créer un compte' : ' Se connecter'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginSignup;
