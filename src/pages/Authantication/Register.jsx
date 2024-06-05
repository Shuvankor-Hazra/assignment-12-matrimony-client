import { Helmet } from "react-helmet-async"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from '../../../public/matrimonial.png';
import registerImg from '../../assets/register.jpg';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { user, setUser,
        createUser,
        signInWithGoogle,
        updateUserProfile, } = useAuth();

    // email password registration
    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        setUser({ ...user, photoURL: data.photoURL, displayName: data.name })
                        reset();
                        navigate(from, { replace: true })
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Sign Up Successful",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    })
            }).catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    // google login
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login with google successful",
                showConfirmButton: false,
                timer: 2000
            });
            navigate(from, { replace: true });
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
        }
    }

    return (
        <>
            <Helmet>
                <title>Shaadi.com | Register</title>
            </Helmet>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)] pt-40'>
                <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                        <div className='flex justify-center mx-auto'>
                            <img
                                className='w-auto h-16 sm:h-12 rounded-full'
                                src={logo}
                                alt=''
                            />
                        </div>
                        <p className='mt-3 text-xl text-center text-gray-600 '>
                            Get Your Free Account Now.
                        </p>
                        <div onClick={handleGoogleSignIn} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                            <div className='px-4 py-2'>
                                <FaGoogle className="text-green-500" />
                            </div>
                            <span className='w-5/6 px-4 py-3 font-bold text-center'>
                                Sign in with Google
                            </span>
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  lg:w-1/4'></span>
                            <div className='text-xs text-center text-gray-500 uppercase  hover:underline cursor-pointer'>
                                or Registration with email
                            </div>
                            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='name'
                                >
                                    User Name
                                </label>
                                <input
                                    id='name'
                                    autoComplete='name'
                                    name='name'
                                    placeholder="User name"
                                    {...register("name", { required: true })}
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                />
                                {errors.name?.type === 'required' && <span className="text-warning font-medium">Name is required</span>}
                            </div>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='photo'
                                >
                                    Photo URL
                                </label>
                                <input
                                    id='photoURL'
                                    autoComplete='photoURL'
                                    name='photo'
                                    placeholder="PhotoURL"
                                    {...register("photoURL", { required: true })}
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='text'
                                />
                                {errors.photoURL?.type === 'required' && <span className="text-warning font-medium">PhotoURL is required</span>}
                            </div>
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    Email Address
                                </label>
                                <input
                                    id='LoggingEmailAddress'
                                    autoComplete='email'
                                    name='email'
                                    placeholder="User email"
                                    {...register("email", { required: true })}
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='email'
                                />
                                {errors.email?.type === 'required' && <span className="text-warning font-medium">Email is required</span>}
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between'>
                                    <label
                                        className='block mb-2 text-sm font-medium text-gray-600 '
                                        htmlFor='loggingPassword'
                                    >
                                        Password
                                    </label>
                                </div>

                                <input
                                    id='loggingPassword'
                                    autoComplete='current-password'
                                    name='password'
                                    placeholder="User password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[0-9])(?=.*[- ?!@#$%^&*/\\])(?=.*[A-Z])(?=.*[a-z])/
                                    })}
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='password'
                                />
                                {errors.password?.type === 'required' && <span className="text-warning font-medium">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-warning font-medium">Password must be more then 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-warning font-medium">Password must be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-warning font-medium">Password must be contain at least one digit, one lowercase letter, one uppercase letter, and one special character from the set: - ?!@#$%^&*/\\.</span>}
                            </div>
                            <div className='mt-6'>
                                <button
                                    type='submit'
                                    className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  md:w-1/4'></span>

                            <Link
                                to='/login'
                                className='text-sm text-gray-500 uppercase  hover:underline'
                            >
                                or sign in
                            </Link>

                            <span className='w-1/5 border-b  md:w-1/4'></span>
                        </div>
                    </div>
                    <div
                        className='hidden bg-cover bg-center lg:block lg:w-1/2'
                        style={{
                            backgroundImage: `url(${registerImg})`,
                        }}
                    ></div>
                </div>
            </div>
        </>
    )
}

export default Registration