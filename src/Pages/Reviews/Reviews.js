import React, { useEffect, useState } from 'react';
import DetailsReview from './DetailsReview';

const Reviews = ({ _id }) => {
    const [commet, setCommet] = useState([])

    //collecting same service data from review section database
    useEffect(() => {
        fetch(`https://poultry-farm-services-server.vercel.app/reviews?service_id=${_id}`)
            .then(res => res.json())
            .then(data => setCommet(data))
    }, [_id])
    return (
        <div>
            <div>
                {
                    commet.length > 0 ?
                        <h1 className='lg:text-4xl md:text-3xl text-3xl font-bold my-10 text-yellow-600 text-center'>User Review</h1>
                        :
                        <p className='text-center text-yellow-600  font-bold underline underline-offset-4'> No Comment yet.Wants to add comment?</p>
                }

                <div>
                    {/* sending data to DetailsReview in order to show all review based on serviece */}
                    {
                        commet.map(usercomment => <DetailsReview key={usercomment._id} usercomment={usercomment}></DetailsReview>)
                    }
                </div>



            </div>
        </div>
    );
};

export default Reviews;