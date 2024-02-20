import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimalIcon from '../../assets/animalicongreen.svg';;

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="border-b-2 py-4 fixed w-full top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img src={AnimalIcon} alt="Logo" className="h-14 mr-2"></img>
                            <h1 className="text-white text-4xl">Pet Wellness</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className={location.pathname === '/' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-base font-medium' : ' text-white bg-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'}>Profile</Link>
                                <Link to="/Wellness" className={location.pathname === '/Wellness' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-base font-medium' : 'text-white bg-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'}>Wellness</Link>
                                <Link to="/Login" className={location.pathname === '/Login' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-base font-medium' : 'text-white bg-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'}>Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;