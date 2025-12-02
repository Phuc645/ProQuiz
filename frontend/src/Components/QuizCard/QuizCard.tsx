import UserImage from "../../assets/avatar.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './QuizCard.scss';

export default function QuizCard() {
  return (
<Card className="featured_card">
    <CardContent>
        <h3>History of Romumania</h3>
        <div className="user"><img className="user-avatar" src ={UserImage} alt="User"/><p>User1</p></div>
        <p>Category: Social Science</p>
    </CardContent>
</Card>
    );
}