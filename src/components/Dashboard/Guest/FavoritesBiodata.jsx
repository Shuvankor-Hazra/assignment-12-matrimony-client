import { Helmet } from "react-helmet-async";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import MyFavoriteBiodataTableRow from "../../TableRows/MyFavoriteBiodataTableRow";
import useAuth from "../../../hooks/useAuth";


const FavoritesBiodata = () => {
    const axiosCommon = useAxiosCommon();
    const { user } = useAuth();

    const { data,refetch } = useQuery({
        queryKey: ['favoritesBiodata'],
        queryFn: async () => {
            const res = await axiosCommon.get(`/favoritesBiodata/${user.email}`)
            return res.data;
        }
    })
    console.log(data);

    return (
        <div>
            <Helmet title="Shaddi.com | Favorites Biodata" />
            <SectionTitle heading={'Favorites Biodata'} subHeading={'Fund some one'} />
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Biodata Id
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Permanent Address
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Occupation
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {data?.map(item => <MyFavoriteBiodataTableRow key={item._id} item={item} refetch={refetch}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoritesBiodata;