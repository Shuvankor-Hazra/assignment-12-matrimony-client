import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
// import { GrUserAdmin } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import logo from '../../../assets/matrimonial.png';
import useRole from '../../../hooks/useRole'
import MenuItem from './Menu/MenuItem'
import AdminMenu from './Menu/AdminMenu'
import GuestMenu from './Menu/GuestMenu'
import ToggleBtn from '../../../shared/Buttons/ToggleBtn'

const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    const [isAdmin] = useRole();
    const [toggle, setToggle] = useState(true);

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    const toggleHandler = (event) => {
        setToggle(event.target.checked);
    }


    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div className='cursor-pointer '>
                    <div className='block p-4 font-bold '>
                        <Link className='flex items-center gap-3' to={'/'}>
                            <img
                                // className='hidden md:block'
                                src={logo}
                                alt='logo'
                                width='50'
                                height='50'
                                className='rounded-full border-2 border-[#f99417]'
                            />
                            <h1>Shaddi.com</h1>
                        </Link>
                    </div>
                </div>
                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'>
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'}  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <Link to='/' className='cursor-pointer w-full hidden md:flex px-4 py-4 shadow-lg rounded-lg justify-center items-center bg-base-300 mx-auto'>
                            <div className='flex items-center gap-3'>
                                <img
                                    // className='hidden md:block'
                                    className='rounded-full border-4 border-[#f99417]'
                                    src={logo} alt='logo'
                                    width='60'
                                    height='60'
                                />
                                <h2 className='text-xl font-bold text-black'>Shaddi.com</h2>
                            </div>
                        </Link>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* Conditional toggle button here.. */}
                        {isAdmin === 'admin' && <ToggleBtn toggleHandler={toggleHandler} toggle={toggle} />}
                        {/*  Menu Items */}
                        <nav>
                            {isAdmin === 'admin' ? toggle ? <AdminMenu /> : <GuestMenu /> : undefined}
                            {isAdmin === 'make admin' && <GuestMenu />}
                        </nav>
                    </div>
                </div>
                <div>
                    <hr />

                    {/* Profile Menu */}
                    <MenuItem label={'Profile'} address={'/dashboard/profile'} icon={FcSettings} />
                    <button onClick={logOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar