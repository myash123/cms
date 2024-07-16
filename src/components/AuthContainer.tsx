import '../App.css'
import LogInForm from './LogInForm';

const AuthContainer = () => {
    return (
        <div className="sign-up-container">
            <h2>Login, please</h2>
            <LogInForm />
        </div>
    )
}

export default AuthContainer;

// Create auth context
// Auth Provider around protected area
// If user is logged in, check the 