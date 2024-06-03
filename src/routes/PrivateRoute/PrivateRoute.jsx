/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center min-h-[500px]">
            <span className="loading loading-infinity w-16 text-[#BB8506]" />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />

};

export default PrivateRoutes;