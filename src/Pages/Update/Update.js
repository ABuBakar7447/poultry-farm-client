import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';
import useTitle from '../../hooks/useTitle';

const Update = () => {
    useTitle('Update Details')

    const { user } = useContext(AuthContext)
    const editDetails = useLoaderData()
    console.log(editDetails)
    const { service_name, _id, service_id } = editDetails
    console.log(service_name, service_id)

    const handleEdit = event => {
        event.preventDefault()

        const form = event.target;
        const user_name = form.user_name.value;
        const email = user?.email || 'unregister';
        const comment = form.comment.value;
        const image_url = form.image_url.value;
        const rating = form.rating.value;

        const review = {

            service_name: service_name,
            service_id: service_id,
            user_name: user_name,
            image_url: image_url,
            rating: rating,
            email: email,
            comment: comment
        }
        const proceed = window.confirm('Do you want to update your comment?');

        //sending edited date to the server
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Updated');


                    }

                })
        }

    }


    return (
        <div>
             <div>
            <form onSubmit={handleEdit}>
                <div className='grid grid-cols-1 w-3/5 mx-auto my-5'>
                    <input type="text" name='user_name' placeholder="Your name" defaultValue={editDetails.user_name} className="input input-bordered my-2" required />

                    <input type="text" name='image_url' placeholder="Your Picture link" defaultValue={editDetails.image_url} className="input input-bordered my-2" />

                    <input type="text" name='rating' placeholder="Your rating out of 5" defaultValue={editDetails.rating} className="input input-bordered my-2" required />

                    <input type="text" name='email' placeholder="" className="input input-bordered my-2" defaultValue={editDetails.email} readOnly />

                    <input type="text" name='comment' placeholder="Please Comment Here" defaultValue={editDetails.comment} className="input input-bordered h-20 my-2" required />

                    <input className='btn w-1/4' type="submit" value="Submit" />
                </div>


            </form>
        </div>
        </div>
    );
};

export default Update;