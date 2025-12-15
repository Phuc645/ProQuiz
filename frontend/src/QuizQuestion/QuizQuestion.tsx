import Button from '@mui/material/Button';
import './QuizQuestion.scss';
export default function QuizQuestion() {
    return (
        <div className="quiz-question-container">
            <progress className="quiz-progress-bar" value={70} max={100}></progress>
            <div className="quiz-question-content">
                <h1 className="quiz-question-number">Question 1</h1>
                <h2 className ="quiz-question-text">What is the capital of France?</h2>
            </div>
            <div className="quiz-answers">
                <Button variant="contained" className="quiz-answer-button" sx={{ textTransform: 'none', color: '#fff' ,backgroundColor: "#1036D9" }}>A. Berlin</Button>
                <Button variant="contained" className="quiz-answer-button" sx={{ textTransform: 'none', color: '#fff', backgroundColor: "#CC0069"  }}>B. Madrid</Button>
                <Button variant="contained" className="quiz-answer-button" sx={{ textTransform: 'none', color: '#fff', backgroundColor: "#F55416" }}>C. Paris</Button>
                <Button variant="contained" className="quiz-answer-button" sx={{ textTransform: 'none', color: '#fff', backgroundColor: "#C936EF" }}>D. Rome</Button>
            </div>
        </div>

    );
}