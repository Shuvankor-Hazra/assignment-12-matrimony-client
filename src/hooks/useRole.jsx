import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin='', isLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const  res  = await axiosSecure.get(`/users/${user?.email}`)
            // console.log(res.data.role);
            return res.data?.role;
            }
            })
    return [isAdmin, isLoading];
};

export default useRole;