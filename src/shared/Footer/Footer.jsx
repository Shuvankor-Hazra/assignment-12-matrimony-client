import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6';
import logo from '../../assets/matrimonial.png';

const Footer = () => {
    return (
        <footer className="bg-base-200 dark:bg-gray-900 pt-10">
            <div className="max-w-screen-xl mx-auto p-6">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <a href="#" className='flex items-center text-2xl font-bold'>
                                <img className="w-auto h-16 border-4 mr-2 border-[#F99417] rounded-full" src={logo} alt="" />
                                Shaadi.com
                            </a>

                            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                            <div className="flex mt-6 -mx-2">
                                <a href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Reddit">
                                    <FaFacebook  className='text-3xl'/>
                                </a>

                                <a href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Facebook">
                                    <FaGithub className='text-3xl'/>
                                </a>

                                <a href="#"
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Github">
                                    <FaInstagram className='text-3xl'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-black border-none dark:bg-gray-700" />

                <div>
                    <p className="text-center text-gray-500 dark:text-gray-400">© Shaadi.com 2024 - All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;