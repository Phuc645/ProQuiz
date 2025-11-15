# Database ProQuiz

Users:

- UserID (Primary Key)
- Username (varchar(50))
- Password (hashed)
- Email
- Name

Quizzes:

- QuizID (Primary Key)
- Title (varchar(100))
- Description (varchar(200))
- CategoryID (Foreign Key)
- Visibility (public/private)
- UserID (Foreign Key, creator)
- CreatedAt (datetime)
- UpdatedAt (datetime)

Questions:

- QuestionID (Primary Key)
- Title (text)
- QuizID (Foreign Key)
- TimeLimit (int, seconds)
- OrderIndex (int)

Answers:

- AnswerID (Primary Key)
- Content (text)
- IsCorrect (bit)
- QuestionID (Foreign Key)
- OrderIndex (int)

Categories:

- CategoryID (Primary Key)
- Category_name (varchar(50))

Results:

- ResultID (Primary Key)
- QuizID (Foreign Key)
- UserID (Foreign Key)
- TotalScore (int)
- CorrectAnswers (int)
- IncorrectAnswers (int)
- TimeSpent (int, seconds)
- DateTaken (datetime)

UserAnswers:

- UserAnswerID (Primary Key)
- ResultID (Foreign Key)
- QuestionID (Foreign Key)
- AnswerID (Foreign Key)
- IsCorrect (bit)
- TimeSpent (int, seconds)

