/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ApprovedContactRequestTableRow = ({ user, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const handleApproveContactReq = (id) => {
        axiosSecure.patch(`/contactRequest/${id}`)
            .then(res => {
                console.log(res.data);
                refetch();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Contact Request Approved successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full '
                    ></span>
                    <span className='relative capitalize'>{user?.bioDataId}</span>
                </button> 
                {/* Make Admin Modal */}
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={()=>handleApproveContactReq(user._id)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative capitalize'>{user?.status}</span>
                </button>
            </td>
        </tr>
    );
};

export default ApprovedContactRequestTableRow;