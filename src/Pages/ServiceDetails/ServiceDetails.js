import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    // useTitle('ServiceDetails')
    // const {user} = useContext(AuthContext)
    const {_id, service_name, image_url, description, rating, price} = useLoaderData()

    return (
        <div>
            <div>
            <h1 className='lg:text-4xl md:text-3xl text-3xl font-bold my-10 text-yellow-600 text-center'>{service_name}</h1>
            <div className="card card-compact bg-black shadow-xl mx-auto w-11/12 h-[800px] lg:w-3/4 mb-5 text-white text-start">
                <PhotoProvider>
                    <PhotoView src={image_url}>
                    <figure><img  src={image_url} alt="Shoes" className='w-11/12 h-[450px] mb-10 rounded' /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    
                    <h3 className='font-bold'>Price: ${price}</h3>
                    <h3 className='font-bold'>Rating: {rating}</h3>
                    <p>{description}</p>
                    
                </div>
            </div>

{/* sending data to review part in order gain all review based on matched service_id */}
            <div>
                <Reviews _id={_id}></Reviews>
            </div>
            
            <p className='font-bold text-center text-2xl text-rose-600  my-10'>Wants to comment?</p>
            
{/* using optional chaining if user logged in then show comment form otherwise show login option */}
            {/* <div >
            {
                user?.email?
                <div>

                    <Comment _id = {_id} service_name={service_name}></Comment>

                </div>
                :
                <p className='text-center mb-6'>Please login first before comment. <Link to='/login' className='text-info underline'>Login</Link>
                </p>
            }
                
            </div> */}

            
            
        </div>
        </div>
    );
};

export default ServiceDetails;