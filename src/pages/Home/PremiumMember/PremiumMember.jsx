import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PremiumMember = () => {
    const axiosSecure = useAxiosSecure();
    

    const { data, isLoading } = useQuery({
        queryKey: ['premiumMembers'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/premiumMembers')
            console.log(data);
            return data;
        }
    });

    console.log(data);
    if (isLoading) return <div className="flex justify-center min-h-[500px]">
        <span className="loading loading-infinity w-16 text-[#BB8506]" />
    </div>

    return (
        <div className="my-20">
            <div className="text-center mb-20">
                <h2 className="text-3xl font-semibold">Our Premium Members</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
                {
                    data.map(item => <div key={item._id} className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
                        <img className="object-cover object-center w-full h-56 " src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                        <div className="px-6 py-4">
                            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{item.Biodata_Type}</h1>
                            <p className="py-2 text-gray-700 dark:text-gray-400">ID: {item._id}</p>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <h1 className="px-2 text-sm">Age: {item.Age}</h1>
                            </div>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <h1 className="px-2 text-sm">Division: {item.Permanent_Division_Name}</h1>
                            </div>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <h1 className="px-2 text-sm">Occupation: {item.Occupation}</h1>
                            </div>
                            <div className="my-3">
                                <Link to={`/details/${item._id}`} className="btn w-full">
                                    View Profile
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PremiumMember;