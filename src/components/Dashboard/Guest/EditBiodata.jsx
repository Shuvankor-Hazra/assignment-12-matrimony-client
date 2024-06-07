import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import weightJson from '../../../../public/weight.json'
import heightJson from '../../../../public/height.json'
import ageJson from '../../../../public/age.json'
import { Helmet } from "react-helmet-async";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditBiodata = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosCommon = useAxiosCommon();
    const item = useLoaderData();
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        // console.log(data)
        // image upload to imgBB and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosCommon.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const bioData = {
                gender: data.gender,
                name: data.name,
                image: res.data.data.display_url,
                dateOfBirth: data.dateOfBirth,
                height: data.height,
                weight: data.weight,
                age: data.age,
                occupation: data.occupation,
                race: data.race,
                fathersName: data.fathersName,
                mothersName: data.mothersName,
                permanentDivision: data.permanentDivision,
                presentDivision: data.presentDivision,
                expectedPartnerAge: data.expectedPartnerAge,
                expectedPartnerHeight: data.expectedPartnerHeight,
                expectedPartnerWeight: data.expectedPartnerWeight,
                email: data.email,
                mobileNumber: data.mobileNumber,
            }

            // 
            const bioDataRes = await axiosCommon.post('/bioData', bioData);
            console.log(bioDataRes.data);
            if (bioDataRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${data.name} biodata is added to server`,
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/dashboard/view-biodata')
            }
        }
    };
    return (
        <>
            <Helmet title="Shaddi.com | Edit Biodata" />
            <div>
                <SectionTitle subHeading={'Add with us'} heading={'Create or Update Biodata'} />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='gender'>Biodata Type(Gender)</label>
                            <select {...register("gender", { required: true })}
                                defaultValue={item?.gender || ''}
                                className="select select-bordered w-full focus:outline-none">
                                <option disabled value={''}>Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                            {errors.gender && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Name</label>
                            <input
                                defaultValue={item?.name}
                                type='text'
                                placeholder="Name"
                                {...register("name", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                            {errors.name && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className="">
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Profile Image</label>
                            <div className="form-control w-full">
                                <input {...register('image', { required: true })}
                                    // defaultValue={}
                                    type="file"
                                    className="file-input file-input-bordered w-full" />
                            </div>
                            {errors.image && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className="">
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Date of birth</label>
                            <div className="form-control w-full">
                                <input {...register("dateOfBirth", { required: true })}
                                    defaultValue={item?.dateOfBirth}
                                    type="date"
                                    className='input input-bordered w-full focus:outline-none' />
                            </div>
                            {errors.dateOfBirth && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Height</label>
                            <select {...register("height")} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.height || ''}
                                <option disabled value={''}>Height</option>
                                {heightJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                            {errors.height && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Weight</label>
                            <select {...register("weight")} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.weight || ''}
                                <option disabled value={''}>Weight</option>
                                {weightJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                            {errors.weight && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='age'>Age</label>
                            <select {...register("age")}
                                defaultValue={item?.age || ''}
                                className="select select-bordered w-full focus:outline-none">
                                <option disabled value={''}>Age</option>
                                {ageJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                            {errors.age && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='Occupation'>Occupation</label>
                            <select {...register("occupation")} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.occupation || ''}
                                <option disabled value={''}>Occupation</option>
                                <option value="student">Student</option>
                                <option value="job">Job</option>
                                <option value="houseWife">Housewife</option>
                                <option value="business">Business</option>
                            </select>
                            {errors.occupation && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='race'>Race</label>
                            <select {...register("race")} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.race || ''}
                                <option disabled value={''}>Race</option>
                                <option value="bengali">Bengali</option>
                                <option value="chakma">Chakma</option>
                                <option value="rohingya">Rohingya</option>
                                <option value="garo">Garo</option>
                                <option value="saotal">Saotal</option>
                                <option value="marmah">Marmah</option>
                                <option value="khasi">Khasi</option>
                                <option value="others">Others</option>
                            </select>
                            {errors.race && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='fathersName'>Fathers name</label>
                            <input
                                defaultValue={item?.fathersName}
                                type='text'
                                placeholder="Fathers Name"
                                {...register("fathersName", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                            {errors.fathersName && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='mothersName'>Mothers Name</label>
                            <input
                                defaultValue={item?.mothersName}
                                type='text'
                                placeholder="Mothers Name"
                                {...register("mothersName", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                            {errors.mothersName && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='permanentDivision'>Permanent Division name</label>
                            <select {...register("permanentDivision")} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.permanentDivision || ''}
                                <option disabled value={''}>Permanent Division name</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="khulna">Khulna</option>
                                <option value="rangpur">Rangpur</option>
                                <option value="barisal">Barisal</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="sylhet">Sylhet</option>
                            </select>
                            {errors.permanentDivision && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='presentDivision'>Present Division name</label>
                            <select {...register("presentDivision")} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.presentDivision || ''}
                                <option disabled value={''}>Present Division name</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="khulna">Khulna</option>
                                <option value="rangpur">Rangpur</option>
                                <option value="barisal">Barisal</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="sylhet">Sylhet</option>
                            </select>
                            {errors.presentDivision && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='expectedPartnerAge'>Expected Partner Age</label>
                            <select {...register("expectedPartnerAge")} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.expectedPartnerAge || ''}
                                <option disabled value={''}>Expected Partner Age</option>
                                {ageJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                            {errors.expectedPartnerAge && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='expectedPartnerHeight'>Expected Partner Height</label>
                            <select {...register("expectedPartnerHeight")} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.expectedPartnerHeight || ''}
                                <option disabled value={''}>Expected Partner Height</option>
                                {heightJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                            {errors.expectedPartnerHeight && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='expectedPartnerWeight'>Expected Partner Weight</label>
                            <select {...register("expectedPartnerWeight", { required: true })} className="select select-bordered w-full focus:outline-none">
                                defaultValue={item?.expectedPartnerWeight || ''}
                                <option disabled value={''}>Expected Partner Weight</option>
                                {weightJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                            {errors.expectedPartnerWeight && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='email'>Contact Email</label>
                            <input
                                defaultValue={user.email}
                                readOnly
                                type='email'
                                placeholder="Contact Email"
                                {...register("email", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                            {errors.email && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                        <div className=''>
                            <label className='block pb-2 text-sm font-medium text-gray-600 '
                                htmlFor='mobileNumber'>Mobile Number</label>
                            <input
                                defaultValue={item?.mobileNumber}
                                type='tel'
                                required
                                placeholder="Mobile Number"
                                {...register("mobileNumber", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                            {errors.mobileNumber && <span className="text-warning font-medium">Name is required</span>}
                        </div>

                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="btn w-full" type="submit">Save And Publish Now</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditBiodata;