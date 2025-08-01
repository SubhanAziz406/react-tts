// import React, { useState } from 'react';

// const ProfileDetails = () => {
//     const [activeTab, setActiveTab] = useState('profile');

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="rbt-main-content mb--0">
//             <div className="rbt-daynamic-page-content center-width">
//                 <div className="rbt-dashboard-content">
//                     <div className="banner-area">
//                         <div className="settings-area">
//                             <h3 className="title">Profile Details</h3>
//                             <ul className="user-nav">
//                                 <li>
//                                     <a className={activeTab === 'profile' ? 'active' : ''} onClick={() => handleTabChange('profile')}>
//                                         Profile Details
//                                     </a>
//                                 </li>
                              
                               
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="content-page pb--50">
//                         {activeTab === 'profile' && <ProfileForm />}
//                         {activeTab === 'password' && <PasswordForm />}
//                         {activeTab === 'delete' && <DeleteAccountForm />}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const ProfileForm = () => {
//     return (
//         <div className="single-settings-box profile-details-box overflow-hidden">
//             <form className="rbt-profile-row rbt-default-form row row--15">
//                 <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//                     <div className="form-group">
//                         <label htmlFor="firstname">First Name</label>
//                         <input id="firstname" type="text" placeholder="First Name" />
//                     </div>
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//                     <div className="form-group">
//                         <label htmlFor="lastname">Last Name</label>
//                         <input id="lastname" type="text" placeholder="Last Name" />
//                     </div>
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//                     <div className="form-group">
//                         <label htmlFor="username">User  Name</label>
//                         <input id="username" type="text" placeholder="User  Name" />
//                     </div>
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-6 col-12">
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input id="email" type="email" placeholder="Enter email address" />
//                     </div>
//                 </div>
//                 <div className="col-12">
//                     <div className="form-group">
//                         <label htmlFor="bio">Bio</label>
//                         <textarea id="bio" cols="20" rows="5" placeholder="Tell us about yourself..."></textarea>
//                     </div>
//                 </div>
//                 <div className="col-12 mt--20">
//                     <div className="form-group mb--0">
//                         <button className="btn-default" type="submit">Update Info</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };


// const PasswordForm = () => {
//     return (
//         <div className="single-settings-box profile-details-box overflow-hidden">
//             <form className="rbt-profile-row rbt-default-form row row--15">
//                 <div className="col-12">
//                     <div className="form-group">
//                         <label htmlFor="currentpassword">Current Password</label>
//                         <input id="currentpassword" type="password" placeholder="Current Password" />
//                     </div>
//                 </div>
//                 <div className="col-12">
//                     <div className="form-group">
//                         <label htmlFor="newpassword">New Password</label>
//                         <input id="newpassword" type="password" placeholder="New Password" />
//                     </div>
//                 </div>
//                 <div className="col-12">
//                     <div className="form-group">
//                         <label htmlFor="retypenewpassword">Re-type New Password</label>
//                         <input id="retypenewpassword" type="password" placeholder="Re-type New Password" />
//                     </div>
//                 </div>
//                 <div className="col-12 mt--20">
//                     <div className="form-group mb--0">
//                         <button className="btn-default" type="submit">Update Password</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// const DeleteAccountForm = () => {
//     return (
//         <div className="single-settings-box profile-details-box overflow-hidden">
//             <form className="rbt-profile-row rbt-default-form row row--15">
//                 <div className="col-11 text-Center">
//                     <p className="mb--20">
//                         <strong>Warning: </strong>Deleting your account will permanently erase all your data and cannot be reversed. This includes your profile, conversations, comments, and any other info linked to your account. Are you sure you want to go ahead with deleting your account? Enter your password to confirm.
//                     </p>
//                 </div>
//                 <div className="col-12">
//                     <div className="form-group">
//                         <label htmlFor="enterpassword">Your Password</label>
//                         <input id="enterpassword" type="password" placeholder="Current Password" />
//                     </div>
//                 </div>
//                 <div className="col-12 mt--20">
//                     <div className="form-group mb--0">
//                         <button className="btn-default" type="submit"><i className="feather-trash-2"></i> Delete Account</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ProfileDetails;





import React from 'react';

const ProfileDetails = () => {
    return (
        <div className="rbt-main-content mb--0">
            <div className="rbt-daynamic-page-content center-width">
                <div className="rbt-dashboard-content">
                    <div className="banner-area">
                        <div className="settings-area">
                            <h3 className="title">Profile Details</h3>
                        </div>
                    </div>
                    <div className="content-page pb--50">
                        <ProfileForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProfileForm = () => {
    return (
        <div className="single-settings-box profile-details-box overflow-hidden">
            <form className="rbt-profile-row rbt-default-form row row--15">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input id="firstname" type="text" placeholder="First Name" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input id="lastname" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label htmlFor="username">User  Name</label>
                        <input id="username" type="text" placeholder="User  Name" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Enter email address" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea id="bio" cols="20" rows="5" placeholder="Tell us about yourself..."></textarea>
                    </div>
                </div>
                <div className="col-12 mt--20">
                    <div className="form-group mb--0">
                        <button className="btn-default" type="submit">Update Info</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfileDetails;
