import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllService from "../Pages/AllService/AllService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MyReview from "../Pages/MyReview/MyReview";

import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignOut from "../Pages/SignOut/SignOut";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },

            {
                path: '/allServices',
                element: <AllService></AllService>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },

            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://poultry-farm-services-server.vercel.app/services/${params.id}`)
            },

            {
                path: '/login',
                element: <SignOut></SignOut>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },

            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },

            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://poultry-farm-services-server.vercel.app/reviews/${params.id}`)
            },

            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },




        ]
    }


])