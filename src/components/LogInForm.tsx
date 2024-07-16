import { useContext, useState } from "react";
import { AuthContext } from "../App";

const LogInForm = () => {
    const { login, hasLoginError } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = () => {
        login(username, password);
        console.log(username, password);
    }
    return (
        <div>
            <form className="login-form">
                <label>Username</label>
                <input type="text" onChange={e => setUsername(e.target.value)} />
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </form>
            <button className="login-signup-button" onClick={onLogin}>Login</button>
        </div>
    )
}

export default LogInForm;