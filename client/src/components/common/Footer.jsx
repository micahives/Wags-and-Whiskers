import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-#252525 bg-opacity-50 text-white p-4 bottom-0 w-full border-t border-gray-600">
            <div className="flex justify-center items-center space-x-4">
                {/* disclaimer */}
                <p className="text-sm">Wags and Whiskers is a tool to help track your pet's ongoing health checks, not a replacement for a veterinary professional.</p>
                {/* github icon takes you to the project repository */}
                <a href="https://github.com/micahives/supreme-adventure" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;