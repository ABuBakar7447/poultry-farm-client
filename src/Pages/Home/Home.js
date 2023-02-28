import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner';



import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Services from './Services';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-blue'>
            

            <Banner></Banner>
            <Services></Services>
            <Sec1></Sec1>
            <Sec2></Sec2>
        </div>
    );
};

export default Home;