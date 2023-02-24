import React from 'react';
import { Link } from 'react-router-dom';

const Sec2 = () => {
    return (
        <div className='mt-72 lg:mt-16'>
            <div>
               
                <div className="hero h-[500px] border rounded mt-10" style={{ backgroundImage: `url("https://thumbs.dreamstime.com/b/poultry-farm-chicken-business-purpose-farming-meat-eggs-food-111218730.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl text-yellow-400 font-bold font-serif">Progressive Solutions</h1>
                            <p className="mb-5 text-xl lg:text-2xl font-serif">We are a market-leading organic farm that provides the best products <br/> to increase your everyday life's potential and energy.</p>
                            <div className='flex justify-center gap-5'>
                            <Link to='/service'><button className="btn bg-yellow-400 text-red-700 font-bold my-4">Book Service</button></Link>
                            <Link to='/service'><button className="btn  bg-yellow-400 text-red-700 font-bold my-4">Contact Us</button></Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sec2;