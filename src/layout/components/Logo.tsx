// src/components/Logo.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

const Logo: React.FC = () => {
    return (
        <div className="flex items-stretch gap-10 grow">
            <div className="flex items-center gap-2.5">
                {/* Logo Link */}
                <Link to="/">
                    {/* Light Mode Logo */}
                    <img
                        className="dark:hidden min-h-[34px]"
                        src="/assets/media/app/mini-logo-circle-primary.svg"
                        alt="Logo"
                    />
                    {/* Dark Mode Logo */}
                    <img
                        className="hidden dark:inline-block min-h-[34px]"
                        src="/assets/media/app/mini-logo-circle-primary-dark.svg"
                        alt="Logo"
                    />
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="lg:hidden btn btn-icon btn-light btn-clear btn-sm"
                    data-drawer-toggle="#mega_menu_wrapper"
                >
                    <i className="ki-filled ki-burger-menu-2"></i>
                </button>

                {/* Title */}
                <h3 className="text-gray-900 text-lg font-medium hidden md:block">
                    Project Food Dome
                </h3>
            </div>
            <MegaMenu />
        </div>
    );
};

export default Logo;
