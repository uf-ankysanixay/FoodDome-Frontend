// src/components/Topbar.tsx

import React from 'react';

const Topbar: React.FC = () => {
    return (
        <div className="flex items-center flex-wrap gap-2 lg:gap-3.5">
            <div className="flex items-center gap-1.5 lg:gap-3.5">
                {/* Dark mode button */}
                <button className="hover:text-primary hidden dark:flex" data-theme-toggle="true" data-tooltip="#theme_mode_dark">
                    <i className="ki-filled ki-sun"></i> {/* Moon icon for dark mode */}
                </button>

                {/* Light mode button */}
                <button className="hover:text-primary dark:hidden" data-theme-toggle="true" data-tooltip="#theme_mode_light">
                    <i className="ki-filled ki-moon"></i> {/* Sun icon for light mode */}
                </button>
            </div>
        </div>
    );
};

export default Topbar;
