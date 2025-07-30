import React from 'react';
import weblogo from "../../assets/logo.svg";

const Navbar = () => {
    const navOptions = <>
        <li><a href='http://localhost:5173/' className="hover:bg-yellow-500 transition-colors duration-300" >Home</a></li>
        <li><a href='http://localhost:5173/Services' className="hover:bg-yellow-500 transition-colors duration-300" >Services</a></li>
        <li><a href='http://localhost:5173/Events' className="hover:bg-yellow-500 transition-colors duration-300" >Events</a></li>
        <li><a href='http://localhost:5173/Blog' className="hover:bg-yellow-500 transition-colors duration-300" >Blog</a></li>
        <li><a href='http://localhost:5173/Contact' className="hover:bg-yellow-500 transition-colors duration-300" >Contact</a></li>
        <li><a href='http://localhost:5173/Blood' className="hover:bg-yellow-500 transition-colors duration-300" >Blood Doner</a></li>
    </>;

    return (
        <div className='fixed top-0 w-full z-50'>
            <div className="navbar bg-black text-white font-serif">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    {/* Logo + Brand Name */}
                    <a href="/" className="flex items-center h-16">
                        <img src={weblogo} alt="Logo" className="w-auto h-16 " />

                    
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='http://localhost:5173/donation' className="btn">Donation</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
