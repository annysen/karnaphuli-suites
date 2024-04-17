import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "./Error";
import Booking from "../Components/Booking";
import Login from "../Components/Login";
import Home from "../Components/Home";
import Register from "../Components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Register />,
      },
    ],
  },
]);
export default router;
