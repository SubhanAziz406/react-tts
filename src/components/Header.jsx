// import React, { useState, useEffect, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
// import logo from "../assests/logo/logo.png"; // Ensure the path is correct
// import { Link,NavLink  } from "react-router-dom";

// const Header = () => {
//   const [isLightMode, setIsLightMode] = useState(true); // State for theme
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
//   const [isScrolled, setIsScrolled] = useState(false); // State for scroll position
//   const mobileMenuRef = useRef(null); // Ref for mobile menu
//   const toggleButtonRef = useRef(null); // Ref for the toggle button

  

//   const toggleTheme = () => {
//     const newTheme = !isLightMode;
//     setIsLightMode(newTheme);
    
//     document.body.classList.toggle(".active-light-mode", newTheme);
//     document.body.classList.toggle("active-dark-mode", !newTheme);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50); // Check if user scrolled more than 50px
//     };

//     const handleClickOutside = (event) => {
//       // Close the menu if clicked outside
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target) &&
//         toggleButtonRef.current &&
//         !toggleButtonRef.current.contains(event.target)
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header
//     className="rainbow-header header-default header-sticky"
//     style={{
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       zIndex: 9999,
//       backgroundColor: document.body.classList.contains("active-dark-mode")
//         ? "#ffffff" // Background color for dark mode
//         : "#0E0C15", // Background color for light mode
//       color: document.body.classList.contains(".active-dark-mode")
//         ? "#0E0C15" // Text color white in dark mode
//         : "#ffffff", // Text color black in light mode
//     }}
//   >
//     {/* Header content */}
  
  
//       <div className="container position-relative">
//         <div className="row align-items-center row--0">
//           <div className="col-lg-2 col-md-6 col-6">
//             <div className="logo">
//               <Link to="/">
//                 <img src={logo} alt="logo" style={{ height: "80px" }} />
//               </Link>
//             </div>
//           </div>
//           <div className="col-lg-8 d-none d-lg-block">
//           <nav className="mainmenu-nav d-flex justify-content-center">
//   <ul className="mainmenu">
//     <li>
//       <NavLink exact to="/" activeClassName="active">
//         Home
//       </NavLink>
//     </li>
//     <li className="has-dropdown has-menu-child-item position-relative">
//       <a to="#">
//         Tools <FontAwesomeIcon icon={faChevronDown} />
//       </a>
//       <ul className="submenu">
//         <li>
//           <NavLink to="/TextToSpeechConverter" >
//             <span>Text To Speech</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/VoiceChanger">
//             <span>Voice Changer</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/TextToSoundEffects" >
//             <span>Text To Sound Effects</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Dubbing" >
//             <span>Dubbing</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/Meeting" >
//             <span>Meeting</span>
//           </NavLink>
//         </li>
//       </ul>
//     </li>
//     <li>
//       <NavLink to="/Contact" activeClassName="active">
//         Contact Us
//       </NavLink>
//     </li>
//     <li>
//       <NavLink to="/PricingPage" activeClassName="active">
//         Pricing
//       </NavLink>
//     </li>
//   </ul>
// </nav>
//           </div>
//           <div className="col-lg-2 col-md-6 col-6 position-static">
//             <div className="header-right d-flex align-items-center justify-content-end">
//               <div className="header-btn">
//                 <Link className="rainbow-gradient-btn" to="/Signin">
//                   <span>Sign In</span>
//                 </Link>
//               </div>
//               <div
//                 className="theme-toggle"
//                 onClick={toggleTheme}
//                 style={{
//                   cursor: "pointer",
//                   fontSize: "20px",
//                   marginLeft: "15px",
//                   color: "#815BF5",
//                 }}
//               >
//                 <FontAwesomeIcon icon={faMoon} />
//               </div>
//               <div className="mobile-menu-bar d-flex justify-content-end d-lg-none">
//                 <div className="hamberger">
//                   <button
//                     ref={toggleButtonRef} // Attach ref to toggle button
//                     className="hamberger-button"
//                     onClick={toggleMobileMenu}
//                   >
//                     <FontAwesomeIcon icon={isMobileMenuOpen ? faChevronDown : faBars} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {isMobileMenuOpen && (
//           <div
//             ref={mobileMenuRef} 
//             className="mobile-menu"
//             style={{
//               position: "absolute",
//               top: "100%",
//               left: 0,
//               width: "100%",
//               backgroundColor: "#fff",
//               zIndex: 9999,
//               padding: "10px 0",
//               overflowY: "auto",
//               maxHeight: "100vh",
//             }}
//           >
//             <nav className="mobile-nav">
//               <ul className="mobile-menu-list">
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/TextToSpeechConverter">Text To Speech</Link>
//                 </li>
//                 <li>
//                   <Link to="/VoiceChanger">Voice Changer</Link>
//                 </li>
//                 <li>
//                   <Link to="/TextToSoundEffects">Text To Sound Effects</Link>
//                 </li>
//                 <li>
//                   <Link to="/Dubbing">Dubbing</Link>
//                 </li>
//                 <li>
//                   <Link to="/Meeting">Meeting</Link>
//                 </li>
//                 <li>
//                   <Link to="/Contact">Contact Us</Link>
//                 </li>
//                 <li>
//                   <Link to="/PricingPage">Pricing</Link>
//                 </li>
//                 <li>
//                   <Link to="/Signin">Sign In</Link>
//                 </li>
//                 <li>
//                   <Link to="/signup">Sign Up</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;  



