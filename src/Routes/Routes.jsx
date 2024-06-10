import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Trainer from "../Pages/Trainer/Trainer/Trainer";
import Classes from "../Pages/Classes/AllClasses/AllClasses";
import Profile from "../Pages/Profile/Profile";
import Forum from "../Pages/Forum/Forum/Forum";
import PrivateRoute from "./PrivateRoute";
import BeTrainer from "../Pages/BeTrainer/BeTrainer";
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
                path: "beTrainer",
                element: <BeTrainer></BeTrainer> ,
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: "cardDetails/:email",
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`https://fit-lab-server-side.vercel.app/trainerCard/${params.email}`)
            },
            {
                path: "booking/:id",
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`https://fit-lab-server-side.vercel.app/slotBooking/${params.id}`)
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: "appliedTrainer",
                element: <AppliedTrainer></AppliedTrainer>,
            },
            {
                path: "allTrainer",
                element: <AllTrainer></AllTrainer>,
            },
            {
                path: "addClass",
                element: <AddClass></AddClass>,
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
            
            
        ]
    },
]);