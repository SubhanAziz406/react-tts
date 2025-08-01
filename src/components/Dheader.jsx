




import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import 'regenerator-runtime/runtime';
import logo from "../assests/logo/logo.png"; // Ensure the path is correct

const DashboardHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHistoryMenuOpen, setIsHistoryMenuOpen] = useState(false); // State for "History" dropdown
  const [userEmail, setUserEmail] = useState('');
  const menuRef = useRef(null); // Ref for the mobile menu
  const toggleButtonRef = useRef(null); // Ref for the toggle button
  const historyMenuRef = useRef(null); // Ref for the "History" dropdown

  useEffect(() => {
    // Retrieve email from localStorage if available
    const email = localStorage.getItem('email');
    if (email) {
      setUserEmail(email); // Set the email to the state
    }
  }, []);

  useEffect(() => {
    // Function to handle clicks outside all menus
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false); // Close the mobile menu
      }

      if (
        historyMenuRef.current &&
        !historyMenuRef.current.contains(event.target)
      ) {
        setIsHistoryMenuOpen(false); // Close the "History" dropdown
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHistoryMenu = () => {
    setIsHistoryMenuOpen(!isHistoryMenuOpen);
  };

  return (
    <header className="rbt-dashboard-header header-default header-left-align rbt-fluid-header">
      <div className="container-fluid position-relative">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-md-6 col-6">
            <div className="header-left d-flex">
              <div className="logo">
                <Link to="/Dashboard">
                  <img
                    alt="Corporate Logo"
                    loading="lazy"
                    width="135"
                    height="35"
                    decoding="async"
                    className="logo-light"
                    src={logo}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={`col-lg-6 d-none d-lg-block text-center ${isMobileMenuOpen ? 'd-block' : 'd-none'}`}>
            <nav className="mainmenu-nav d-none d-lg-block text-center">
              <ul className="mainmenu">
                <li><Link to="/Dashboard">Home</Link></li>
                <li className="has-dropdown has-menu-child-item position-relative">
                  <Link to="#">Tools<i className="fa-regular fa-chevron-down"></i></Link>
                  <ul className="submenu">
                    <li><Link to="/Dtexttospeech"><span>Text To Speech</span></Link></li>
                    <li><Link to="/Dvoicechanger"><span>Voice Changer</span></Link></li>
                    <li><Link to="/Dsoundeffect"><span>Text To Sound Effects</span></Link></li>
                    <li><Link to="/DaDubbing"><span>Dubbing</span></Link></li>
                    <li><Link to="/DMeeting"><span>Meeting</span></Link></li>
                  </ul>
                </li>
                <li><Link to="/DPricing">Pricing</Link></li>
                <li><Link to="/Dcontact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="header-right">
              <div className="mobile-menu-bar mr--10 ml--10 d-block d-lg-none">
                <div className="hamberger">
                  <button
                    ref={toggleButtonRef} // Attach the ref to the toggle button
                    className="hamberger-button"
                    aria-label="Menu"
                    onClick={toggleMobileMenu}
                  >
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
              <div
                className="rbt-admin-panel account-access rbt-user-wrapper right-align-dropdown"
                ref={historyMenuRef} // Attach the ref to the "History" menu
              >
                <div className="rbt-admin-card grid-style">
                  <Link className="d-flex align-items-center" to="#" onClick={toggleHistoryMenu}>
                    <div className="inner d-flex align-items-center">
                      <div className="content">
                        <span className="title">Voiceboost</span>
                        {/* Display the user's email */}
                        <p>{userEmail || 'No email found'}</p>
                      </div>
                    </div>
                    <div className="icon">
                      <i className="fa-sharp fa-solid fa-chevron-down"></i>
                    </div>
                  </Link>
                </div>
                {isHistoryMenuOpen && (
                  <div className="rbt-user-menu-list-wrapper">
                    <div className="inner">
                      <div className="rbt-admin-profile">
                        <div className="admin-info">
                          <span className="name">Voice Boost</span>
                        </div>
                      </div>
                      <ul className="user-list-wrapper user-nav">
                        <li><Link to="/ProfileDetails"><i className="fa-sharp fa-regular fa-user"></i><span>Profile Details</span></Link></li>
                        <li><Link to="/Dpricing"><i className="fa-sharp fa-regular fa-briefcase"></i><span>Plans and Billing</span></Link></li>
                        <li><Link to="/DHistory"><i className="fa-sharp fa-regular fa-users"></i><span>History</span></Link></li>
                      </ul>
                      <ul className="user-list-wrapper">
                      <li>
    <Link
      to="/"
      onClick={() => {
        // Clear user session data
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("username");
        localStorage.removeItem("userId");
      }}
    >
      <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
      <span>Logout</span>
    </Link>
  </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
  <div
    ref={menuRef}
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "100%", // Adjust menu width
      height: "50%", // Full-screen height
      backgroundColor: "#ffffff", // Background color
      zIndex: 9999,
      overflowY: "auto", // Enable vertical scrolling if content overflows
      boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
      padding: "20px", // Space around the menu content
      marginTop:'80px'
    }}
  >
    <nav className="mobile-nav">
      <ul
        style={{
          listStyle: "none", // Remove bullets
          padding: 0, // Remove default padding
          margin: 0, // Remove default margin
          textAlign: "left", // Align menu items to the left
        }}
      >
        <li
          style={{
            marginBottom: "15px", // Add spacing between menu items
          }}
        >
          <Link
            to="/"
            style={{
              fontSize: "18px", 
              color: "#333",
              textDecoration: "none", 
              display: "block",
              padding: "10px 15px", 
              borderRadius: "5px", 
              transition: "background-color 0.3s ease", 
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/Dtexttospeech"
            style={{
              fontSize: "18px",
              color: "#333",
              textDecoration: "none",
              display: "block",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Text To Speech
          </Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/Dvoicechanger"
            style={{
              fontSize: "18px",
              color: "#333",
              textDecoration: "none",
              display: "block",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Voice Changer
          </Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/Dsoundeffect"
            style={{
              fontSize: "18px",
              color: "#333",
              textDecoration: "none",
              display: "block",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Text To Sound Effects
          </Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/DaDubbing"
            style={{
              fontSize: "18px",
              color: "#333",
              textDecoration: "none",
              display: "block",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Dubbing
          </Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/DMeeting"
            style={{
              fontSize: "18px",
              color: "#333",
              textDecoration: "none",
              display: "block",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Meeting
          </Link>
        </li>
        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/DPricing"
            style={{
              fontSize: "18px",
              color: "#333",
              textDecoration: "none",
              display: "block",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/Dcontact"
            style={{
              fontSize: "18px",
              color: "#333",
              textDecoration: "none",
              display: "block",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)}



      </div>
    </header>
  );
};

export default DashboardHeader;

