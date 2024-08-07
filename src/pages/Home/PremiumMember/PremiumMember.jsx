import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useState } from "react";

const PremiumMember = () => {
    const [sortOrder, setSortOrder] = useState('descending');
    const axiosCommon = useAxiosCommon();
    const { data, isLoading } = useQuery({
        queryKey: ['premiumMembers'],
        queryFn: async () => {
            const res = await axiosCommon.get('/makePremium')
            return res.data;
        }
    });
    const premiumMember = data?.filter(i => i.type === 'premium')
    const sortedPremiumMember = premiumMember?.sort((a, b) => {
        const ageA = parseInt(b.age?.split(' ')[0]);
        const ageB = parseInt(a.age?.split(' ')[0]);
        if (sortOrder === 'ascending') {
            return ageA - ageB;
        } else {
            return ageB - ageA;
        }
    });
    const showPremium = sortedPremiumMember?.slice(0, 6);

    if (isLoading) return <LoadingSpinner />

    return (
        <div className="my-20">
            <div className="text-center mb-20">
                <SectionTitle heading={'Our Premium Members'} subHeading={'Make premium'} />

                <div className="flex justify-center items-center mb-5">
                    <label className="mr-3 text-lg font-medium">Sort by Age:</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="select select-bordered"
                    >
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-5 lg:px-0">
                {
                    showPremium?.map(item => <div key={item._id} className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 ">
                        <img className="object-cover object-center w-full h-80 " src={item.image} alt="avatar" />
                        <div className="px-6 py-4 text-xl">
                            <h1 className="text-xl font-semibold text-gray-800 dark:text-white capitalize">{item.gender}</h1>
                            <p className="py-2 text-gray-700 dark:text-gray-400">Biodata Id: {item.bioDataId}</p>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <p className="px-2 text-sm">Age: {item.age}</p>
                            </div>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <p className="px-2 text-sm">Division: {item.permanentDivision}</p>
                            </div>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <p className="px-2 text-sm">Occupation: {item.occupation}</p>
                            </div>
                            <div className="my-3">
                                <Link to={`/details/${item._id}`} className="btn bg-gray-500 border border-b-4 border-[#F99417] text-white uppercase w-full">
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