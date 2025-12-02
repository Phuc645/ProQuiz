import './Homepage.scss';
import Header from '../Components/Header/Header';
import QuizCard from '../Components/QuizCard/QuizCard.tsx';

function Homepage() {
  return (
      <>
        <Header />
        <h2 className="homepage">Featured</h2>
              <div className = "featured_container">
                <QuizCard />
                <QuizCard />
                <QuizCard />
                  <QuizCard />
                  <QuizCard />
              </div>
          <h2 className="homepage">Retake the quiz</h2>
              <div className = "featured_container">
                  <QuizCard />
                  <QuizCard />
                  <QuizCard />
                  <QuizCard />
                  <QuizCard />
                </div>
      </>
  );
}
export default Homepage;
