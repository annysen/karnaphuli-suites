import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "./Error";
import Booking from "../Components/Booking";
import Login from "../Components/Login";
import Home from "../Components/Home";
import Register from "../Components/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

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
        element: (
          <PrivetRoute>
            <Booking />
          </PrivetRoute>
        ),
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
