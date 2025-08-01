import React from 'react';
// import axios from "axios";
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CONFIG from "../config";
import Footer from '../components/footer';
const PricingPage = () => {

  const navigate = useNavigate();


  const handleGetStarted = async () => {
    navigate("/Signin"); // Redirect to Signin if not logged in
    return;

  
};




  return (
    <div id="__next">
      <main className="page-wrapper" >
 

        <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                <h3 className="title h3 light-theme">Pricing Plans For Everyone</h3>

                  <ul className="page-list">
                    <li className="rainbow-breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="rainbow-breadcrumb-item active">Pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" rainbow-section-gap">
          <div className="container-fluid">
            <div className="wrapper rainbow-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <h4 className="subtitle">
                        <span className="theme-gradient">Pricing</span>
                      </h4>
                      <h2 className="description additional-class">
                        Commence Content Journey with AI
                      </h2>
                      <p className="description additional-class">
                        Collaborate with AI to generate content that resonates.
                      </p>
                    </div>
                    <nav className="aiwave-tab">
                      <div
                        className="tab-btn-grp nav nav-tabs mb-3 text-center justify-content-center"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          className="nav-link"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="false"
                        >
                          Monthly
                        </button>
                        <button
                          className="nav-link active"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Yearly
                          <span className="rainbow-badge-card badge-border">-10%</span>
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
                <div
                  className="tab-content p-0 bg-transparent border-0 border bg-light"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row row--15 undefined">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
                        <div className="rainbow-pricing style-aiwave">
                          <div className="pricing-table-inner">
                            <div className="pricing-top">
                              <div className="pricing-header">
                                <div className="icon">
                                  <i className="fa-regular fa-circle-radiation"></i>
                                </div>
                                <h4 className="title color-var-one">Basic</h4>
                                <p className="subtitle">
                                  For large teams &amp; corporations
                                </p>
                                <div className="pricing">
                                  <span className="price-text">Free</span>
                                  <span className="text">/Per Month</span>
                                </div>
                              </div>
                              <div className="pricing-body">
                                <div className="features-section has-show-more active">
                                  <h6>Features</h6>
                                  <ul className="list-style--1 has-show-more-inner-content">
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      7,700 3-5 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa- regular fa-circle-check"></i>
                                      AI Blog Updates via dashboard &amp; slack
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      Advance Updates via dashboard &amp; slack
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="pricing-footer">
                              <Link className="btn-default btn-border" href="#">
                                Get Started
                              </Link>
                              <p className="bottom-text">Limited Offer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
                        <div className="rainbow-pricing style-aiwave active">
                          <div className="pricing-table-inner">
                            <div className="pricing-top">
                              <div className="pricing-header">
                                <div className="icon">
                                  <i className="fa-sharp fa-regular fa-flower"></i>
                                </div>
                                <h4 className="title color-var-two">Premium</h4>
                                <p className="subtitle">
                                  For large teams &amp; corporations
                                </p>
                                <div className="pricing">
                                  <span className="price-text">$60.50</span>
                                  <span className="text">/Per Month</span>
                                </div>
                              </div>
                              <div className="pricing-body">
                                <div className="features-section has-show-more">
                                  <h6>Features</h6>
                                  <ul className="list-style--1 has-show-more-inner-content">
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      12,700 7-9 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      7,700 3-5 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      AI Blog Updates via dashboard &amp; slack
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      Advance Updates via dashboard &amp; slack
                                    </li>
                                  </ul>
                                  <div className="rbt-show-more-btn">Show More</div>
                                </div>
                              </div>
                            </div>
                            <div className="pricing-footer">
                              <Link className="btn-default color-blacked" href="#">
                                Get Started
                              </Link>
                              <p className="bottom-text">Limited Offer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
                        <div className="rainbow-pricing style-aiwave">
                          <div className="pricing-table-inner">
                            <div className="pricing-top">
                              <div className="pricing-header">
                                <div className="icon">
                                  <i className="fa-sharp fa-regular fa-waveform-lines"></i>
                                </div>
                                <h4 className="title color-var-three">
                                  Enterprise
                                </h4>
                                <p className="subtitle">
                                  For large teams &amp; corporations
                                </p>
                                <div className="pricing">
                                  <span className="price-text">$80.50</span>
                                  <span className="text">/Per Month</span>
                                </div>
                              </div>
                              <div className="pricing-body">
                                <div className="features-section has-show-more">
                                  <h6>Features</h6>
                                  <ul className="list-style--1 has-show-more-inner-content">
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      12,700 7-9 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      7,700 3-5 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      AI Blog Updates via dashboard &amp; slack
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      Advance Updates via dashboard &amp; slack
                                    </li>
                                  </ul>
                                  <div className="rbt-show-more-btn">Show More</div>
                                </div>
                              </div>
                            </div>
                            <div className="pricing-footer">
                              <Link className="btn-default btn-border" href="#">
                                Get Started
                              </Link>
                              <p className="bottom-text">Limited Offer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade active show"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row row--15 undefined">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
                        <div className="rainbow-pricing style-aiwave">
                          <div className="pricing-table-inner">
                            <div className="pricing-top">
                              <div className="pricing-header">
                                <div className="icon">
                                  <i className="fa-regular fa-circle-radiation"></i>
                                </div>
                                <h4 className="title color-var-one">Basic</h4>
                                <p className="subtitle">
                                  For large teams &amp; corporations
                                </p>
                                <div className="pricing">
                                  <span className="price-text">Free</span>
                                  <span className="text">/Per Year</span>
                                </div>
                              </div>
                              <div className="pricing-body">
                                <div className="features-section has-show-more active">
                                  <h6>Features</h6>
                                  <ul className="list-style--1 has-show-more-inner-content">
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      7,700 3-5 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      AI Blog Updates via dashboard &amp; slack
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      Advance Updates via dashboard &amp; slack
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="pricing-footer">
  <button
    className="btn-default color-blacked inline-flex items-center justify-center mx-auto"
    onClick={() => handleGetStarted('price_premium')}
  >
    Get Started
  </button>
  <p className="bottom-text">Limited Offer</p>
</div>

                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
                        <div className="rainbow-pricing style-aiwave active">
                          <div className="pricing-table-inner">
                            <div className="pricing-top">
                              <div className="pricing-header">
                                <div className="icon">
                                  <i className="fa-sharp fa-regular fa-flower"></i>
                                </div>
                                <h4 className="title color-var-two">Premium</h4>
                                <p className="subtitle">
                                  For large teams &amp; corporations
                                </p>
                                <div className="pricing">
                                  <span className="price-text">$499.00</span>
                                  <span className="text">/Per Year</span>
                                </div>
                              </div>
                              <div className="pricing-body">
                                <div className="features-section has-show-more">
                                  <h6>Features</h6>
                                  <ul className="list-style--1 has-show-more-inner-content">
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      12,700 7-9 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5 + Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      7,700 3-5 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      AI Blog Updates via dashboard &amp; slack
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      Advance Updates via dashboard &amp; slack
                                    </li>
                                  </ul>
                                  
                                </div>
                              </div>
                            </div>
                            <div className="pricing-footer">
  <button
    className="btn-default color-blacked inline-flex items-center justify-center mx-auto"
    onClick={() => handleGetStarted('price_premium')}
    
  >
    Get Started
  </button>
  <p className="bottom-text">Limited Offer</p>
</div>

                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-12 mt--30">
                        <div className="rainbow-pricing style-aiwave">
                          <div className="pricing-table-inner">
                            <div className="pricing-top">
                              <div className="pricing-header">
                                <div className="icon">
                                  <i className="fa-sharp fa-regular fa-waveform-lines"></i>
                                </div>
                                <h4 className="title color-var-three">
                                  Enterprise
                                </h4>
                                <p className="subtitle">
                                  For large teams &amp; corporations
                                </p>
                                <div className="pricing">
                                  <span className="price-text">$599.00</span>
                                  <span className="text">/Per Year</span>
                                </div>
                              </div>
                              <div className="pricing-body">
                                <div className="features-section has-show-more">
                                  <h6>Features</h6>
                                  <ul className="list-style--1 has-show-more-inner-content">
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      12,700 7-9 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      7,700 3-5 day turnaround
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      6+ Naive development
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      5+ Task delivered one-by-one
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      AI Blog Updates via dashboard &amp; slack
                                    </li>
                                    <li>
                                      <i className="fa-regular fa-circle-check"></i>
                                      Advance Updates via dashboard &amp; slack
                                    </li>
                                  </ul>
                                  <div className="rbt-show-more-btn">Show More</div>
                                </div>
                              </div>
                            </div>
                            <div className="pricing-footer">
  <button
    className="btn-default color-blacked inline-flex items-center justify-center mx-auto"
    onClick={() => handleGetStarted('price_premium')}
  >
    Get Started
  </button>
  <p className="bottom-text">Limited Offer</p>
</div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm/>
        <Footer/>
      </main>
    </div>
  );
};

export default PricingPage;