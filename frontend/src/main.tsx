import './main.scss';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import NotFound from "./NotFound/NotFound";
import QuizDetails from "./QuizDetails/QuizDetails";
import Finished from "./Finished/Finished";
import QuizQuestion from "./QuizQuestion/QuizQuestion.tsx";
import QuizResult from "./QuizResult/QuizResult.tsx";
import CreateQuiz from "./CreateQuiz/CreateQuiz.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "signup",
        element: <SignUp />,
    },
    {
        path: "quizdetails",
        element: <QuizDetails />,
    },
    {
        path: "finished",
        element: <Finished />,
    },
    {
        path: "quizquestion",
        element: <QuizQuestion />,
    },
    {
        path: "quizresult",
         element: <QuizResult />,
    },
    {
        path: "createquiz",
        element: <CreateQuiz />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
