import './QuizResult.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ButtonComponent from '../Components/ButtonComponent/ButtonComponent';
import Button from "@mui/material/Button";

export default function QuizResult() {
    const items = [
        {id: 1, question: "What is 2 + 2?", yourAnswer: "3", correctAnswer: "4"},
        {id: 2, question: "What is the capital of France?", yourAnswer: "Berlin", correctAnswer: "Paris"},
        {id: 3, question: "What is the largest planet in our solar system?", yourAnswer: "Earth", correctAnswer: "Jupiter"},
    ]
    return (
        <div className="quiz-result-container">
            <div className="quiz-result-header">
                <h2>Your Result</h2>
                <p>Correct Answers: 14/20</p>
                <p>Incorrect Answers: 6/20</p>
            </div>
            <div className="quiz-result-body">
                <h3>Incorrect Answers explanation</h3>
                <div className="quiz-result-list">
                    {items.map(item => (
                        <Card key={item.id}>
                            <CardContent>
                            <strong>Question:</strong> {item.question} <br />
                            <strong>Your Answer:</strong> {item.yourAnswer} <br />
                            <strong>Correct Answer:</strong> {item.correctAnswer}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="quiz-result-actions">
                <ButtonComponent style={{ backgroundColor: '#7fb8c1' }}>
                        Retake the quiz
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