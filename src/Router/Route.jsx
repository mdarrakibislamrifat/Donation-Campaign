import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Donation from "../Pages/Donation/Donation";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";


const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('donation.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
        ]
    }
])


export default myRoute;