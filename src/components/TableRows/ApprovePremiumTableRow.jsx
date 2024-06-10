/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure"

const ApprovePremiumTableRow = ({ user, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const handleApprovePremium = (id) => {
        axiosSecure.patch(`/bioData/${id}`)
            .then(res => {
                console.log(res.data);
                refetch();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Updated to premium",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
        axiosSecure.patch(`/makePremium/${id}`)
            .then(res => {
                console.log(res.data);
                refetch();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Updated to premium",
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
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full '
                    ></span>
                    <span className='relative capitalize'>{user?.bioDataId}</span>
                </span>
                {/* Make Admin Modal */}
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => handleApprovePremium(user._id)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative capitalize'>{user.type}</span>
                </button>
                {/* Make Premium User Modal */}

            </td>
        </tr>
    )
}


export default ApprovePremiumTableRow