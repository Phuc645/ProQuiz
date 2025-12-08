import './Finished.scss';
import CircularProgress from '@mui/material/CircularProgress';
export default function Finished() {
    return (
        <div className="finished-container">
            <div className="finished-text">
                <p className="finished-title">Finished</p>
                <p className="finished-subtitle">Calculating your result</p>
            </div>
            <CircularProgress />
        </div>
    );
}