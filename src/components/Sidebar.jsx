import React, { useState } from 'react';

const Sidebar = () => {
    const [isCollapse, setIsCollapse] = useState(false);

    const toggleCollapse = () => {
        setIsCollapse(!isCollapse);
    };

    return (
        <div className="rbt-left-panel popup-dashboardleft-section">
            <div className="rbt-default-sidebar">
                <div className="inner">
                    <nav className="mainmenu-nav">
                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                            <li>
                                <a href="text-generator">
                                    <img alt="AI Generator" src="_next/textb6c1.png" width="35" height="35" />
                                    <span>Text Generator</span>
                                </a>
                            </li>
                            <li>
                                <a href="image-generator">
                                    <img alt="AI Generator" src="_next/photo505a.png" width="35" height="35" />
                                    <span>Image Generator</span>
                                    <div className="rainbow-badge-card badge-sm ml--10">Hot</div>
                                </a>
                            </li>
                            <li>
                                <a href="code-generator">
                                    <img alt="AI Generator" src="_next/code-editor71b1.png" width="35" height="35" />
                                    <span>Code Generator</span>
                                </a>
                            </li>
                            <li>
                                <a href="image-editor">
                                    <img alt="AI Generator" src="_next/photo505a.png" width="35" height="35" />
                                    <span>Image Editor</span>
                                </a>
                            </li>
                            <li>
                                <a href="video-generator">
                                    <img alt="AI Generator" src="_next/video-camera14a7.png" width="35" height="35" />
                                    <span>Video Generator</span>
                                </a>
                            </li>
                            <li>
                                <a href="email-generator">
                                    <img alt="AI Generator" src="_next/email9e32.png" width="35" height="35" />
                                    <span>Email Generator</span>
                                </a>
                            </li>
                            <li>
                                <a className="disabled" href="profile-details#">
                                    <img alt="AI Generator" src="_next/website-designa0d1.png" width="35" height="35" />
                                    <span>Website Generator</span>
                                    <div className="rainbow-badge-card badge-sm ml--10">Coming</div>
                                </a>
                            </li>
                        </ul>
                        <div className="rbt-sm-separator"></div>
                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                            <li className="has-submenu">
                                <a className="collapse-btn" onClick={toggleCollapse}>
                                    <i className="feather-plus-circle"></i>
                                    <span>Settings</span>
                                </a>
                                {isCollapse && (
                                    <div className="collapse">
                                        <ul className="submenu rbt-default-sidebar-list">
                                            <li>
                                                <a href="profile-details">
                                                    <i className="feather-user"></i>
                                                    <span>Profile Details</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="notification">
                                                    <i className="feather-shopping-bag"></i>
                                                    <span>Notification</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="chat-export">
                                                    <i className="feather-users"></i>
                                                    <span>Chat Export</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="appearance">
                                                    <i className="feather-home"></i>
                                                    <span>Appearance</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="plans-billing">
                                                    <i className="feather-briefcase"></i>
                                                    <span>Plans and Billing</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="sessions">
                                                    <i className="feather-users"></i>
                                                    <span>Sessions</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="application">
                                                    <i className="feather-list"></i>
                                                    <span>Application</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <a href=" help-center">
                                    <i className="feather-help-circle"></i>
                                    <span>Help Center</span>
                                </a>
                            </li>
                            <li>
                                <a href="logout">
                                    <i className="feather-log-out"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;