/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const MyFavoriteBiodataTableRow = ({ item, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/favoritesBiodata/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: 'top',
                                title: "Deleted!",
                                text: "Your Favorite Biodata has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    })
            }
        });
    }
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item?.bioDataId}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap capitalize'>{item?.permanentDivision}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap capitalize'>{item?.occupation}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => handleDelete(item?._id)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full '
                    ></span>
                    <span className='relative capitalize'>Delete</span>
                </button>
            </td>
        </tr>
    );
};

export default MyFavoriteBiodataTableRow;