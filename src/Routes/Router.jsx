import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/shared/SignUp/SignUp";
import SignIn from "../Pages/shared/SignIn/SignIn";
import AddHome from "../Pages/AddHome/AddHome";
import FindProperty from "../Pages/FindProperty/FindProperty";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

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
          path: '/findProperty',
          element: <FindProperty></FindProperty>
        },
        {
          path: '/addHome',
          element: <AddHome></AddHome>
        },
        {
          path: '/viewDetails/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;