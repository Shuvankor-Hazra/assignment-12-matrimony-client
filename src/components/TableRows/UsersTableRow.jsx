import PropTypes from 'prop-types'
import { useState } from 'react'
import UpdateUserModal from '../Modal/UpdateUserModal';
const UsersTableRow = ({ user, refetch }) => {

    const [isOpen, setIsOpen] = useState(false);


    // Modal Handler
    const modalHandler = (selected) => {
        console.log('User role updated', selected);
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
            </td>

            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {user?.status ? (
                    <p
                        className={`${user.status === 'make admin' ? 'text-green-500' : 'text-yellow-500'
                            } whitespace-no-wrap`}
                    >
                        {user.status}
                    </p>
                ) : (
                    <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
                )}
            </td> */}

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full '
                    ></span>
                    <span className='relative capitalize'>{user?.status}</span>
                </span>
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

UsersTableRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
}

export default UsersTableRow