


import React, { useState } from 'react';

const RainbowServiceArea = () => {
  const [activeTab, setActiveTab] = useState('text-to-speech');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="rainbow-service-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center pb--60">
              <h4 className="subtitle">
                <span className="theme-gradient">RAINBOW UNLOCKS THE POTENTIAL AI</span>
              </h4>
              <h2 className="title mb--0 additional-title-class">
                Generative AI made for <br /> creators.
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--30 align-items-center">
          <div className="col-lg-12">
            <div className="rainbow-default-tab style-three generator-tab-defalt">
              <ul className="nav nav-tabs tab-button" role="tablist">
                {['text-to-speech', 'voice-changer', 'text-to-sound', 'dubbing'].map((tab, index) => (
                  <li className="nav-item tabs__tab" role="presentation" key={tab}>
                    <button
                      className={`nav-link rainbow-gradient-btn without-shape-circle ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => handleTabChange(tab)}
                      type="button"
                    >
                      <span className="generator-icon d-flex align-items-center gap-2">
                        <i className={`bi ${['bi-mic', 'bi-arrow-repeat', 'bi-music-note', 'bi-film'][index]}`} style={{ fontSize: '1.5rem' }}></i>
                        {['Text to Speech', 'Voice Changer', 'Text to Sound', 'Dubbing'][index]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="rainbow-tab-content tab-content">
                {['text-to-speech', 'voice-changer', 'text-to-sound', 'dubbing'].map((tab, index) => (
                  <div className={`tab-pane fade ${activeTab === tab ? 'show active' : ''}`} id={tab} key={tab}>
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="section-title">
                            <h2 className="title">
                              {[ 
                                'Transform Text into Natural Speech Effortlessly',
                                'Change Your Voice with Real-Time Customization',
                                'Convert Text into High-Quality Sound Outputs',
                                'Seamless Dubbing for Your Multimedia Projects',
                              ][index]}
                            </h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                {[
                                  ['Multiple Voice Options', 'High-Quality Audio Output', 'Customizable Speech Speed', 'Easy Integration'],
                                  ['Real-Time Voice Effects', 'Multiple Voice Styles', 'User-Friendly Interface', 'AI-Enhanced Filters'],
                                  ['Natural Sound Quality', 'Multiple Language Support', 'Customizable Audio Outputs', 'Fast Processing'],
                                  ['High-Quality Synchronization', 'Multi-Language Dubbing', 'Voice Matching', 'Seamless Integration'],
                                ][index].map((feature) => (
                                  <li key={feature}>
                                    <i className="bi bi-check-circle"></i> {/* Bootstrap check icon */}
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="read-more">
                              <a className="btn-default color-blacked" href="Signin">
                                Start Exploring Now<i className="bi bi-arrow-right ps-2"></i> {/* Bootstrap arrow icon */}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 mt_md--30 mt_sm--30">
                          <div className="export-icon text-center">
                            <i
                              className={`bi ${['bi-mic', 'bi-arrow-repeat', 'bi-music-note', 'bi-film'][index]}`}
                              style={{ fontSize: '6rem' }} /* Large Bootstrap icons */
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainbowServiceArea;


