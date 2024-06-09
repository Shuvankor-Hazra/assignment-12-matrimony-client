import { NavLink } from 'react-router-dom';
import logo from '../../assets/matrimonial.png';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useRole from '../../hooks/useRole';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useRole();
    const [isRoleLoaded, setIsRoleLoaded] = useState(false);

    const handleLogOut = () => {
        try {
            logOut()
            toast.success('Log out successful')
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        if (isAdmin) {
            setIsRoleLoaded(true);
        }
    }, [isAdmin]);

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allBiodata'>All Biodata</NavLink></li>
        <li><NavLink to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
        {
            isRoleLoaded && isAdmin === 'admin' &&
            <li><NavLink to='/dashboard/admin-home'>Dashboard</NavLink></li>
        }
        {
            isRoleLoaded && isAdmin === 'guest' &&
            <li><NavLink to='/dashboard/edit-biodata'>Dashboard</NavLink></li>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white py-5 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="font-playFair menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-56">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'}>
                    <div className='flex items-center gap-3 ' >
                        <img className='w-14 h-14 rounded-full border-2 border-[#F99417]' src={logo} alt='logo' />
                        <h1 className='text-xl lg:text-3xl font-bold'>Shaddi.com</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal space-x-6 text-xl  font-playFair">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar mr-5'
                        >
                            <div title={user?.displayName} className='w-full border-2 border-[#F99417] rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="btn bg-gray-500 border border-b-4 border-[#F99417] text-white uppercase">Sign Out</button>
                    </> : <>
                        <Link to={'/login'} className="btn bg-gray-500 border border-b-4 border-[#F99417] text-white uppercase">Sign In</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar