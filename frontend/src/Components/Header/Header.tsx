import './Header.scss';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png';
import AvatarImage from '../../assets/avatar.png';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
export default function Header() {
  return (
    <header className="header">
      <Link to ="/" className="header__logo">
        <img src ={LogoImage} alt="App Logo" className="header__logo-image" />
      </Link>
        <input type ="search" placeholder="Search." className="header__search-bar" />
        <Link to ="" className="header__create-quiz-link">
            <ButtonComponent style={{ backgroundColor: '#7fb8c1' }}>Create a Quiz
            </ButtonComponent>
        </Link>
        <Link to ="/login" className="header__avatar">
            <img src ={AvatarImage} alt="User Avatar" className="header__avatar-image" />
        </Link>
    </header>
  );
}