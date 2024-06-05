import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";


const DashBoard = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/* sideBar */}
            <div>
                <Sidebar />
            </div>
            {/* outlet */}
            <div className="flex-1 md:ml-72">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;