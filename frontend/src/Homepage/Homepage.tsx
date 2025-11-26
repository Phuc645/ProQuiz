import './Homepage.scss';
import Header from '../Components/Header/Header';
function Homepage() {
  return (
      <>
    <Header />
    <div className="homepage-container">
      <h1>Welcome to ProQuiz</h1>
      <p>Your ultimate platform for creating and taking quizzes!</p>
    </div>
      </>
  );
}
export default Homepage;
