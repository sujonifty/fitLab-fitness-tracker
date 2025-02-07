import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Trainer from "../Pages/Trainer/Trainer/Trainer";
import Classes from "../Pages/Classes/AllClasses/AllClasses";
// import Profile from "../Pages/Profile/Profile";
import Forum from "../Pages/Forum/Forum/Forum";
import PrivateRoute from "./PrivateRoute";
// import BeTrainer from "../Pages/BeTrainer/BeTrainer";
import Dashboard from "../Layout/Dashboard";
import AppliedTrainer from "../Pages/Dashboard/AppliedTrainer/AppliedTrainer";
import AllTrainer from "../Pages/Dashboard/AllTrainer/AllTrainer";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AllClasses from "../Pages/Classes/AllClasses/AllClasses";
import AddSlot from "../Pages/Dashboard/Trainer/AddSlot/AddSlot";
import Subscriber from "../Pages/Dashboard/Subscriber/Subscriber";
import ManageSlot from "../Pages/Dashboard/Trainer/ManageSlot/ManageSlot";
import ForumPost from "../Pages/Dashboard/ForumPost/ForumPost";
import CardDetails from "../Pages/Trainer/TrainerCard/CardDetails";
import Booking from "../Pages/Trainer/Booking/Booking";
import Activity from "../Pages/Member/Activity/Activity";
import UserProfile from "../Pages/Member/UserProfile/UserProfile";
import Balance from "../Pages/Dashboard/Balance/Balance";
import BookedTrainer from "../Pages/Member/bookedTrainer/BookedTrainer";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "login",
                element: <Login></Login> ,
            },
            {
                path: "trainer",
                element: <Trainer></Trainer> ,
            },
            {
                path: "class",
                element: <AllClasses></AllClasses> ,
            },
            {
                path: "forum",
                element: <Forum></Forum> ,
            },
            {
                path: "profile",
                element: <UserProfile></UserProfile> ,
            },
            // {
            //     path: "beTrainer",
            //     element: <BeTrainer></BeTrainer> ,
            // },
            // {
            //     path: "profile",
            //     element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            // },
            {
                path: "cardDetails/:email",
                element:<PrivateRoute> <CardDetails></CardDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fit-lab-server-side.vercel.app/trainerCard/${params.email}`)
            },
            {
                path: "booking/:id",
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fit-lab-server-side.vercel.app/slotBooking/${params.id}`)
            },
            // {
            //     path: "payment/:id",
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://fit-lab-server-side.vercel.app/payment/${params.id}`)
            // },
            
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: "appliedTrainer",
                element: <AdminRoute> <AppliedTrainer></AppliedTrainer></AdminRoute>,
            },
            {
                path: "allTrainer",
                element:<AdminRoute> <AllTrainer></AllTrainer></AdminRoute>,
            },
            {
                path: "balance",
                element: <AdminRoute> <Balance></Balance></AdminRoute>,
            },
            {
                path: "addClass",
                element: <AdminRoute><AddClass></AddClass></AdminRoute>,
            },
            {
                path: "addSlot",
                element: <AddSlot></AddSlot>,
            },
            {
                path: "subscriber",
                element: <Subscriber></Subscriber>,
            },
            {
                path: "manageSlot",
                element: <ManageSlot></ManageSlot>,
            },
            {
                path: "addForum",
                element: <ForumPost></ForumPost>,
            },
            {
                path: "activity",
                element: <Activity></Activity>,
            },
            {
                path: "profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "bookedTrainer",
                element: <BookedTrainer></BookedTrainer>
            },
            
            
        ]
    },
]);