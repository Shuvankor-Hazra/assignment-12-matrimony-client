import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import weightJson from '../../../../public/weight.json'
import heightJson from '../../../../public/height.json'
import ageJson from '../../../../public/age.json'


const EditBiodata = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <>
            <div>
                <SectionTitle subHeading={'Add with us'} heading={'Create or Update Biodata'} />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='name'>Biodata Type(Gender)</label>
                            <select {...register("gender")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Biodata Type</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Name</label>
                            <input
                                type='text'
                                placeholder="Name"
                                {...register("name", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                        </div>

                        <div className="">
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Profile Image</label>
                            <div className="form-control w-full">
                                <input {...register('image', { required: true })}
                                    type="file"
                                    className="file-input file-input-bordered w-full" />
                            </div>
                        </div>

                        <div className="">
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Date of birth</label>
                            <div className="form-control w-full">
                                <input {...register("name", { required: true })}
                                    type="date"
                                    className='input input-bordered w-full focus:outline-none' />
                            </div>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Height</label>
                            <select {...register("height")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Height</option>
                                {heightJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'>Weight</label>
                            <select {...register("Weight")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Weight</option>
                                {weightJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='age'>Age</label>
                            <select {...register("age")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Age</option>
                                {ageJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='Occupation'>Occupation</label>
                            <select {...register("occupation")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Occupation</option>
                                <option value="student">Student</option>
                                <option value="job">Job</option>
                                <option value="houseWife">Housewife</option>
                                <option value="business">Business</option>
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='Occupation'>Race</label>
                            <select {...register("race")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Race</option>
                                <option value="bengali">Bengali</option>
                                <option value="chakma">Chakma</option>
                                <option value="rohingya">Rohingya</option>
                                <option value="garo">Garo</option>
                                <option value="saotal">Saotal</option>
                                <option value="marmah">Marmah</option>
                                <option value="khasi">Khasi</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='fathersName'>Fathers name</label>
                            <input
                                type='text'
                                placeholder="Fathers Name"
                                {...register("fathersName", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='mothersName'>Mothers Name</label>
                            <input
                                type='text'
                                placeholder="Mothers Name"
                                {...register("mothersName", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='permanentDivision'>Permanent Division name</label>
                            <select {...register("permanentDivision")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Permanent Division name</option>
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

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='permanentDivision'>Present Division name</label>
                            <select {...register("presentDivision")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Present Division name</option>
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

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='expectedPartnerAge'>Expected Partner Age</label>
                            <select {...register("expectedPartnerAge")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Expected Partner Age</option>
                                {ageJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='expectedPartnerHeight'>Expected Partner Height</label>
                            <select {...register("expectedPartnerHeight")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Expected Partner Height</option>
                                {heightJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='expectedPartnerWeight'>Expected Partner Weight</label>
                            <select {...register("expectedPartnerWeight")} className="select select-bordered w-full focus:outline-none">
                                <option disabled selected>Expected Partner Weight</option>
                                {weightJson.map((item, idx) => <option key={idx} value={item.value}>{item.text}</option>)}
                            </select>
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='email'>Contact Email</label>
                            <input
                                type='email'
                                placeholder="Contact Email"
                                {...register("email", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                        </div>

                        <div className=''>
                            <label className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='mobileNumber'>Mobile Number</label>
                            <input
                                type='number'
                                placeholder="Mobile Number"
                                {...register("mobileNumber", { required: true })}
                                className='input input-bordered w-full focus:outline-none'
                            />
                        </div>

                    </div>
                    <div className="flex justify-center mt-5">
                        <input className="btn " type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditBiodata;