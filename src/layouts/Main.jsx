import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
        <>
            {/* Navbar */}
            <div className="max-w-screen-xl mx-auto mb-20">
                <Navbar />
            </div>
            {/* Outlet */}
            <div className="min-h-[calc(100vh-368px)] max-w-screen-xl mx-auto">
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