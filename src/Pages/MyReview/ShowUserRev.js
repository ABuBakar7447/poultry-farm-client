import React from 'react';
import { FaUser, FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowUserRev = ({ details, haldleDelete }) => {
    const { _id, service_name, user_name, image_url, comment } = details

    //design of myreview page
    return (
        <div>
            <div className='mx-auto w-11/12 lg:w-1/2 my-5 border-2 border-yellow-600 rounded-xl p-5'>
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
                                    <div className='font-bold text-white text-start ml-2'>
                                        <p>{comment}</p>
                                    </div>
                                </div>
                                
                                {/* <p><span className=''>Comment:</span> <span className='font-bold text-start w-1/2'></span></p> */}
                            </div>
                        </div>

                        <div className='flex'>

                            <div className='flex btn btn-outline btn-warning w-32 my-5' onClick={() => haldleDelete(_id)}><span>Delete</span><span className='p-1.5 pl-1'><FaTrash></FaTrash></span></div>

                            {/* if user wants to edit his review it will take to the update page     */}

                            <Link to={`/update/${_id}`} className='flex btn btn-outline btn-warning w-32 my-5 ml-3 mr-2'><span>Edit</span><span className='p-1.5 pl-1'><FaEdit></FaEdit> </span></Link>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default ShowUserRev;