import { Helmet } from "react-helmet-async";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import LoadingSpinner from "../../LoadingSpinner";
import Swal from "sweetalert2";
import { BiAddToQueue } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ViewBiodata = () => {
    const { user } = useAuth();
    const axiosCommon = useAxiosCommon();

    const { data: biodata = [], isLoading, refetch } = useQuery({
        queryKey: ['bioData'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/usersBioData/${user.email}`)
            return data;
        }
    });

    // const handleDeleteUser = (bioData) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosCommon.delete(`/bioData/${bioData._id}`)
    //                 .then(res => {
    //                     if (res.data.deletedCount > 0) {
    //                         refetch();
    //                         Swal.fire({
    //                             position: 'top',
    //                             title: "Deleted!",
    //                             text: "Biodata has been deleted.",
    //                             icon: "success",
    //                             showConfirmButton: false,
    //                             timer: 2000
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }

    const handleMakePremium = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make premium it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosCommon.post('/makePremium', item)
                    .then(res => {
                        if (res.data.insertedId) {
                            refetch();
                            Swal.fire({
                                position: 'top',
                                title: "Send Request!",
                                text: "Request has been send.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    })
            }
        });
    }


    if (isLoading) return <LoadingSpinner />
    return (
        <div>
            <Helmet title="Shaddi.com | View Biodata" />
            <SectionTitle heading={'View your biodata'} subHeading={'Your Creation'} />

            <div>
                {
                    biodata.map(item => <div key={item._id} >
                        <div className="lg:flex gap-5 rounded-xl border-2 my-10 p-2 lg:p-10">
                            <div className="lg:w-1/3 flex items-center">
                                <img className="w-full rounded-xl" src={item.image} alt="user" />
                            </div>
                            <div className="w-full lg:flex items-center justify-around py-3 text-xl font-semibold text-gray-800 text-poppins sm:text-center">
                                <div className="space-y-2">
                                    <p className="capitalize"><span className="font-semibold text-xl font-playFair">Gender:</span> {item.gender}</p>
                                    <p className="capitalize"><span className="font-semibold text-xl font-playFair">Name:</span> {item.name}</p>
                                    <p><span className="text-xl font-playFair">Date Of Birth:</span> {item.dateOfBirth}</p>
                                    <p><span className="text-xl font-playFair">Height:</span> {item.height}</p>
                                    <p><span className="text-xl font-playFair">Weight:</span> {item.weight}</p>
                                    <p><span className="text-xl font-playFair">Age:</span> {item.age}</p>
                                    <p className="capitalize"><span className="text-xl font-playFair">Occupation:</span> {item.occupation}</p>
                                    <p className="capitalize"><span className="text-xl font-playFair">Race:</span> {item.race}</p>
                                    <p><span className="text-xl font-playFair">Fathers Name:</span> {item.fathersName}</p>
                                    <p><span className="text-xl font-playFair">Mothers Name:</span> {item.mothersName}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="capitalize"><span className="text-xl font-playFair">Permanent Division:</span> {item.permanentDivision}</p>
                                    <p className="capitalize"><span className="text-xl font-playFair">Present Division:</span> {item.presentDivision}</p>
                                    <p><span className="text-xl font-playFair">Expected Partner Age:</span> {item.expectedPartnerAge}</p>
                                    <p><span className="text-xl font-playFair">Expected Partner Height:</span> {item.expectedPartnerHeight}</p>
                                    <p><span className="text-xl font-playFair">Expected Partner Weight:</span> {item.expectedPartnerWeight}</p>
                                    <p><span className="text-xl font-playFair">Email:</span> {item.email}</p>
                                    <p><span className="text-xl font-playFair">Mobile Number:</span> {item.mobileNumber}</p>
                                    <div className="py-2">
                                        <Link to={`/dashboard/edit-biodata`} className="btn text-3xl bg-slate-100 border-x-4 border-[#F99417] text-black w-full"><BiAddToQueue /></Link>
                                    </div>
                                    <button onClick={() => handleMakePremium(item)}
                                        className="btn bg-slate-100 border-x-4 border-[#F99417] text-black uppercase w-full py-2">{item.type}</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ViewBiodata;