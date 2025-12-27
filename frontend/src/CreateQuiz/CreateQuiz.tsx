import './CreateQuiz.scss';
import ButtonComponent from "../Components/ButtonComponent/ButtonComponent.tsx";
import Button from "@mui/material/Button";

export default function CreateQuiz() {
    return (
        <div className="create-quiz-container">
            <h1>Create a quiz</h1>
            <div className="create-quiz-form">
                <label htmlFor="quiz-title">Quiz Title</label>
                <input type="text" id="quiz-title" name="quiz-title" />
                <label htmlFor="quiz-description">Category</label>
                <select id="quiz-category" name="quiz-category">
                    <option value="math">Math</option>
                    <option value="literature">Literature</option>
                    <option value="languages">Languages</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                    <option value="history">History</option>
                    <option value="geography">Geography</option>
                    <option value="laws">Laws</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="quiz-description">Description</label>
                <textarea id="quiz-description" name="quiz-description"></textarea>
            </div>
            <div className="create-quiz-actions">
                <ButtonComponent style={{backgroundColor: "#53629E"}}>
                    Next
                </ButtonComponent>
                <Button
                    variant="text"
                    className="new-button"
                    sx={{ textTransform: 'none', color: '#fff' }}
                >
                    Back
                </Button>
            </div>
        </div>
    );
}