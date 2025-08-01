

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faMicrophone, faDesktop, faPhone, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meetingc from '../components/Meetingc';
import Footer from '../components/footer';
import { useNavigate } from "react-router-dom";

const Meeting = () => {
  // State for managing meeting controls and theme
  const [isMeetingStarted, setIsMeetingStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [meetingUrl, setMeetingUrl] = useState('');
  const [hostName, setHostName] = useState('John Doe');
  const [participants, setParticipants] = useState(['John Doe', 'Jane Smith', 'Sarah Lee', 'Michael Clark']);
 
    const navigate = useNavigate();
  
  // Theme state
  const [isLightMode, setIsLightMode] = useState(true);

  // Toggle mute/unmute
  const toggleMute = () => setIsMuted(prev => !prev);

  // Toggle video on/off
  const toggleVideo = () => setIsVideoOn(prev => !prev);

  // Toggle screen share on/off
  const toggleScreenShare = () => setIsScreenSharing(prev => !prev);

  // Start the meeting
  const startMeeting = () => {
    navigate('/Signin'); // Redirect to the Sign In page
  };

  // End the meeting
  const endMeeting = () => setIsMeetingStarted(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsLightMode(prevMode => {
      // Toggle body class for light and dark mode
      document.body.classList.toggle('light-mode', !prevMode);
      document.body.classList.toggle('dark-mode', prevMode);
      return !prevMode;
    });
  };

  // Optionally, persist the theme using localStorage (optional)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsLightMode(savedTheme === 'light');
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('light-mode');
    }
  }, []);

  useEffect(() => {
    // Persist theme to localStorage
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  return (
    <div>
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      {/* Theme Toggle Button */}
      <div
        className="theme-toggle"
        onClick={toggleTheme}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          cursor: 'pointer',
          fontSize: '24px',
          color: isLightMode ? '#333' : '#f8f9fa',
        }}
      >
        <FontAwesomeIcon icon={isLightMode ? 'moon' : 'sun'} />
      </div>

      {!isMeetingStarted ? (
        // Show Form to Enter Meeting URL
        <div className=" additional text-center w-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="title display-one" style={{marginLeft:'65px'}}>
  join Our  <span className="header-caption">
    <span className="cd-headline rotate-1">
      <span className="cd-words-wrapper">
        <b className="is-visible theme-gradient"><h1>Virtual</h1></b>
        
      </span>
    </span>
   </span> <h1 >Meeting</h1>
 </h1>

          <p className="additional mb-4" style={{ fontSize: '1.25rem' }}>
            Enter the meeting URL to start your meeting. Stay connected with your team, collaborate seamlessly, and make every conversation productive.
          </p>

          <div className="mb-4 w-75">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter meeting URL"
              value={meetingUrl}
              onChange={(e) => setMeetingUrl(e.target.value)}
              style={{ backgroundColor: '#333', color: 'white', border: '1px solid #555' }}
            />
          </div>

          <button
            className="btn btn-lg btn-primary p-3 my-4 shadow-lg"
            style={{ fontSize: '1.5rem', width: '250px', backgroundColor:'#805af5' }}
            onClick={startMeeting}
          >
            Start Meeting
          </button>

          {/* Landing page description */}
          <div className=" additional text-center mt-5">
            <p className="additional text-white-50" style={{ fontSize: '1.2rem' }}>
              Join your team in a virtual space where you can collaborate, brainstorm, and make your meetings more effective. Connect effortlessly with colleagues and clients, anytime and anywhere.
            </p>
          </div>
        </div>
      ) : (
        // Show Meeting Interface
        <>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {/* Meeting Status and Video */}
            <div className="mb-4 text-center">
              <FontAwesomeIcon icon={faVideo} size="6x" className={`text-${isVideoOn ? 'primary' : 'secondary'}`} />
              <p className="additional mt-3" style={{ fontSize: '1.25rem' }}>Meeting "{meetingUrl}" In Progress</p>
              <p className='additional' style={{ fontSize: '1.1rem' }}>
                {isMuted ? 'Muted' : 'Unmuted'} | {isScreenSharing ? 'Sharing Screen' : 'Not Sharing Screen'}
              </p>
            </div>

            {/* Control Buttons with Spacing Between Icons */}
            <div className="d-flex justify-content-center w-50 mt-4 mb-4">
              <button className="btn btn-light p-3 mx-3" onClick={toggleMute} style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faMicrophone} size="2x" className={`text-${isMuted ? 'danger' : 'secondary'}`} />
              </button>
              <button className="btn btn-light p-3 mx-3" onClick={toggleVideo} style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faVideo} size="2x" className={`text-${isVideoOn ? 'primary' : 'secondary'}`} />
              </button>
              <button className="btn btn-light p-3 mx-3" onClick={toggleScreenShare} style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faDesktop} size="2x" className={`text-${isScreenSharing ? 'success' : 'secondary'}`} />
              </button>
              <button className="btn btn-danger p-3 mx-3" onClick={endMeeting} style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </button>
            </div>

            {/* Dynamic Meeting Information */}
            <div className="additional text-white mt-4">
              <p className='additional'><strong className='additional'>Meeting URL:</strong> {meetingUrl}</p>
            </div>
          </div>

          {/* Floating Action Buttons for Additional Features */}
          <div className="position-fixed bottom-0 end-0 mb-5 me-5">
            <button className="btn btn-outline-light rounded-circle p-3 shadow-lg" style={{ marginRight: '10px', width: '60px', height: '60px' }}>
              <FontAwesomeIcon icon={faComment} size="lg" />
            </button>
            <button className="btn btn-outline-light rounded-circle p-3 shadow-lg" style={{ width: '60px', height: '60px' }}>
              <FontAwesomeIcon icon={faUsers} size="lg" />
            </button>
          </div>
        </>
      )}
      
    </div>

<Meetingc/>
<Footer/>
</div>
   
  );
};

export default Meeting;

