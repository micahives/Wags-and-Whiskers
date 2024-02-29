import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import Auth from '../../utils/auth';

const NavLinks = ({ isOpen }) => {
    return (
        <>
            <NavLink to="/Profile" className={`mr-24 ${isOpen ? '' : 'bg-dark-background border border-gray-400 rounded-full px-4 py-1'}`} >Profile</NavLink>
            {/* <NavLink to="/Wellness" className={`mr-8 ${isOpen ? '' : 'border border-gray-400 rounded-full px-4 py-1'}`}>Wellness</NavLink> */}
            <NavLink to="/" onClick={Auth.logout} className={`mr-8 ${isOpen ? '' : 'border border-gray-400 rounded-full px-4 py-1'}`}>Logout</NavLink>
        </>
    )
};

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    // Listen for window resize event
    useEffect(() => {
        const handleResize = () => {
            const smallScreen = window.innerWidth < 768;
            setIsSmallScreen(smallScreen);
            if (!smallScreen) {
                setIsOpen(false); // Close menu when screen size exceeds small screen threshold
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className="w-1/3 flex justify-end">
                <div className='hidden w-full md:flex'>
                    <NavLinks isOpen={isOpen} />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar} className='mt-4 mr-4'>{isOpen ? <X size={36} /> : <Menu size={36}/>}</button>
                </div>
            </nav>
            {isOpen && isSmallScreen && (
                <div className='flex flex-col items-center basis-full'>
                    <NavLinks isOpen={isOpen} />
                </div>
            )}
        </>
    )
}

export default Navigation;