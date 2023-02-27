import React from 'react';
import { FaUser } from 'react-icons/fa';

const DetailsReview = ({ usercomment }) => {
    const { _id, service_name, user_name, image_url, comment } = usercomment
    return (
        <div>
            <div>

                <div className='m-5' >
                    <div className='flex'>
                        {
                            image_url ? <img className='w-20 h-10' src={image_url} alt=''></img> : <FaUser className='w-20 h-10'></FaUser>
                        }
                        <div className='text-start'>
                            <p className='text-yellow-200 font-serif font-bold text-start'>{user_name}</p>

                            <div className='w-11/12 flex justify-start'>

                                <p className='font-bold text-rose-600 text-start'>comment</p>
                                <div className='font-bold text-start ml-2'>
                                    <p>{comment}</p>
                                </div>
                                {/* <p><span className=''>Comment:</span> <span className='font-bold text-start w-1/2'></span></p> */}
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default DetailsReview;