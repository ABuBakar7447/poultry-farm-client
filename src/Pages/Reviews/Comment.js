import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comment = ({ _id, service_name }) => {
    const { user } = useContext(AuthContext)


    //handling comment section if user wants to add comment

    const handleComment = event => {

        const form = event.target;
        const user_name = form.user_name.value;
        const email = user?.email || 'unregister';
        const comment = form.comment.value;
        const image_url = form.image_url.value;
        const rating = form.rating.value;

        const review = {

            service_name: service_name,
            service_id: _id,
            user_name: user_name,
            image_url: image_url,
            rating: rating,
            email: email,
            comment: comment
        }


        //sending data to server to add comment 

        fetch('https://poultry-farm-services-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Thanks for your comment')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    const notify = () => toast("Comment added successfully");
    return (
        <div>
            <div>

                <form onSubmit={handleComment} className='w-3/5 mx-auto my-5'>
                    <div className='grid grid-cols-1'>
                        <input type="text" name='user_name' placeholder="Your name" className="input input-bordered my-2" required />

                        <input type="text" name='image_url' placeholder="Your Picture link" className="input input-bordered my-2" />

                        <input type="text" name='rating' placeholder="Your rating out of 5" className="input input-bordered my-2" required />

                        <input type="text" name='email' placeholder="" className="input input-bordered my-2" defaultValue={user?.email} readOnly />

                        <input type="text" name='comment' placeholder="Please Comment Here" className="input input-bordered h-20 my-2" required />

                    </div>
                    <div>
                        <input onClick={notify} className='btn btn-outline btn-warning' type="submit" value="Submit" />
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comment;