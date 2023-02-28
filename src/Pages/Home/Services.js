import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://poultry-farm-services-server.vercel.app/limitedService')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className='my-5'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl my-10 font-bold text-yellow-600 text-center'>What We Offer!</h1>
                <div className='w-1/2 mx-auto'>
                    <h2 className='font-bold text-white text-center'>Our biggest strength in providing for customers may be our proactive nature.</h2>
                </div>

                {/* in order to design the service sending data in servicecard */}
                <div >

                    <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 '>
                        {
                            service.map(viewService => <ServiceCard
                                key={viewService.service_id}
                                viewService={viewService}
                            ></ServiceCard>)
                        }
                    </div>

                    <div className="flex justify-center">
                        <Link to='/allServices'><button className="btn btn-warning">More Service</button></Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;