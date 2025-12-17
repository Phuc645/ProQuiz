import './QuizResult.scss'

export default function QuizResult() {
    return (
        <div className="quiz-result-container">
            <div className="quiz-result-header">
                <h2>Your Result</h2>
                <p>Correct Answers: 14/20</p>
                <p>Incorrect Answers: 6/20</p>
            </div>
            <div className="quiz-result-body">
            </div>
            <div className="quiz-result-actions">
            </div>
        </div>
    );
}