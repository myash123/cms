import React, { useState } from "react";
import authService from "../services/AuthService";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

type User = {
    username: string,
    password: string,
}

const LogInForm:React.FC = () => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const user = { username, password };

    const handleLogin = async (user: User) => {
        const successful: boolean = await login(user);
        console.log(successful);
        if(successful) {
            navigate('/cms');
        } else {
            alert('Login unsuccessful');
        }
    }
    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label>Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </form>
            <button className="login-signup-button" onClick={() => handleLogin(user)}>Login</button>
            <button className="login-signup-button" onClick={() => authService().registerUser(user)}>Sign Up</button>
        </div>
    )
}

export default LogInForm;