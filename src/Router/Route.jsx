import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import DonationCard from "../Pages/DonationCard/Donationcard";





const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/donation.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
           {
            path:'/cards/:id',
            element:<DonationCard></DonationCard>,
            loader:()=>fetch('/donation.json')
            
           }
        ]
    }
])


export default myRoute;