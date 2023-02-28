import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    
    


    //adding service

    const handleService = event => {

        const form = event.target;

        const service_name = form.service_name.value;
        const service_id = form.service_id.value;
        const description = form.description.value;
        const image_url = form.image_url.value;
        const rating = form.rating.value;
        const price = form.price.value;

        const review = {

            service_name: service_name,
            service_id: service_id,
            image_url: image_url,
            rating: rating,
            price: price,
            description: description,
        }

        //sending service data through post

        fetch('http://localhost:5000/services', {
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
                    alert('Thanks for adding a service')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    const notify = () => toast("Comment added successfully");


    return (
        <div>
            <div>
            <form onSubmit={handleService} className='w-3/5 mx-auto my-5'>
                <div className='grid grid-cols-1'>
                    <input type="text" name='service_name' placeholder="Service name" className="input input-bordered my-2" required />

                    <input type="text" name='service_id' placeholder="Service Id" className="input input-bordered my-2" required />

                    <input type="text" name='image_url' placeholder="Your Picture link" className="input input-bordered my-2" required />

                    <input type="text" name='rating' placeholder="Your rating out of 5" className="input input-bordered my-2" required />

                    <input type="text" name='price' placeholder="Give Price Amount" className="input input-bordered my-2" required />



                    <input type="text" name='description' placeholder="Please Give Description" className="input input-bordered h-20 my-2" required />

                </div>
                <div>
                <input onClick={notify} className='btn' type="submit" value="Submit" />
                <ToastContainer />
                </div>
            </form>
        </div>
    );
        </div>
    );
};

export default AddService;