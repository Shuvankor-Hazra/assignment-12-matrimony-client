import { Helmet } from "react-helmet-async";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const ViewBiodata = () => {
    const axiosCommon = useAxiosCommon();

    const { data: biodata = [], isLoading } = useQuery({
        queryKey: ['bioData'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/bioData')
            console.log(data);
            return data;
        }
    });

    console.log(biodata);
    if (isLoading) return <div className="flex justify-center min-h-[500px]">
        <span className="loading loading-infinity w-16 text-[#BB8506]" />
    </div>

    return (
        <div>
            <Helmet title="Shaddi.com | View Biodata" />
            <SectionTitle heading={'View your biodata'} subHeading={'Your Creation'} />

            <div className="">
                {
                    biodata.map(item => <div key={item._id} className="flex gap-5 rounded-xl border-2 my-10">
                        <div className="w-1/4">
                            <img className="w-full rounded-s-xl" src={item.image} alt="Movie" />
                        </div>
                        <div className="py-2 text-lg text-gray-800 text-poppins">
                            <p className="capitalize"><span className="font-semibold text-xl font-playFair">Gender:</span> {item.gender}</p>
                            <p><span className="font-semibold text-xl font-playFair">Id:</span> {item._id}</p>
                            <p><span className="font-semibold text-xl font-playFair">Age:</span> {item.age}</p>
                            <p><span className="font-semibold text-xl font-playFair">Division:</span> {item.PermanentDivisionName}</p>
                            <p><span className="font-semibold text-xl font-playFair">Occupation:</span> {item.occupation}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ViewBiodata;