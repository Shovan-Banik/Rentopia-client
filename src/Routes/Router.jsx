import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/shared/SignUp/SignUp";
import SignIn from "../Pages/shared/SignIn/SignIn";
import AddHome from "../Pages/AddHome/AddHome";
import FindProperty from "../Pages/FindProperty/FindProperty";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import BookedHouse from "../Pages/Dashboard/BookedHouse/BookedHouse";
import MyWishList from "../Pages/Dashboard/MyWishList/MyWishList";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddedProperty from "../Pages/Dashboard/AddedProperty/AddedProperty";
import Booking from "../Pages/Dashboard/Booking/Booking";
import PaymentSuccess from "../Pages/Dashboard/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/Dashboard/PaymentFail/PaymentFail";
import AllBookedHouse from "../Pages/Dashboard/AllBookedHouse/AllBookedHouse";
import UpdateProperty from "../Pages/Dashboard/UpdateProperty/UpdateProperty";

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
          path: 'addHome',
          element: <AddHome></AddHome>
        },
        {
          path: '/viewDetails/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'allUser',
          element: <AllUser></AllUser>
        },
        {
          path:'allBookedHouse',
          element:<AllBookedHouse></AllBookedHouse>
        },
        {
          path: 'myWishList',
          element: <MyWishList></MyWishList>
        },
        {
          path:'bookedHouse',
          element: <BookedHouse></BookedHouse>

        },
        {
          path:'addedProperty',
          element: <AddedProperty></AddedProperty>
        },
        {
          path:'updateProperty/:id',
          element: <UpdateProperty></UpdateProperty>,
          loader:({params})=>fetch(`http://localhost:5000/property/${params.id}`)
        },
        {
          path:'bookings/:id',
          element:<Booking></Booking>,

        },
        {
          path: 'payment/success/:tranId',
          element: <PaymentSuccess></PaymentSuccess>
        },
        {
          path: 'payment/fail/:tranId',
          element: <PaymentFail></PaymentFail>
        }
      ]
    }
  ]);
  export default router;