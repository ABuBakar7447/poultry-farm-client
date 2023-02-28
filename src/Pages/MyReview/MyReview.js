import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Authprovider';
import useTitle from '../../hooks/useTitle';
import ShowUserRev from './ShowUserRev';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    useTitle('MyReview')

    const [userDetails, setUser] = useState([])
    console.log(userDetails)

    //collecting data base on user email
    useEffect(() => {
        fetch(`https://poultry-farm-services-server.vercel.app/userreview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user?.email])


    //handling delete button in order delete review
    const haldleDelete = id => {
        const proceed = window.confirm('Do you want to remove your comment?');
        if (proceed) {
            fetch(`https://poultry-farm-services-server.vercel.app/reviews/${id}`, {
                method: 'Delete'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('your comment deleted successfully')
                        const leftUserDet = userDetails.filter(del => del._id !== id);
                        setUser(leftUserDet)
                    }
                })
        }
    }


    //sending data to showuserRev in order to design the page
    return (
        <div className=''>
            {
                userDetails.length > 0 ?
                    <h2 className='text-center text-black text-2xl font-bold my-5'>Your Reviews total {userDetails.length}</h2>
                    :
                    <h2 className='text-center text-black text-2xl font-bold my-10'>No Reviews</h2>
            }
            {
                userDetails.map(details => <ShowUserRev key={details._id} details={details}
                    haldleDelete={haldleDelete}></ShowUserRev>)
            }
        </div>
    );
};

export default MyReview;