import React from 'react';
import ProfileTabs from './ProfileTabs';
import ProfileForm from './ProfileForm';
import PasswordForm from './PasswordForm';
import DeleteAccountForm from './DeleteAccountForm';
import DashboardHeader from './Dheader';

const ProfileDetails = () => {
    return (
        <div className="profile-details">
            <DashboardHeader/>
        <div className="rbt-main-content mb--0">
            <div className="rbt-daynamic-page-content center-width">
                <div className="rbt-dashboard-content">
                    <div className="banner-area">
                        <div className="settings-area">
                            <h3 className='additional'>Profile Details</h3>
                            <ul className="user-nav">
                                <li><a className="active" href="profile-details"><span>Profile Details</span></a></li>
                                <li><a href="Dpricing"><span>Plans and Billing</span></a></li>
                                <li className='Light'><a href="DPrivacyPolicy"><span>Privacy Policy</span></a></li>
                               
                                <li><a href="DRefundPolicy"><span>Refund Policy</span></a></li>
                                <li><a href="DTermsOfService"><span>Term Of Service</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-page pb--50">
                        <div className="chat-box-list">
                            <div className="single-settings-box profile-details-box overflow-hidden">
                                <ProfileTabs />
                                <ProfileForm />
                                <PasswordForm />
                                <DeleteAccountForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProfileDetails;