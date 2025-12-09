import './Finished.scss';
import CircularProgress from '@mui/material/CircularProgress';
import ButtonComponent from "../Components/ButtonComponent/ButtonComponent.tsx";
export default function Finished() {
    const test: boolean = false;
    if (test) {
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
    else {
        return (
            <div className="finished-container">
                <p className="finished-title">Here's your result</p>
                <ButtonComponent style={{ marginTop: '20px', backgroundColor: '#7fb8c1', width: '150px', height: '40px' }}>
                    Show result
                </ButtonComponent>
            </div>
        )
    }

}