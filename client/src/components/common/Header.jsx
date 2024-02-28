import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className='bg-dark-background absolute top-0 flex-wrap z-[20] mx-auto flex items-center justify-between border-b border-gray-600 w-full'>
            <h1 className="text-white text-5xl mt-8 mb-8 ml-8" style={{ fontFamily: 'Caveat, cursive' }}>Wags and Whiskers</h1>
            <Navigation />
        </header>
    );
};

export default Header;