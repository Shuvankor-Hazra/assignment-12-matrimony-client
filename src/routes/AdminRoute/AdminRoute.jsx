/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import useRole from "../../hooks/useRole";


const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole();

    if (isLoading) return <LoadingSpinner />
    if (role === 'admin') return children
    return <Navigate to={'/dashboard/edit-biodata'} />
};

export default AdminRoute;