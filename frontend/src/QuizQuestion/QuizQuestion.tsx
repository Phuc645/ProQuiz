import Button from '@mui/material/Button';
import './QuizQuestion.scss';
export default function QuizQuestion() {
    return (
        <div className="quiz-question-container">
            <progress className="quiz-progress-bar" value={70} max={100}></progress>
            <div className="quiz-question-content">
                <p className="quiz-question-number">Question </p>
                <p className ="quiz-question-text">What is the capital of France?</p>
            </div>
            <div className="quiz-answers">
                <div className="quiz-answers">
                    <Button variant="contained" className="quiz-answer-button" sx={{ textTransform: 'none', color: '#fff' }}>A) Berlin</Button>
                    <Button variant="contained" className="quiz-answer-button" sx={{ textTransform: 'none', color: '#fff' }}>B) Madrid</Button>
                    <Button variant="contained" className="quiz-answer-button" sx={{ textTransform: 'none', color: '#fff' }}> Paris</Button>
                    <Button variant="contained" className="quiz-answer-button" sx={{ textTransform: 'none', color: '#fff' }}>D) Rome</Button>
            </div>
            </div>
        </div>

    );
}