import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import ApprovePremiumTableRow from "../../TableRows/ApprovePremiumTableRow";

const ApprovedPremium = () => {
    const axiosSecure = useAxiosSecure()

    const { data: biodata = [], refetch } = useQuery({
        queryKey: ['approvePremium'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/makePremium`)
            return data;
        }
    })
    console.log(biodata);
    return (
        <div>
            <div className='container mx-auto px-4 sm:px-8'>
                <Helmet>
                    <title>Shaddi.com | Approved Premium</title>
                </Helmet>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Email
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Biodata Id
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* User data table row */}
                                    {biodata.map(user => <ApprovePremiumTableRow key={user._id} user={user} refetch={refetch} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovedPremium;