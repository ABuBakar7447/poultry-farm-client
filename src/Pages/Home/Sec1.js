import React from 'react';
import logo1 from '../../Picture/poutry.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import pic1 from '../../Picture/images.png'
import pic2 from '../../Picture/images (1).png'

const Sec1 = () => {
    return (
        <div className='my-10'>
            <h1 className='lg:text-5xl md:text-3xl text-3xl font-bold text-white text-center mt-16 mb-10'>What They Are <br/> Saying</h1>
            

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-5">
                <div className="...">
                    <div>
                        <img src={logo1} alt="" className="shadow-2xl w-full h-[376px]" />

                    </div>
                </div>

                <div className="... h-[224px] bg-green-700">
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
                            <div className='p-7 bg-green-700'>
                                <div className='p-5'>
                                    <img src={pic1} alt="" className='w-16 h-16 border rounded-full mx-auto' />
                                </div>
                                <div className='text-center p-4'>
                                    <p className='text-2xl text-yellow-400 font-bold font-serif'>
                                        Mr. Akmal Akbar
                                    </p>
                                    <p className='p-4 text-white font-bold'>The staff is extremely helpful with cooking tips based on the type of chicken i.e. young verses old. The turkey burgers are excellent as a result I will not eat anything but a Goffle Poultry Farm turkey burger. One gets spoiled. The roasted chickens are healthy and delicious choice for dinner when in a rush.</p>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='p-7 bg-green-700'>
                                <div className='p-5'>
                                    <img src={pic2} alt="" className='w-16 h-16 border rounded-full mx-auto' />
                                </div>
                                <div className='text-center p-4'>
                                    <p className='text-2xl text-yellow-400 font-bold font-serif'>
                                        Mrs. Sahara Khatun
                                    </p>
                                    <p className='p-4 text-white font-bold'>The staff is extremely helpful with cooking tips based on the type of chicken i.e. young verses old. The turkey burgers are excellent as a result I will not eat anything but a Goffle Poultry Farm turkey burger. One gets spoiled. The roasted chickens are healthy and delicious choice for dinner when in a rush.</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Sec1;