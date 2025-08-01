// src/RainbowServiceArea.js
import React from 'react';
// Import images
import serviceIcon01 from '../assests/icons/service-icon-01.png';
import serviceIcon02 from '../assests/icons/service-icon-02.png';
import serviceIcon03 from '../assests/icons/service-icon-03.png';
// import bgImage from '../assests/images/bg.png'; 
// import bgHoverImage from '../assests/images/bg-hover.png'; 

const RainbowServiceArea = () => {
  return (
    <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
      <div className="container">
        <div className="row text-center">
          <h3 className="title additional-help-class col-12">How It Works</h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped" style={cardStyle}>
              <div className="inner breadcarumb-style-1" style={{ flexGrow: 1 }}>
                <div className="icon">
                  <img alt="Service Icon" loading="lazy" width="48" height="48" src={serviceIcon01} />
                </div>
                <div className="description centered-shape">
                  <h5 className="title">Ask Anything</h5>
                  <p className="desc">
                    Lets users quickly find answers to their questions without having to search through multiple sources. Our platform provides instant responses to help you stay informed and efficient.
                  </p>
                </div>
              </div>
              <div className="bg-shaped">
                {/* <img alt="shape" className="bg" src={bgImage} /> */}
                {/* <img alt="shape" className="bg-hover" src={bgHoverImage} /> */}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped" style={cardStyle}>
              <div className="inner breadcarumb-style-1" style={{ flexGrow: 1 }}>
                <div className="icon">
                  <img alt="Service Icon" loading="lazy" width="48" height="48" src={serviceIcon02} />
                </div>
                <div className="description centered-shape">
                  <h5 className="title">Connect Everywhere</h5>
                  <p className="desc">
                    Lets users quickly find answers to their questions without having to search through multiple sources. Our service allows you to connect from any device, anywhere, ensuring seamless communication.
                  </p>
                </div>
              </div>
              <div className="bg-shaped">
                {/* <img alt="shape" className="bg" src={bgImage} /> */}
                {/* <img alt="shape" className="bg-hover" src={bgHoverImage} /> */}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped" style={cardStyle}>
              <div className="inner breadcarumb-style-1" style={{ flexGrow: 1 }}>
                <div className="icon">
                  <img alt="Service Icon" loading="lazy" width="48" height="48" src={serviceIcon03} />
                </div>
                <div className="description centered-shape">
                  <h5 className="title">Fast Responding</h5>
                  <p className="desc">
                    Lets users quickly find answers to their questions without having to search through multiple sources. Experience our rapid response system designed to enhance your productivity and decision-making.
                  </p>
                </div>
              </div>
              <div className="bg-shaped">
                {/* <img alt="shape" className="bg" src={bgImage} /> */}
                {/* <img alt="shape" className="bg-hover" src={bgHoverImage} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define a style object for card
const cardStyle = {
  padding: '30px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
};

export default RainbowServiceArea;
