import {
    createBrowserRouter
} from "react-router-dom";
import Main from '../../layouts/Main'
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Authantication/Login";
import Register from "../../pages/Authantication/Register";
import DashBoard from "../../layouts/DashBoard";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard />,
        errorElement: <ErrorPage />,
        children: [
            {

            }
        ]
    }
]);

export default router;