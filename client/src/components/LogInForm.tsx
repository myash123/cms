import React, { useState } from "react";
import authService from "../services/AuthService";

const LogInForm:React.FC = () => {

    const temp = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE3MjEzMzc0MDQsImV4cCI6MTcyMTM0MTAwNH0.dd_IELJUY2djWQRgPYTzrhd43uXO1Vx4oxAeX2uWXUo';
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div>
            <h2>Login, Please</h2>
            <form className="login-form">
                <label>Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </form>
            <button className="login-signup-button" onClick={() => authService().verifyUser(temp)}>Login</button>
            <button className="login-signup-button" onClick={() => authService().registerUser({username, password})}>Sign Up</button>
        </div>
    )
}

export default LogInForm;