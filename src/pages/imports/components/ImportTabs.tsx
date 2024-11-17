import React, { useState } from 'react';
import Card from '../../../components/cards/Card';
import UploadFpscForm from './UploadFpscForm';

interface ImportTabsProps {
    onTabChange: (index: number) => void; // Accept a callback prop
}

const ImportTabs: React.FC<ImportTabsProps> = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState(0); // Track the active tab locally

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        onTabChange(index); // Notify parent component about the tab change
    };

    return (
        <div>
            <div className="tabs mb-5" data-tabs="true">
                <button
                    className={`tab ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabClick(0)}
                    data-tab-toggle="#fpsc"
                >
                    FPSC
                </button>
                <button
                    className={`tab ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabClick(1)}
                    data-tab-toggle="#tab_1_2"
                >
                    Tab 2
                </button>
                <button
                    className={`tab ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabClick(2)}
                    data-tab-toggle="#tab_1_3"
                >
                    Tab 3
                </button>
            </div>

            {/* Tab content */}
            <div className={activeTab === 0 ? '' : 'hidden'} id="fpsc">
                <Card
                    title="Data Import"
                    body={<UploadFpscForm />}
                />
            </div>
            <div className={activeTab === 1 ? '' : 'hidden'} id="tab_1_2">
                <p>Content for Tab 2</p>
            </div>
            <div className={activeTab === 2 ? '' : 'hidden'} id="tab_1_3">
                <p>Content for Tab 3</p>
            </div>
        </div>
    );
};

export default ImportTabs;
