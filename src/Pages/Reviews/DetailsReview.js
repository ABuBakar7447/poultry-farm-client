import React from 'react';
import { FaUser } from 'react-icons/fa';

const DetailsReview = ({ usercomment }) => {
    const { _id, service_name, user_name, image_url, comment } = usercomment
    return (
        <div>
            <div>

                <div className='m-5' >

                    <div className='mx-auto w-full lg:w-9/12 my-5 border-2 border-yellow-600 rounded-xl p-5'>
                        <div className='flex'>
                            {
                                image_url ? <img className='w-20 h-12 rounded' src={image_url} alt=''></img> : <FaUser className='w-20 h-10'></FaUser>
                            }
                            <div>
                                <div className='text-start ml-2 w-full'>
                                    <p className='text-yellow-200 font-serif text-2xl font-bold text-start'>{user_name}</p>

                                    <div className='w-full'>

                                        <div className='flex justify-start'>
                                            <p className='font-bold text-yellow-200 text-start'>Service :</p>
                                            <div className='font-bold text-white text-start ml-2'>
                                                <p>{service_name}</p>
                                            </div>
                                        </div>


                                        <div className='flex justify-start'>
                                            <p className='font-bold text-yellow-200 text-start'>Comment :</p>
                                            <div className='font-bold text-white text-start ml-1'>
                                                <p>{comment}</p>
                                            </div>
                                        </div>

                                        {/* <p><span className=''>Comment:</span> <span className='font-bold text-start w-1/2'></span></p> */}
                                    </div>
                                </div>



                            </div>


                        </div>

                    </div>


                </div>





            </div>
        </div>
    );
};

export default DetailsReview;