import { FaUser } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const HowItWork = () => {
    return (
        <div className="bg-base-200 px-10 py-20 rounded-xl">
            <SectionTitle heading={'How it works'} subHeading={'Get started in 3 easy steps'} />
            <div className="lg:flex">
                <div className="lg:w-1/3 flex flex-col items-center justify-center text-center pt-10">
                    <div className="w-40 h-40 bg-red-200 rounded-full flex items-center justify-center">
                        <FaUser className="text-7xl" />
                    </div>
                    <span className="-mt-5 px-4 py-2 rounded-full bg-white text-xl font-bold">1</span>

                    <h2 className="my-8 text-2xl font-semibold">Create your profile</h2>
                    <p className="text-lg">Create your detail profile, add photos and describe your partner preference</p>
                </div>

                <div className="lg:w-1/3 flex flex-col items-center justify-center text-center pt-10">
                    <div className="w-40 h-40 bg-red-300 rounded-full flex items-center justify-center">
                        <FaUser className="text-7xl" />
                    </div>
                    <span className="-mt-5 px-4 py-2 rounded-full bg-white text-xl font-bold">2</span>

                    <h2 className="my-8 text-2xl font-semibold">Search Your Partner</h2>
                    <p className="text-lg">Search your preferred partner by location, education, interest and so on</p>
                </div>

                <div className="lg:w-1/3 flex flex-col items-center justify-center text-center pt-10">
                    <div className="w-40 h-40 bg-red-400 rounded-full flex items-center justify-center">
                        <FaUser className="text-7xl" />
                    </div>
                    <span className="-mt-5 px-4 py-2 rounded-full bg-white text-xl font-bold">3</span>

                    <h2 className="my-8 text-2xl font-semibold">Start Communication</h2>
                    <p className="text-lg">Start communication with suitable profiles by sending message & emails</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;