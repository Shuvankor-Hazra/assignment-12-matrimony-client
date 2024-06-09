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
import PrivateRoutes from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import GuestDashboard from "../../components/Dashboard/Guest/EditBiodata";
import ViewBiodata from "../../components/Dashboard/Guest/ViewBiodata";
import AllBiodata from "../../pages/AllBiodata/AllBiodata";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ContactUs from "../../pages/ContactUs/ContactUs";


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
                element: <PrivateRoutes><Details /></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:9000/premiumMembers/${params.id}`)
            },
            {
                path: '/allBiodata',
                element: <AllBiodata />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
        ]
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoutes>
                <DashBoard />
            </PrivateRoutes>,
        children: [
            {
                path: 'admin-home',
                element:
                    <PrivateRoutes>
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    </PrivateRoutes>
            },
            {
                path: 'manage-users',
                element:
                    <PrivateRoutes>
                        <AdminRoute>
                            <ManageUsers />
                        </AdminRoute>
                    </PrivateRoutes>
            },
            {
                path: 'profile',
                element:
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
            },
            {
                path: 'edit-biodata',
                element:
                    <PrivateRoutes>
                        <GuestDashboard />
                    </PrivateRoutes>
            },
            {
                path: 'edit-biodata/:id',
                element:
                    <PrivateRoutes>
                        <GuestDashboard />
                    </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:9000/bioData/${params.id}`)
            },
            {
                path: 'view-biodata',
                element:
                    <PrivateRoutes>
                        <ViewBiodata />
                    </PrivateRoutes>
            },


        ]
    }
]);

export default router;