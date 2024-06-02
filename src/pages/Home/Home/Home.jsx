import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Shaadi.com | Home</title>
            </Helmet>
            <div>
                <h2 className="text-3xl">This is home</h2>
            </div>
        </>
    );
};

export default Home;