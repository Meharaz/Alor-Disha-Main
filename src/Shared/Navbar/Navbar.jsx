import React from 'react';

const Navbar = () => {
    const navOptions = <>
        <li><a className="hover:bg-yellow-500  transition-colors duration-300" >Home</a></li>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300" >Services</a></li>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300" >Events</a></li>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300" >Blog</a></li>
        <li><a className="hover:bg-yellow-500 transition-colors duration-300" >Contact</a></li>
    </>
    return (
        <div className='fixed top-0 w-full z-50'>
            <div className="navbar bg-black text-white font-serif ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-outline normal-case text-xl">Alor<span className='text-yellow-500'>D</span>isha</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold ">
                       {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Donation</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;