import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";


const DashBoard = () => {
    return (
        <div className="relative min-h-screen md:flex">
            <div>
                <Sidebar />
            </div>
            <div className="flex-1 md:ml-72">
                <div className="p-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;