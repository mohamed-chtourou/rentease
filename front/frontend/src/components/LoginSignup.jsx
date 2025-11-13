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
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('Tenant');
    const { login } = useAuth();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        const url = isLogin ? '/api/users/login' : '/api/users/signup';
        const data = isLogin 
            ? { email, password }
            : { username, email, password, role };

        try {
            const config = {
                headers: { 'Content-Type': 'application/json' },
            };
            
            const response = await axios.post(url, data, config);
            
            console.log("Authentication successful:", response.data);
            
            // Update auth context and localStorage
            login(response.data);

            // Optionally redirect or update app state
            alert(`${isLogin ? 'Login' : 'Signup'} successful! Welcome ${response.data.username}`);

            // Reset form
            setUsername('');
            setEmail('');
            setPassword('');

            // Redirect to home page
            navigate('/');

        } catch (err) {
            setError(err.response?.data?.message || "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-box">
                <h2>{isLogin ? 'Log In' : 'Sign Up'} to RentEase</h2>
                
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={submitHandler}>
                    
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <select value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="Tenant">Tenant (Looking for a place)</option>
                                <option value="Host">Host (I want to list my property)</option>
                            </select>
                        </>
                    )}
                    
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    <button type="submit" disabled={loading}>
                        {loading ? 'Loading...' : (isLogin ? 'Log In' : 'Sign Up')}
                    </button>
                </form>

                <p>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <span 
                        className="toggle-auth" 
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? " Sign Up" : " Log In"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginSignup;
