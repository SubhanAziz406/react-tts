import React from 'react';

const ProfileTabs = () => {
    return (
        <div className="profile-details-tab">
            <div className="advance-tab-button mb--30">
                <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="settinsTab-4" role="tablist">
                    <li role="presentation">
                        <a href="#" className="tab-button active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="true">
                            <span className="title">Profile</span>
                        </a>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    );
};

export default ProfileTabs;