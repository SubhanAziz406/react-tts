import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/Dheader';

const DRefundPolicy = () => {

   const navigate = useNavigate(); // Hook to redirect users
    
      useEffect(() => {
        const token = localStorage.getItem('token'); // Adjust this key if necessary
        if (!token) {
          navigate('/signin'); // Redirect to sign-in if no token is found
        }
      }, [navigate]);
  return (
    <section>
        <DashboardHeader/>
      <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h3 className="title h3">Get Started with a Free Quotation</h3>
                <ul className="page-list">
                  <li className="rainbow-breadcrumb-item">
                    <a href="/Dashboard">Home</a>
                  </li>
                  <li className="rainbow-breadcrumb-item active">Refund Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="inner mt--140">
            <div style={styles.container}>
              <p className='additional'>Last updated: 10-12-24</p>

              <h3 className='additional'>Introduction</h3>
              <p className='additional'>
                Welcome to VoiceBoost! This Refund Policy outlines our practices regarding refunds for our services. By using our services, you agree to the terms of this policy.
              </p>

              <h3 className='additional'>Refund Eligibility</h3>
              <p className='additional'>Refunds may be requested under the following circumstances:</p>
              <ul className='additional'>
                <li className='additional'>Services were not delivered as promised.</li>
                <li className='additional'>Technical issues prevented you from using the service.</li>
                <li className='additional'>Any other valid reason as determined by our customer support.</li>
              </ul>

              <h3 className='additional'>Requesting a Refund</h3>
              <p className='additional'>If you believe you are eligible for a refund, please contact our customer support within 7 business days of the purchase date. Provide your order details and the reason for the refund request.</p>

              <h3 className='additional'>Processing Refunds</h3>
              <p className='additional'>Once your refund request is received, we will review it and notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original payment method within a certain amount of days.</p>

              <h3 className='additional'>Exclusions</h3>
              <p className='additional'>Refunds may not be applicable in the following situations:</p>
              <ul className='additional'>
                <li className='additional'>If the service has been used beyond the initial trial period.</li>
                <li className='additional'>Requests made after the 7 business days from the purchase date.</li>
                <li className='additional'>Failure to comply with our Terms of Service.</li>
              </ul>

              <h3 className='additional'>Changes to This Refund Policy</h3>
              <p className='additional'>We may update this Refund Policy from time to time. We will notify you of any changes by posting the new policy on this page. Your continued use of our services after changes are posted constitutes your acceptance of those changes.</p>

              <h3 className='additional'>Contact Us</h3>
              <p className='additional'>If you have any questions about this Refund Policy, please contact us:</p>
              <ul className='additional'>
                <li className='additional'>Email: support@voiceboost.ai</li>
                <li className='additional'>Website: www.voiceboost.ai</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    lineHeight: '1.6',
  },
};

export default DRefundPolicy;
