import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../Picture/pngtree-rooster-logo1.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar h-24 bg-yellow-400 font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allServices'>Services</Link></li>
                            <li><Link to='/myreview'>My Review</Link></li>
                            <li><Link to='/login'>LogIn</Link></li>
                            <li><Link to='/signin'>SignIn</Link></li>
                            
                        </ul>
                    </div>
                    <div className='flex justify-center align-middle'>
                        <img src={pic1} alt="" className='w-22 h-12'/>
                    <Link to='/' className="text-xl text-center py-3">Better Life Farms</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allServices'>Services</Link></li>
                        <li><Link to='/myreview'>My Review</Link></li>
                        <li><Link to='/login'>LogIn</Link></li>
                        <li><Link to='/signin'>SignIn</Link></li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;