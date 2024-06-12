import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ageJson from '../../../public/age.json';
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState } from "react";


const AllBiodata = () => {
    const axiosCommon = useAxiosCommon();

    const [gender, setGender] = useState('default');
    const [minAge, setMinAge] = useState('default');
    const [maxAge, setMaxAge] = useState('default');
    const [division, setDivision] = useState('default');

    const { data: biodata = [] } = useQuery({
        queryKey: ['bioData'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/bioData')
            return data;
        }
    });

    const filterBiodata = () => {
        return biodata?.filter(item => {
            const age = parseInt(item.age.split(' ')[0])
            return (gender === 'default' || item.gender === gender) &&
                (minAge === 'default' || age >= parseInt(minAge)) &&
                (maxAge === 'default' || age <= parseInt(maxAge)) &&
                (division === 'default' || item.permanentDivision === division);
        });
    };

    return (
        <>
            <Helmet title="Shaddi.com | All Biodata" />
            <div className="pt-36 max-w-screen-xl mx-auto">
                <SectionTitle heading={'All Biodatas'} subHeading={'Find Your Soulmate'} />
                <div className="lg:flex gap-5">
                    <div className="lg:w-3/12 border rounded-xl">
                        <h2 className="bg-gray-200 p-5 text-2xl font-medium  rounded-t-xl text-center">Find special someone</h2>
                        <div className="p-5">
                            <div className='my-3'>
                                <label className='block ms-2 mb-2 text-sm font-medium text-gray-600'
                                    htmlFor='gender'>I{"'"}m looking for a</label>
                                <select
                                    defaultValue={'default'}
                                    className="select select-bordered w-full focus:outline-none"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >

                                    <option disabled value={'default'}>Gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </div>

                            <div>
                                <label className='block ms-2 mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='age'>Age (in Years)</label>

                                <div className="flex items-center justify-between">
                                    <select
                                        defaultValue={'default'}
                                        className="select select-bordered w-2/5 focus:outline-none"
                                        value={minAge}
                                        onChange={(e) => setMinAge(e.target.value)}
                                    >
                                        <option disabled value={'default'}>Min Age</option>
                                        {ageJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                                    </select>
                                    <span className="text-xl font-medium">to</span>
                                    <select
                                        defaultValue={'default'}
                                        className="select select-bordered w-2/5 focus:outline-none"
                                        value={maxAge}
                                        onChange={(e) => setMaxAge(e.target.value)}
                                    >
                                        <option disabled value={'default'}>Max Age</option>
                                        {ageJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className='my-3'>
                                <label className='block ms-2 mb-2 text-sm font-medium text-gray-600'
                                    htmlFor='gender'>Division</label>
                                <select
                                    defaultValue={'default'}
                                    className="select select-bordered w-full focus:outline-none"
                                    value={division}
                                    onChange={(e) => setDivision(e.target.value)}
                                >
                                    <option disabled value={'default'}>Division</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chittagong">Chittagong</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="rangpur">Rangpur</option>
                                    <option value="barisal">Barisal</option>
                                    <option value="mymensingh">Mymensingh</option>
                                    <option value="sylhet">Sylhet</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-9/12 border rounded-xl">
                        <h2 className="bg-gray-200 p-5 text-2xl font-medium rounded-t-xl text-center">All Bride & Groom</h2>
                        <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {filterBiodata().map(item => <div key={item._id}>
                                <div className="bg-base-100 shadow-xl rounded-xl">
                                    <div className="">
                                        <img src={item.image} className="h-72 w-full rounded-t-xl" />
                                    </div>
                                    <div className="flex flex-col p-10 space-y-3 text-xl">
                                        <h3 className="">Biodata Id: <span className="font-poppins font-medium">{item.bioDataId}</span></h3>
                                        <h3 className="capitalize">Type: <span className="font-poppins font-medium">{item.gender}</span></h3>
                                        <h3 className="capitalize">Division: <span className="font-poppins font-medium">{item.permanentDivision}</span></h3>
                                        <h3 className="capitalize">Occupation: <span className="font-poppins font-medium">{item.occupation}</span></h3>
                                        <div className="">
                                            <Link to={`/details/${item._id}`} className="btn bg-gray-500 border border-b-4 border-[#F99417] text-white uppercase">View Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AllBiodata;