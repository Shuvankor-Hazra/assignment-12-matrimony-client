import { Helmet } from "react-helmet-async";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import LoadingSpinner from "../../LoadingSpinner";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

const ViewBiodata = () => {

    const axiosCommon = useAxiosCommon();

    const { data: biodata = [], isLoading, refetch } = useQuery({
        queryKey: ['bioData'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/bioData')
            console.log(data);
            return data;
        }
    });
    console.log(biodata);

    const handleDeleteUser = (bioData) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosCommon.delete(`/bioData/${bioData._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'top',
                                title: "Deleted!",
                                text: "Biodata has been deleted.",
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
                        <div className="flex gap-5 rounded-xl border-2 my-10">
                            <div className="w-1/3">
                                <img className="w-full rounded-s-xl" src={item.image} alt="user" />
                            </div>
                            <div className="w-full flex items-center justify-around py-3 text-xl font-semibold text-gray-800 text-poppins">
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
                                    <div className="flex justify-between">
                                        <button className="btn text-3xl bg-slate-100 border-x-4 border-[#F99417] text-black w-5/12"><BiEdit /></button>
                                        <button onClick={() => handleDeleteUser(item)} className="btn text-3xl bg-slate-100 border-x-4 border-[#F99417] text-black w-5/12"><MdDelete /></button>
                                    </div>
                                    <button className="btn bg-slate-100 border-x-4 border-[#F99417] text-black uppercase w-full">Make biodata to premium</button>
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