import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../AllToys/AllToys";
import AddToy from "../AddToy/AddToy";
import MyToy from "../MyToy/MyToy";
import PrivateRoutes from "./PrivateRoutes";
import UpdateToy from "../MyToy/UpdateToy/UpdateToy";
import Error from "../Error/Error";
import ViewDetails from "../ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-marketplace-server-alpha.vercel.app/totalToys')
            },
            {
                path: 'addToy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>

            },
            {
                path: 'myToy',
                element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
            },
            {
                path: "updateToy/:id",
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`https://toy-marketplace-server-alpha.vercel.app/allToys/${params.id}`)
            },
            {
                path: "viewDetails/:id",
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://toy-marketplace-server-alpha.vercel.app/allToys/${params.id}`)
            }
            
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router;