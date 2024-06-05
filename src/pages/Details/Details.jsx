import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data  = useLoaderData();
    console.log(data);
    return (
        <div className="pt-40 max-w-screen-xl mx-auto">
            <div className="flex gap-8 rounded-xl border">
                <div className="w-1/3">
                    <img className="w-full" src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
                </div>
                <div className="px-6 py-4">
                            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{data.Biodata_Type}</h1>
                            <p className="py-2 text-gray-700 dark:text-gray-400">ID: {data._id}</p>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <h1 className="px-2 text-sm">Age: {data.Age}</h1>
                            </div>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <h1 className="px-2 text-sm">Division: {data.Permanent_Division_Name}</h1>
                            </div>
                            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <h1 className="px-2 text-sm">Occupation: {data.Occupation}</h1>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default Details;