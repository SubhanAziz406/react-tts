import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section>
      <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h3 className="title h3">Get Started with a Free Quotation</h3>
                <ul className="page-list">
                  <li className="rainbow-breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="rainbow-breadcrumb-item active">Privacy & Policy</li>
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
                Welcome to VoiceBoost! Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our text-to-speech services. By using our site, you agree to the terms of this policy.
              </p>

              <h3 className='additional'>Information We Collect</h3>
              <p className='additional'>We may collect the following types of information:</p>
              <ul className='additional'>
  <li className='additional'>
    <strong>Personal Data:</strong> Information that identifies you personally, such as your name, email address, and any details you provide when creating an account or using our services.
  </li>
  <li className='additional'>
    <strong>Usage Data:</strong> Information collected automatically about how you access and use our website, including your IP address, browser type, device information, and pages visited.
  </li>
  <li className='additional'>
    <strong>Feedback:</strong> Information you provide in feedback forms or communications with us regarding our services.
  </li>
  <li className='additional'>
    <strong>Payment Information:</strong> If applicable, details necessary for processing payments, such as credit card information, will be securely stored and processed by our payment processor.
  </li>
</ul>


              <h3 className='additional'>How We Use Your Information</h3>
              <p className='additional'> We use the information we collect for various purposes, including:</p>
              <ul className='additional'>
                <li className='additional'>To provide and maintain our services, including processing your text-to-speech requests.</li>
                <li className='additional'>To improve, personalize, and expand our website and services.</li>
                <li className='additional'>To analyze usage patterns and enhance user experience.</li>
                <li className='additional'>To communicate with you, including responding to inquiries and sending updates.</li>
                <li className='additional'>To monitor the usage of our services for security and fraud prevention.</li>
                <li className='additional'>To send you marketing communications, with your consent.</li>
              </ul>

              <h3 className='additional'>Disclosure of Your Information</h3>
              <p className='additional'>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
              <ul className='additional'>
                <li className='additional'>To comply with legal obligations or respond to legal requests.</li>
                <li className='additional'>To protect our rights, privacy, safety, or property, or that of our users or the public.</li>
                <li className='additional'>To service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</li>
                <li className='additional'>In connection with any merger, sale of assets, or acquisition of all or a portion of our business.</li>
              </ul>

              <h3 className='additional'>Data Security</h3>
              <p className='additional'>
                We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h3 className='additional'>Your Rights</h3>
              <p className='additional'>You have the following rights regarding your personal information:</p>
              <ul className='additional'>
                <li className='additional'>Request access to your personal information.</li>
                <li className='additional'>Request correction of your personal information.</li>
                <li className='additional'>Request deletion of your personal information.</li>
                <li className='additional'>Opt-out of receiving marketing communications.</li>
                <li className='additional'>Withdraw consent at any time where we are relying on your consent to process your personal information.</li>
              </ul>

              <h3 className='additional'>Cookies</h3>
              <p className='additional'>
                Our website may use cookies and similar tracking technologies to enhance user experience. Cookies are small files placed on your device. You can choose to accept or decline cookies. If you decline, you may not be able to use the full functionality of our website. For more information on our use of cookies, please refer to our Cookie Policy.
              </p>

              <h3 className='additional'>Children’s Privacy</h3>
              <p className='additional'>
                VoiceBoost does not knowingly collect personally identifiable information from children under the age of 13. If we become aware that we have collected personal data from a child under 13, we will take steps to delete such information.
              </p>

              <h3 className='additional'>Changes to This Privacy Policy</h3>
              <p className='additional'>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. It is your responsibility to review this Privacy Policy periodically for any updates. Your continued use of our services following the posting of changes constitutes your acceptance of those changes.
              </p>

              <h3 className='additional'>Contact Us</h3>
              <p className='additional'>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
