import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Trainer from "../Pages/Trainer/Trainer/Trainer";
import Classes from "../Pages/Classes/Classes/Classes";
import Profile from "../Pages/Profile/Profile";
import Forum from "../Pages/Forum/Forum/Forum";
import PrivateRoute from "./PrivateRoute";
import BeTrainer from "../Pages/BeTrainer/BeTrainer";
import Dashboard from "../Layout/Dashboard";
import AppliedTrainer from "../Pages/Dashboard/AppliedTrainer/AppliedTrainer";
import AllTrainer from "../Pages/Dashboard/AllTrainer/AllTrainer";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";

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
                element: <Classes></Classes> ,
            },
            {
                path: "forum",
                element: <Forum></Forum> ,
            },
            {
                path: "beTrainer",
                element: <BeTrainer></BeTrainer> ,
            },
            // {
            //     path: "/dashboard",
            //     element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            // },
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
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
        ]
    },
]);