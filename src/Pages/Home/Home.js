import React from 'react';
import Banner from './Banner';



import Sec1 from './Sec1';
import Sec2 from './Sec2';

const Home = () => {
    return (
        <div className='bg-blue bg-black'>
            

            <Banner></Banner>
            <Sec1></Sec1>
            <Sec2></Sec2>
        </div>
    );
};

export default Home;