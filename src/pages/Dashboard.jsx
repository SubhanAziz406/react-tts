




import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import DashboardHeader from '../components/Dheader';
import Dbanner from '../components/Dbanner'; // Adjust the path as necessary
import RainbowServiceArea from '../components/Rainbowservice';
import ServiceAreap from '../components/ServiceAreap';
import FAQSection from '../components/Faq';
import DFooter from '../components/DFooter';

const Dashboard = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook

  useEffect(() => {
    // Check if the user is logged in by looking for a token in localStorage
    const token = localStorage.getItem('token');  // Check for a token or other user session info

    // If there's no token, redirect to the signin page
    if (!token) {
      navigate('/signin');  // Redirect to the Signin page if not logged in
    }
  }, [navigate]);  

  return (
    <div id="__next">
      <DashboardHeader />
      <Dbanner />
    
      <RainbowServiceArea />
      <ServiceAreap />
      <FAQSection />
      <DFooter />
    </div>
  );
};

export default Dashboard;