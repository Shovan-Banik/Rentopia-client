import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/shared/SignUp/SignUp";
import SignIn from "../Pages/shared/SignIn/SignIn";
import AddHome from "../Pages/AddHome/AddHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path: '/addHome',
          element: <AddHome></AddHome>
        }
      ]
    },
  ]);
  export default router;