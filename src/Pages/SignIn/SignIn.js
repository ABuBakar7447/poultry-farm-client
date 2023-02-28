import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider';

import pic1 from '../../Picture/google.png'

const SignIn = () => {

    const { createUser, providerGoogleLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset('');

            })
            .catch(error => console.error(error));


    }

    const handleGoogle = () => {
        providerGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                            <form onSubmit={handleSignUp} className="card-body">
                                <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>


                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                                </div>
                            </form>
                            <div className='mx-auto mb-5'>
                                <button onClick={handleGoogle} className='btn'>
                                    Sign In Google
                                    <img src={pic1} alt="" className='w-5 h-5 ml-2' />
                                </button>
                            </div>



                            <p className='text-center'>Already have an account? <Link className='underline font-bold text-yellow-400' to='/login'>Log In.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;