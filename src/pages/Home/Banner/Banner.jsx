import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import banner3 from '../../../assets/banner3.jpg';

const Banner = () => {
    return (
        <div>
            <img className="w-full max-h-dvh" src={banner3} alt="banner" />
        </div>
    );
};

export default Banner;