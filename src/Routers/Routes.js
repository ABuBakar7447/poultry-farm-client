import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home";

import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignOut from "../Pages/SignOut/SignOut";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
        {
            path:'/',
            element:<Home></Home>,
        },

        {
            path: '/allServices',
            element: <AllService></AllService>
        },

        {
            path: '/services/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },

        {
            path:'/login',
            element:<SignOut></SignOut>
        },
        {
            path:'/signin',
            element:<SignIn></SignIn>
        },
            
        ]
    }
  

])