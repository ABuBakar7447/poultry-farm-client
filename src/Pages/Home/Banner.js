import React from 'react';
import './Banner.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import pic1 from '../../Picture/banner.jpg'
import pic2 from '../../Picture/banner1.jpg'
import { Link } from 'react-router-dom';

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

                <SwiperSlide>
                    <div className="hero h-[500px] md:h-64">
                        <img src={pic1} alt='' className='w-full h-[500px]' />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-3/4">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl sm:text-3xl font-bold text-white">You can accomplish your poultry farm<br /> Goals with our help.</h1>
                                <p className="mb-5 text-xl font-bold text-white">Through our service offerings, we assist our customers in achieving the highest possible results in their poultry company.</p>
                                <Link to='/'>
                                    <button className="btn btn-primary">Get Started</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-36 lg:h-[500px] md:h-64">
                        <img src={pic2} alt='' className='w-full h-[500px]' />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-3/4">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl sm:text-3xl font-bold text-white">You can accomplish your poultry farm<br /> Goals with our help.</h1>
                                <p className="mb-5 text-xl font-bold text-white">Through our service offerings, we assist our customers in achieving the highest possible results in their poultry company.</p>
                                <Link to='/'>
                                    <button className="btn btn-primary">Get Started</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;