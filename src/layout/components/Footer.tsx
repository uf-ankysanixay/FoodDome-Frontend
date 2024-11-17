// src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            {/* Container */}
            <div className="container-fluid">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-5">
                    {/* Left Side - Copyright */}
                    <div className="flex order-2 md:order-1 gap-2 font-normal text-2sm">
                        <span className="text-gray-500">2024©</span>
                        {/* External Link */}
                        <Link className="text-gray-600 hover:text-primary" to="#">
                            Project Food Dome
                        </Link>
                    </div>

                    {/* Right Side - Navigation Links */}
                    <nav className="flex order-1 md:order-2 gap-4 font-normal text-2sm text-gray-600">
                        <Link className="hover:text-primary" to="/docs">
                            Docs
                        </Link>
                        <Link className="hover:text-primary" to="/faq">
                            FAQ
                        </Link>
                        <Link className="hover:text-primary" to="/support">
                            Support
                        </Link>
                        <Link className="hover:text-primary" to="/license">
                            License
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
