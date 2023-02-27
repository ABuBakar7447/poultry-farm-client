import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/ServiceCard';

const AllService = () => {

    const [service, setService] = useState([]);
    const [spinner, setSpinner] = useState(true)
    // useTitle('Service')

    //getting all service from server

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => {
                setService(data);
                setSpinner(false);
            })
    }, []);

    if (spinner) {
        return <div className='flex justify-center my-10'><button className="btn btn-square w-32 h-20 loading"></button></div>
    }


    return (
        <div>
            <div className='my-5'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold text-yellow-600 text-center'>Choose The Service</h1>
                <h2 className='font-bold text-black-600 text-center'>Will try my best to solve your problem</h2>


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



                </div>
            </div>
        </div>
    );
};

export default AllService;