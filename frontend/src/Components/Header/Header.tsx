import './Header.scss';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png';
import AvatarImage from '../../assets/avatar.png';
import Button from '@mui/material/Button';
export default function Header() {
  return (
    <header className="header">
      <Link to ="/" className="header__logo">
        <img src ={LogoImage} alt="App Logo" className="header__logo-image" />
      </Link>
        <input type ="search" placeholder="Search." className="header__search-bar" />
        <Link to ="" className="header__create-quiz-link">
            <Button variant="contained"  className="header__quiz-button">
            Create a quiz
            </Button>
        </Link>
        <Link to ="" className="header__avatar">
            <img src ={AvatarImage} alt="User Avatar" className="header__avatar-image" />
        </Link>
    </header>
  );
}