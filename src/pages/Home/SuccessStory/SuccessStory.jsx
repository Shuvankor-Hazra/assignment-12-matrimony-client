import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const SuccessStory = () => {
    const axiosCommon = useAxiosCommon();

    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['successStory'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/successStory')
            console.log(data);
            return data;
        }
    });

    const { data: successStory = [] } = useQuery({
        queryKey: ['successStory'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/successStory')
            console.log(data);
            return data;
        }
    });
    console.log(successStory);

    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <SectionTitle heading={'Success Story'} subHeading={'What our client say'} />
            <div>
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center justify-center space-y-8 my-10 mx-20 py-14 border-2 rounded-xl">
                                <div className="w-1/3 h-72 mask mask-hexagon-2"><img className="w-full" src={review.image} alt="" /></div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.reviewStar}
                                    readOnly
                                />
                                <p className="text-xl text-center">{review.successStory}</p>
                                <h2 className="text-3xl text-orange-400">{review.marriageDate}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default SuccessStory;