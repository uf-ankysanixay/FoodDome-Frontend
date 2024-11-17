import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MegaMenu: React.FC = () => {
    const location = useLocation(); // Hook to get the current route

    return (
        <div className="menu flex-col lg:flex-row gap-5 lg:gap-7.5" data-menu="true" id="mega_menu">
            <div className={`menu-item ${location.pathname === '/' ? 'active' : ''}`} data-menu-item-offset="0,0|lg:-20px,10px"
                data-menu-item-offset-rtl="0,0|lg:20px,10px" data-menu-item-overflow="true"
                data-menu-item-placement="bottom-start" data-menu-item-placement-rtl="bottom-end"
                data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                <div className="menu-link border-b border-b-transparent menu-item-active:border-b-gray-400 menu-item-here:border-b-gray-400">
                    <Link
                        to="/"
                        className="menu-title text-2sm text-gray-800 dark:menu-item-here:text-gray-900 dark:menu-item-active:text-gray-900 menu-item-show:text-gray-900 menu-item-here:text-gray-900 menu-item-active:font-medium menu-item-here:font-medium"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>

            <div className={`menu-item ${location.pathname.includes('/import') ? 'active' : ''}`} data-menu-item-offset="0,0|lg:-20px,10px"
                data-menu-item-offset-rtl="0,0|lg:20px,10px" data-menu-item-overflow="true"
                data-menu-item-placement="bottom-start" data-menu-item-placement-rtl="bottom-end"
                data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                <div className="menu-link border-b border-b-transparent menu-item-active:border-b-gray-400 menu-item-here:border-b-gray-400">
                    <span className="menu-title text-2sm text-gray-800 dark:menu-item-here:text-gray-900 dark:menu-item-active:text-gray-900 menu-item-show:text-gray-900 menu-item-here:text-gray-900 menu-item-active:font-medium menu-item-here:font-medium">
                        Imports
                    </span>
                    <span className="menu-arrow flex lg:hidden">
                        <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                        <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                    </span>
                </div>
                <div className="menu-dropdown menu-default py-2.5 w-full max-w-[220px]">
                    <div className="menu-item">
                        <Link
                            to="/import/fpsc"
                            className="menu-link"
                            tabIndex={0}
                        >
                            <span className="menu-icon">
                                <i className="ki-filled ki-coffee"></i>
                            </span>
                            <span className="menu-title grow-0">
                                Florida Public Service Commission
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
