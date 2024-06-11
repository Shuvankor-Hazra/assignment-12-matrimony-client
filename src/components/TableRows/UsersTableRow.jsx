/* eslint-disable react/prop-types */

import { useState } from 'react'
import UpdateUserModal from '../Modal/UpdateUserModal';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const UsersTableRow = ({ user, refetch }) => {
    const { user: loggedInUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false);
    const { mutateAsync } = useMutation({
        mutationFn: async (role) => {
            const { data } = await axiosSecure.patch(`/users/update/${user?.email}`, role);
            return data;
        },
        onSuccess: (data) => {
            refetch()
            console.log(data);
            toast.success('User role updated successfully!');
            setIsOpen(false);
        }
    });

    // Modal Handler
    const modalHandler = async (selected) => {
        if (loggedInUser.email === user.email) {
            toast.error('Action Not Allowed')
            return setIsOpen(false);
        }
        const userRole = {
            role: selected,
            status: 'normal',
        }
        try {
            await mutateAsync(userRole);
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    }

    const handleMakePremiumUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make premium it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(bioData);
                axiosSecure.patch(`/makePremiumUser/${id}`, { status: "premium" })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'top',
                                title: "Send Request!",
                                text: "Updated premium user.",
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
                <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {user?.status === "make premium" ? <button onClick={() => handleMakePremiumUser(user?._id)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full '
                    ></span>
                    <span className='relative capitalize'>{user?.status}</span>
                </button> : "Premium"}
                {/* Make Admin Modal */}
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative capitalize'>{user?.role}</span>
                </button>
                {/* Make Premium User Modal */}
                <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user} />
            </td>
        </tr>
    )
}


export default UsersTableRow