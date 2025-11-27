import './Homepage.scss';
import Header from '../Components/Header/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import UserImage from '../assets/avatar.png';

function Homepage() {
  return (
      <>
        <Header />
        <h2 className="homepage">Featured</h2>
              <div className = "featured_container">
                <Card className="featured_card">
                  <CardContent>
                    <h3>History of Romumania</h3>
                    <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                      <p>Category: Social Science</p>
                  </CardContent>
                </Card>
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
              </div>
          <h2 className="homepage">Retake the quiz</h2>
              <div className = "featured_container">
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
                  <Card className="featured_card">
                      <CardContent>
                          <h3>History of Romumania</h3>
                          <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
                          <p>Category: Social Science</p>
                      </CardContent>
                  </Card>
                </div>
      </>
  );
}
export default Homepage;
