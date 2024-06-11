import { Helmet } from "react-helmet-async";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ApprovedContactRequestTableRow from "../../TableRows/ApprovedContactRequestTableRow";


const ApprovedContactRequest = () => {
    const axiosSecure = useAxiosSecure();

    const { data:users ,refetch} = useQuery({
        queryKey: ['contactReq'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contactRequest')
            return res.data;
        }
    });

    return (
        <div>
            <SectionTitle heading={'Approved Contact Request'} subHeading={'Approve now'} />
            <Helmet title="Shaddi.com | Approved Contact Request" />

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
                                {users?.map(user => <ApprovedContactRequestTableRow key={user._id} user={user} refetch={refetch} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovedContactRequest;