
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast
import CONFIG from '../config';  // Import the config file

import logo from "../assests/logo/logo.png"; // Ensure the path is correct
import googleIcon from '../assests/images/google.png';
import facebookIcon from '../assests/images/facebook.png';
import userImage from '../assests/images/user-image.jpg';

const SignUp = () => {
  const [username, setUsername] = useState('');  // Changed from 'name' to 'username'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');  // You can enable this if needed

  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${CONFIG.baseURL}/api/auth/signup`, {
        username,
        email,
        password,
      });
  
      console.log('Signup successful:', response.data);
      
      // Show success toast with account verification guidance
      toast.success('Signup successful! Please check your email to verify your account.');
  
      // Redirect to the sign-in page or any other desired route
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
      
      // Show error toast
      toast.error('Error signing up. Please try again.');
    }
  };
  

  return (
    <div id="__next">
      <main className="page-wrapper">
        <div className="signup-area">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-6 bg-color-blackest left-wrapper">
                <div className="sign-up-box">
                  <div className="signup-box-top">
                    <Link to="/">
                      <img
                        alt="sign-up logo"
                        loading="lazy"
                        width="193"
                        height="50"
                        src={logo}
                      />
                    </Link>
                  </div>
                  <div className="signup-box-bottom">
                    <div className="signup-box-content">
                   
                     
                      <form onSubmit={handleSubmit}>
                        <div className="input-section">
                          <div className="icon"><i className="feather-user"></i></div>
                          <input
                            type="text"
                            placeholder="Enter Your Username"  // Changed placeholder text to reflect 'Username'
                            value={username}  // Changed from 'name' to 'username'
                            onChange={(e) => setUsername(e.target.value)}  // Handle 'username' state
                            required
                          />
                        </div>
                        <div className="input-section mail-section">
                          <div className="icon"><i className="fa-sharp fa-regular fa-envelope"></i></div>
                          <input
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-section password-section">
                          <div className="icon"><i className="fa-sharp fa-regular fa-lock"></i></div>
                          <input
                            type="password"
                            placeholder="Create Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        {/* <div className="input-section password-section">
                          <div className="icon"><i className="fa-sharp fa-regular fa-lock"></i></div>
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </div> */}
                        {/* <div className="forget-text">
                          <Link className="btn-read-more" to="#"><span>Forgot password</span></Link>
                        </div> */}
                        <button type="submit" className="btn-default">Sign Up</button>
                      </form>
                    </div>
                    <div className="signup-box-footer">
                      <div className="bottom-text">
                        Do you have an account?
                        <Link className="btn-read-more ml--5" to="/signin"><span>Sign In</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 right-wrapper d-none d-lg-flex">
                <div className="client-feedback-area">
                  <div className="single-feedback">
                    <div className="inner">
                      <div className="meta-img-section">
                        <a className="image">
                          <img
                            alt="User Image"
                            loading="lazy"
                            width="93"
                            height="93"
                            src={userImage}
                          />
                        </a>
                      </div>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <a key={i} href="#rating">
                            <i className="fa-sharp fa-solid fa-star"></i>
                          </a>
                        ))}
                      </div>
                      <div className="content">
                        <p className="description additional-class">
                          Rainbow-Themes is now a crucial component of our work! We made it simple to collaborate across departments by grouping our work.
                        </p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <h4 className="title-text mb--0 additional-title-class">Guy Hawkins</h4>
                            <p className="desc mb--20 additional-help-class">Nursing Assistant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className="close-button" to="/">
            <i className="fa-sharp fa-regular fa-x"></i>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
