import React from 'react';

const Navbar = () => {
    const navOptions = <>
        <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Events</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
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