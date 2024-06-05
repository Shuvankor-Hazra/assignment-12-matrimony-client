import useAuth from '../../../hooks/useAuth'
import { Helmet } from 'react-helmet-async'
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/LoadingSpinner';
import bg from '../../../assets/yellow-backgroun.jpg';

const Profile = () => {
    const { user, loading } = useAuth() || {};
    const [role, isLoading] = useRole();
    console.log(user);

    if (isLoading || loading) return <LoadingSpinner />
    return (
        <div className='flex justify-center items-center h-screen cursor-default'>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className='bg-white shadow-lg rounded-2xl w-4/5'>
                <img
                    alt='profile'
                    // src='https://wallpapercave.com/wp/wp10784415.jpg'
                    src={bg}
                    className='w-full mb-4 rounded-t-2xl h-52'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-20'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-8 border-white '
                        />
                    </a>

                    <p className='p-2 px-4 mt-3 text-sm text-black bg-[#f99417] rounded-full capitalize'>
                        {role}
                    </p>
                    <p className='mt-3 text-xl font-medium text-gray-800 underline '>
                        User Id: {user?.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 mt-3'>
                            <p className='flex flex-col'>
                                Name:
                                <span className='font-bold text-black '>
                                    {user?.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email:
                                <span className='font-bold text-black '>{user?.email}</span>
                            </p>

                            <div className='space-y-2'>
                                <button className='bg-[#f99417] px-10 py-2 rounded-lg text-black cursor-pointer hover:bg-[#db8214] block mb-1'>
                                    Update Profile
                                </button>
                                <button className='bg-[#f99417] px-7 py-2 rounded-lg text-black cursor-pointer hover:bg-[#db8214]'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile