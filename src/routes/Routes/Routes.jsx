import {
    createBrowserRouter
} from "react-router-dom";
import Main from '../../layouts/Main'
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Authantication/Login";
import Register from "../../pages/Authantication/Register";
import DashBoard from "../../layouts/DashBoard";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Details from "../../pages/Details/Details";
import Profile from "../../pages/Dashboard/Common/Profile";
import ManageUsers from "../../components/Dashboard/Admin/ManageUsers";
import AdminDashboard from "../../components/Dashboard/Admin/AdminDashboard";


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
            {
                path: '/details/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`http://localhost:9000/premiumMembers/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard />,
        children: [
            {
                index: true,
                element: <AdminDashboard />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            },
            {
                path: 'profile',
                element: <Profile />
            },
        ]
    }
]);

export default router;