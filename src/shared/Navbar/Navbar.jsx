import { NavLink } from 'react-router-dom';
import logo from '../../../public/matrimonial.png';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        try {
            logOut()
            toast.success('Log out successful')
        } catch (err) {
            console.log(err.message);
        }
    }

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/bioData'>Bio data</NavLink></li>
        <li><NavLink to='/aboutUs'>About Us</NavLink></li>
        <li><NavLink to='/contactUs'>Contact Us</NavLink></li>
        {
            user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }
        {/* {
            user && <li><NavLink to='/dashboard/userHome'>Dashboard</NavLink></li>
        } */}
    </>

    return (
        // <div className='navbar fixed z-10 max-w-screen-xl'>
        //     <div className='flex-1'>
        //         <NavLink to='/' className='flex gap-2 items-center'>
        //             <img className='w-16 h-16 rounded-full ' src={logo} alt='' />
        //             <h1 className='text-4xl font-extrabold'>Shaadi.com</h1>
        //         </NavLink>
        //     </div>
        //     <div className='flex gap-3'>
        //         <ul className='menu menu-lg menu-horizontal px-1'>
        //             {!user ? <li>
        //                 <NavLink to='/login'>Login</NavLink>
        //             </li> : <li>
        //                 <NavLink onClick={handleLogOut}>Logout</NavLink>
        //             </li>}

        //         </ul>
        //         <div className='dropdown dropdown-end z-50'>
        //             <div
        //                 tabIndex={0}
        //                 role='button'
        //                 className='btn btn-ghost btn-circle avatar'
        //             >
        //                 <div title={user ? user?.email : "Email Not found"} className='w-10 rounded-full' >
        //                     <img
        //                         referrerPolicy='no-referrer'
        //                         alt='User Profile Photo'
        //                         src={user ? user?.photoURL : logo}
        //                     />
        //                 </div>
        //             </div>
        //             <ul
        //                 tabIndex={0}
        //                 className='menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
        //             >
        //                 <li><NavLink to='/'>Home</NavLink></li>

        //                 <li className='mt-2'>
        //                     <button className='bg-gray-200 block text-center'>{user ? user?.displayName : "Name Not found"}</button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
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
                <ul className="menu-horizontal space-x-6 text-xl font-medium font-playFair">
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
                        <button onClick={handleLogOut} className="btn btn-outline border border-b-4 border-[#F99417] text-white uppercase">Sign Out</button>
                    </> : <>
                        <Link to={'/login'} className="btn btn-outline border border-b-4 border-[#F99417] text-white uppercase">Sign In</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar