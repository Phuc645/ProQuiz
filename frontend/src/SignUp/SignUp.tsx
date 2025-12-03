import './SignUp.scss';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import ButtonComponent from '../Components/ButtonComponent/ButtonComponent';

export default function SignUp() {
    return (
        <div className="signup-container">
            <h2 className="signup-title">Create an account</h2>
            <div className="signup-form">
                <label className="signup-label">Username</label>
                <input type ="text" className="signup-input" />
                <label className="signup-label">Email</label>
                <input type ="text" className="signup-input" />
                <label className="signup-label">Password</label>
                <input type ="password" className="signup-input" />
            </div>
            <div className="signup-action">
                <Link to="">
                    <ButtonComponent style={{ backgroundColor: '#575d99', width: '10rem',
                        textAlign: 'center' }}>Sign Up
                    </ButtonComponent>
                </Link>
                <Link to="/login">
                <Button
                    variant="text"
                    className="new-button"
                    sx={{ textTransform: 'none', color: '#fff' }}
                >
                    Already have an account? Log in
                </Button>
                </Link>
            </div>
        </div>
    );
}