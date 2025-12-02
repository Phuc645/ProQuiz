import './Login.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login-container">
            <h2 className="login-title">Welcome back</h2>
            <div className="login-form">
                <label className="login-label">Username or Email</label>
                <input type ="text" className="login-input" />
                <label className="login-label">Password</label>
                <input type ="password" className="login-input" />
            </div>
            <div className="login-action">
                <Button variant="contained"  className="login-button"
                        sx={{ textTransform: 'none', color: '#fff' }}>
                    Login
                </Button>
                <Link to="/signup">
                    <Button
                    variant="text"
                    className="new-button"
                    sx={{ textTransform: 'none', color: '#fff' }}
                >
                    New here? Sign up
                </Button>
                </Link>
            </div>
        </div>
    );
}