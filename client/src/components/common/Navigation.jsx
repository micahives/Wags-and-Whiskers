import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import Auth from '../../utils/auth';
// import { FaBars } from 'react-icons/fa';
// import { Collapse, Dropdown, initTE } from 'tw-elements';

const NavLinks = ({ isOpen }) => {
    return (
        <>
            <NavLink to="/Profile" className={`mr-8 ${isOpen ? '' : 'bg-dark-background border border-gray-400 rounded-full px-4 py-1'}`} >Profile</NavLink>
            <NavLink to="/Wellness" className={`mr-8 ${isOpen ? '' : 'border border-gray-400 rounded-full px-4 py-1'}`}>Wellness</NavLink>
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
                <div className='hidden w-full md:flex justify-between mr-24'>
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

// const Navigation = () => {
//     const location = useLocation();
//     const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => {
//         initTE({ Collapse, Dropdown });
//     }, []);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="border-b border-gray-600 py-4 fixed w-full top-0 z-10">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center h-12">
//                     <div className="flex items-center">
//                         <div className="flex-shrink-0 flex items-center">
//                             {/* Menu icon hidden on larger screens */}
//                             <FaBars className="h-8 text-white md:hidden cursor-pointer" onClick={toggleMenu} />
//                         </div>
//                     </div>
//                     <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
//                         <div className="ml-10 md:flex md:items-baseline md:space-x-4">
//                             <Link to="/Profile" className={location.pathname === '/Profile' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-base font-medium block md:inline-block' : ' text-white bg-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium block md:inline-block'}>Profile</Link>
//                             <Link to="/Wellness" className={location.pathname === '/Wellness' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-base font-medium block md:inline-block' : 'text-white bg-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium block md:inline-block'}>Wellness</Link>
//                             <Link to="/" onClick={Auth.logout} className={location.pathname === '/' ? 'bg-green-700 text-white px-3 py-2 rounded-md text-base font-medium block md:inline-block' : 'text-white bg-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium block md:inline-block'}>Logout</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navigation;