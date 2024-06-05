import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PremiumMember from "../PremiumMember/PremiumMember";

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
        </>
    );
};

export default Home;