import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assests/logo/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(true); // State for theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll position
  const mobileMenuRef = useRef(null); // Ref for mobile menu
  const toggleButtonRef = useRef(null); // Ref for the toggle button

  useEffect(() => {
    // Load theme preference from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsLightMode(false);
      document.body.classList.add("active-dark-mode");
      document.body.classList.remove("active-light-mode");
    } else {
      setIsLightMode(true);
      document.body.classList.add(".active-light-mode");
      document.body.classList.remove("active-dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLightMode;
    setIsLightMode(newTheme);

    if (newTheme) {
      document.body.classList.add(".active-light-mode");
      document.body.classList.remove("active-dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("active-dark-mode");
      document.body.classList.remove("active-light-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Check if user scrolled more than 50px
    };

    const handleClickOutside = (event) => {
      // Close the menu if clicked outside
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="rainbow-header header-default header-sticky"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        backgroundColor: isLightMode ? "#0E0C15" : "#ffffff",
        color: isLightMode ? "#ffffff" : "#0E0C15",
      }}
    >
      <div className="container position-relative">
        <div className="row align-items-center row--0">
          <div className="col-lg-2 col-md-6 col-6">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" style={{ height: "80px" }} />
              </Link>
            </div>
          </div>
          <div className="col-lg-8 d-none d-lg-block">
            <nav className="mainmenu-nav d-flex justify-content-center">
              <ul className="mainmenu">
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="has-dropdown has-menu-child-item position-relative">
                  <a to="#">
                    Tools <FontAwesomeIcon icon={faChevronDown} />
                  </a>
                  <ul className="submenu">
                    <li>
                      <NavLink to="/TextToSpeechConverter">
                        <span>Text To Speech</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/VoiceChanger">
                        <span>Voice Changer</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/TextToSoundEffects">
                        <span>Text To Sound Effects</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Dubbing">
                        <span>Dubbing</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Meeting">
                        <span>Meeting</span>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/Contact" activeClassName="active">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/PricingPage" activeClassName="active">
                    Pricing
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 col-md-6 col-6 position-static">
            <div className="header-right d-flex align-items-center justify-content-end">
              <div className="header-btn">
                <Link className="rainbow-gradient-btn" to="/Signin">
                  <span>Sign In</span>
                </Link>
              </div>
              <div
                className="theme-toggle"
                onClick={toggleTheme}
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  marginLeft: "15px",
                  color: "#815BF5",
                }}
              >
                <FontAwesomeIcon icon={faMoon} />
              </div>
              <div className="mobile-menu-bar d-flex justify-content-end d-lg-none">
                <div className="hamberger">
                  <button
                    ref={toggleButtonRef}
                    className="hamberger-button"
                    onClick={toggleMobileMenu}
                  >
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faChevronDown : faBars} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="mobile-menu"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              backgroundColor: "#fff",
              zIndex: 9999,
              padding: "10px 0",
              overflowY: "auto",
              maxHeight: "100vh",
            }}
          >
            <nav className="mobile-nav">
              <ul className="mobile-menu-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/TextToSpeechConverter">Text To Speech</Link>
                </li>
                <li>
                  <Link to="/VoiceChanger">Voice Changer</Link>
                </li>
                <li>
                  <Link to="/TextToSoundEffects">Text To Sound Effects</Link>
                </li>
                <li>
                  <Link to="/Dubbing">Dubbing</Link>
                </li>
                <li>
                  <Link to="/Meeting">Meeting</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/PricingPage">Pricing</Link>
                </li>
                <li>
                  <Link to="/Signin">Sign In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;




