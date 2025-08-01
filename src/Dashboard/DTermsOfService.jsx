import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/Dheader';

const DTermsOfService = () => {
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
                  <li className="rainbow-breadcrumb-item active">Terms of Service</li>
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
                Welcome to VoiceBoost! These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <h3 className='additional'>Eligibility</h3>
              <p className='additional'>You must be at least 13 years old to use our services. By using our services, you represent that you meet this requirement.</p>

              <h3 className='additional'>Account Creation</h3>
              <p className='additional'>To access certain features of our services, you may need to create an account. You agree to provide accurate and complete information during registration and to update such information to keep it accurate and complete.</p>

              <h3 className='additional'>Use of Services</h3>
              <p className='additional'>You agree to use our services only for lawful purposes and in accordance with these Terms. You will not:</p>
              <ul className='additional'>
                <li className='additional'>Use the services in any way that violates any applicable federal, state, local, or international law.</li>
                <li className='additional'>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services.</li>
                <li className='additional'>Introduce any viruses, Trojan horses, worms, or other material that is malicious or technologically harmful.</li>
              </ul>

              <h3 className='additional'>Intellectual Property</h3>
              <p className='additional'>All content provided through our services, including text, graphics, logos, and software, is the property of VoiceBoost or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>

              <h3 className='additional'>Limitation of Liability</h3>
              <p className='additional'>To the fullest extent permitted by law, VoiceBoost shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses.</p>

              <h3 className='additional'>Termination</h3>
              <p className='additional'>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>

              <h3 className='additional'>Governing Law</h3>
              <p className='additional'>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>

              <h3 className='additional'>Changes to These Terms</h3>
              <p className='additional'> We may update these Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes. Your continued use of our services after the posting of changes constitutes your acceptance of those changes.</p>

              <h3 className='additional'>Contact Us</h3>
              <p className='additional'>If you have any questions about these Terms, please contact us:</p>
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

export default DTermsOfService;
