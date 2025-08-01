
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { toast } from 'react-toastify'; // Import react-toastify


import userImage from '../assests/images/user-image.jpg';

import logo from "../assests/logo/logo.png"; // Ensure the path is correct
import CONFIG from "../config/index"; // Import your config file

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting and reloading the page

    try {
      // Send request to the API with email and password
      const response = await axios.post(CONFIG.baseURL + "/api/auth/signin",
         { email, password },
         {withCredentials:true});

      
      const { token, username, userId } = response.data;

      
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", email); // Store email

      toast.success('Login successful!'); // Show success message
      navigate('/Dashboard'); // Redirect to home page
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Invalid email or password. Please try again.');
      } else {
        toast.error('An error occurred. Please try again later.');
      }
      console.error(error.response?.data || error.message);
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
                        src={logo}
                        alt="Logo"
                        style={{
                          width: '193', // Adjust width as needed
                          height: '50', // Maintain aspect ratio
                          textDecoration: 'none',
                        }}
                      />
                    </Link>
                  </div>
                  <div className="signup-box-bottom">
                    <div className="signup-box-content">
                      
                     
                      <form onSubmit={handleSubmit}>
                        <div className="input-section mail-section">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-envelope"></i>
                          </div>
                          <input
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="input-section password-section">
                          <div className="icon">
                            <i className="fa-sharp fa-regular fa-lock"></i>
                          </div>
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        {/* <div className="forget-text">
                          <a className="btn-read-more" href="#">
                            <span>Forgot password</span>
                          </a>
                        </div> */}
                        <button type="submit" className="btn-default">
                          Sign In
                        </button>
                      </form>
                    </div>
                    <div className="signup-box-footer">
                      <div className="bottom-text">
                        Don’t have an account?
                        <Link className="btn-read-more ml--5" to="/signup">
                          <span>Sign Up</span>
                        </Link>
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

export default SignIn;
