/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useRole from "../../hooks/useRole";


const AdminRoute = ({ children }) => {
    const [isAdmin, isLoading] = useRole();

    if (isLoading) return <LoadingSpinner />
    if (isAdmin==='admin') return children
    return <Navigate to={'/dashboard/edit-biodata'} />
};

export default AdminRoute;