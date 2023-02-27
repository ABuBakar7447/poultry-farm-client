import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({viewService}) => {

    const {_id, service_name, price, image_url, rating, description} = viewService
    return (
        <div>
            <div>
                <div className="card card-compact text-start h-[500px] bg-black text-neutral-content shadow-xl p-2">
                    <PhotoProvider>
                        <PhotoView src={image_url}>
                            <figure><img className='w-11/12 h-[250px] rounded pt-2' src={image_url} alt="Shoes" /></figure>
                        </PhotoView>
                    </PhotoProvider>

                    <div className="card-body">
                        <h2 className="card-title text-red-600 font-bold">{service_name}</h2>
                        <h3 className='font-bold'>Price: ${price}</h3>
                        <h3 className='font-bold'>Rating: {rating}</h3>
                        <p>{description.substring(0, 100)}
                            <Link className='underline text-info' to={`/services/${_id}`}>View More</Link>
                        </p>
                        <div className="card-actions justify-end">
                            <Link to={`/services/${_id}`}><button className="btn btn-primary btn-sm">Hire Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;