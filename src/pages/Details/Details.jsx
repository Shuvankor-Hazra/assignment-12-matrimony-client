import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Details = () => {
    const axiosCommon = useAxiosCommon();
    const data = useLoaderData();
    const { user } = useAuth();

    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosCommon.get(`/users/${user.email}`)
            return res.data;
        }
    })
    console.log(users);

    const handleAddToFavorite = (data) => {

        const favoriteInfo = {
            name: data.name,
            bioDataId: data.bioDataId,
            permanentDivision: data.permanentDivision,
            occupation: data.occupation,
            email: user.email
        }

        axiosCommon.post('/favoritesBiodata', favoriteInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top',
                        title: "Send Request!",
                        text: "Added favorites biodata.",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            }).catch(err => {
                console.log(err);
                toast.error(err.message);
            })
    }

    return (
        <div className="pt-40 max-w-screen-xl mx-auto">
            <Helmet title="Shaddi.com | Details"/>
            <SectionTitle heading={'Details'} subHeading={'More Info'}/>
            <div className="lg:flex gap-8 rounded-xl border-2 lg:p-12 p-6 mx-3">
                <div className="lg:w-1/3 flex items-center">
                    <img className="w-full rounded-s-lg" src={data.image} alt="Movie" />
                </div>
                <div className="text-xl lg:w-2/3 flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="space-y-4">
                        <h1 className="text-xl font-semibold text-gray-800 capitalize">{data.gender}</h1>
                        <h1 className="text-xl font-semibold text-gray-800 capitalize">Name: {data.name}</h1>
                        <p className="py-2 text-gray-700">Biodata Id : {data.bioDataId}</p>
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

                        {
                            users?.type === "premium" &&
                            <>
                                <p className="mt-2 capitalize">Email : {data.email}</p>
                                <p className="mt-2 capitalize">Mobile : {data.mobileNumber}</p>
                            </>
                        }
                        <button onClick={() => handleAddToFavorite(data)} className="btn bg-gray-500 border border-b-4 border-[#F99417] text-white uppercase w-full">Add to favorites</button>

                        {
                            users?.type === "make premium" &&
                            <Link to={`/payment/${data._id}`} className="btn bg-gray-500 border border-b-4 border-[#F99417] text-white uppercase w-full">Request Contact Information</Link>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;