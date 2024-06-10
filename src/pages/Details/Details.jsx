import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="pt-40 max-w-screen-xl mx-auto">
            <div className="lg:flex gap-8 rounded-xl border-2">
                <div className="lg:w-1/3">
                    <img className="w-full rounded-s-lg" src={data.image} alt="Movie" />
                </div>
                <div className="px-6 py-4 text-xl lg:w-2/3 flex items-center justify-between">
                    <div className="space-y-3">
                        <h1 className="text-xl font-semibold text-gray-800 capitalize">{data.gender}</h1>
                        <h1 className="text-xl font-semibold text-gray-800 capitalize">Name: {data.name}</h1>
                        <p className="py-2 text-gray-700">Id : {data._id}</p>
                        <p className="mt-2 ">Birth Year : {data.dateOfBirth}</p>
                        <p className="mt-2 capitalize">Height : {data.height}</p>
                        <p className="mt-2 capitalize">Weight : {data.weight}</p>
                        <p className="mt-2">Age : {data.age}</p>
                        <p className="mt-2 capitalize">Occupation : {data.occupation}</p>
                        <p className="mt-2 capitalize">Race : {data.race}</p>
                    </div>
                    <div className="space-y-3">
                        <p className="mt-2">Fathers Name : {data.fathersName}</p>
                        <p className="mt-2">Mothers Name : {data.mothersName}</p>
                        <p className="mt-2 capitalize">Permanent Division : {data.permanentDivision}</p>
                        <p className="mt-2 capitalize">Present Division : {data.presentDivision}</p>
                        <p className="mt-2 capitalize">Expected Partner Age : {data.expectedPartnerAge}</p>
                        <p className="mt-2 capitalize">Expected Partner Height : {data.expectedPartnerHeight}</p>
                        <p className="mt-2 capitalize">Expected Partner Weight : {data.expectedPartnerWeight}</p>

                        <p className="mt-2 capitalize">Email : {data.email}</p>
                        <p className="mt-2 capitalize">Mobile : {data.mobileNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;