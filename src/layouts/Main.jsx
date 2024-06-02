import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
        <>
            {/* Navbar */}
            <div className="">
                <Navbar />
            </div>
            {/* Outlet */}
            <div className="min-h-[calc(100vh-368px)]">
                <Outlet />
            </div>
            {/* Footer */}
            <div className="mt-20">
                <Footer />
            </div>

        </>
    );
};

export default Main;