import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import pic1 from '../../Picture/banner.jpg'
import pic2 from '../../Picture/banner1.jpg'

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={pic1} alt='' className='w-full h-[500px]' /></SwiperSlide>
                <SwiperSlide><img src={pic2} alt='' className='w-full h-[500px]' /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;