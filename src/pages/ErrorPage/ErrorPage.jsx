import { Link } from "react-router-dom";
import { CgDanger } from "react-icons/cg";


const ErrorPage = () => {
    return (
        <div >

            <div className="flex flex-col items-center justify-center gap-5 bg-base-100 h-dvh">
                <div className="text-9xl">
                    <CgDanger />
                </div>
                <h2 className="text-5xl font-medium">Oops...! Something went wrong.</h2>
                <Link to="/" className="text-green-500 underline text-xl"> Go Back To Home page</Link>
                <p className="text-lg text-pretty">Thank you for your patience.</p>
            </div>



        </div>
    );
};

export default ErrorPage;