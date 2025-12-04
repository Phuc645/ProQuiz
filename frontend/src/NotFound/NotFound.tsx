import ButtonComponent from '../Components/ButtonComponent/ButtonComponent';
import './NotFound.scss';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
    <div className="not-found-container">
        <h2 className="not-found-title">Oops...</h2>
        <p className="not-found-message">
            The page you are looking for does not exist.
        </p>
        <Link to="/">
            <ButtonComponent style={{ backgroundColor: '#575d99', width: '15rem',
                textAlign: 'center' }} >Go back to the homepage </ButtonComponent>
        </Link>

    </div>
);
}
