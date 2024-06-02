import { NavLink } from 'react-router-dom';
import logo from '../../../public/matrimonial.png';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user,logOut } = useAuth();

    const handleLogOut = () => {
        try {
            logOut()
            toast.success('Log out successful')
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='navbar mx-auto'>
            <div className='flex-1'>
                <NavLink to='/' className='flex gap-2 items-center'>
                    <img className='w-16 h-16 rounded-full ' src={logo} alt='' />
                    <h1 className='text-4xl font-extrabold'>Shaadi.com</h1>
                </NavLink>
            </div>
            <div className='flex gap-3'>
                <ul className='menu menu-lg menu-horizontal px-1'>
                    {!user ? <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li> : <li>
                        <NavLink onClick={handleLogOut}>Logout</NavLink>
                    </li>}

                </ul>
                <div className='dropdown dropdown-end z-50'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div title={user ? user?.email : "Email Not found"} className='w-10 rounded-full' >
                            <img
                                referrerPolicy='no-referrer'
                                alt='User Profile Photo'
                                src={user ? user?.photoURL : logo}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                    >
                        <li><NavLink to='/'>Home</NavLink></li>

                        <li className='mt-2'>
                            <button className='bg-gray-200 block text-center'>{user ? user?.displayName : "Name Not found"}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar