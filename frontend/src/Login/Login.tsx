import './Login.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Components/ButtonComponent/ButtonComponent';

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
                <Link to="">
                    <ButtonComponent style={{ backgroundColor: '#575d99', width: '10rem',
                        textAlign: 'center' }}>Log In
                    </ButtonComponent>
                </Link>

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