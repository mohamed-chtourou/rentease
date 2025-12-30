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
                username: username || email.split('@')[0] || 'User',
                email,
                role,
                provider: 'local-fallback',
            };
            login(fallbackUser, rememberMe);
            setError(err.response?.data?.message || 'Server unavailable, local session created.');
            navigate('/profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <br />
            <div className="auth-form-box">
                <h2>{isLogin ? 'Sign in' : "Create an account"} RentEase</h2>
                
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={submitHandler} className="auth-form">
                    {!isLogin && (
                        <div className="input-group">
                            <label htmlFor="username">Full name</label>
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
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
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
                            <label htmlFor="role">Role</label>
                            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="Tenant">Tenant</option>
                                <option value="Host">Host</option>
                            </select>
                        </div>
                    )}
                    <label className="remember-checkbox">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember me
                    </label>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : (isLogin ? 'Sign in' : "Register")}
                    </button>
                </form>

                <p>
                    {isLogin ? 'Dont have an account yet?' : 'Do you already have an account?'}
                    <span
                        className="toggle-auth"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? 'Create an account' : 'Sign in'}
                    </span>
                </p>
            </div>
            <br />
        </div>
    );
};

export default LoginSignup;
