import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PremiumMember from "../PremiumMember/PremiumMember";
import HowItWork from "../HowItWork/HowItWork";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Shaddi.com | Home</title>
            </Helmet>
            <div>
                <Banner />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <PremiumMember />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <HowItWork />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <SuccessCounter />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <SuccessStory />
            </div>
        </>
    );
};

export default Home;