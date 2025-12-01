import './main.scss';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
    {
        path: "login",
        element: <Login />,
    }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
