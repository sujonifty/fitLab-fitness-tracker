import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Trainer from "../Pages/Trainer/Trainer/Trainer";
import Classes from "../Pages/Classes/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import Forum from "../Pages/Forum/Forum/Forum";

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
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login> ,
            },
            {
                path: "/trainer",
                element: <Trainer></Trainer> ,
            },
            {
                path: "/class",
                element: <Classes></Classes> ,
            },
            {
                path: "/forum",
                element: <Forum></Forum> ,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/profile",
                element: <Profile></Profile>,
            },
        ]
    },
]);