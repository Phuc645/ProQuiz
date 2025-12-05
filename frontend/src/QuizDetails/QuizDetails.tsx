import './QuizDetails.scss';
import ButtonComponent from "../Components/ButtonComponent/ButtonComponent.tsx";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";


export default function QuizDetails() {
    return (
        <div className="quiz-details-container">
            <div className ="quiz-details-header">
                <h2>Geography Quiz</h2>
                <p>Created by User2</p>
                <p>Category: Social Science</p>
            </div>
            <div className="quiz-details-body">
                <h3>Description</h3>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                    and going through the cites of the word in classical literature, discovered the undoubtable source.
                </p>
            </div>
            <div className="quiz-details-footer">
                <ButtonComponent style={{ backgroundColor: '#575d99', width: '10rem',
                    textAlign: 'center' }}>
                    Start
                </ButtonComponent>
                <Link to="/">
                    <Button
                    variant="text"
                    className="new-button"
                    sx={{ textTransform: 'none', color: '#fff' }}
                >
                    Back
                    </Button>
                </Link>

            </div>
        </div>
    );
}