// src/components/Header.tsx

import React from 'react';
import Logo from './Logo';
import Topbar from './Topbar';

const Header: React.FC = () => {
    return (
        <header
            className="flex items-center transition-[height] shrink-0 bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark] py-4 lg:py-0 lg:h-[--tw-header-height]"
            data-sticky="true"
            data-sticky-class="transition-[height] fixed z-10 top-0 left-0 right-0 shadow-sm backdrop-blur-md bg-white/70 dark:bg-coal-500/70 dark:border-b dark:border-b-coal-100"
            data-sticky-name="header"
            data-sticky-offset="200px"
            id="header"
        >
            <div className="container-fluid flex flex-wrap gap-2 items-center lg:gap-4" id="header_container">
                <Logo />
                <Topbar />
            </div>
        </header>
    );
};

export default Header;
