

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const ContactPage = () => {
  return (
    <div id="__next">
      <main className="page-wrapper">
        <div className="header-top-news bg-image1">
          <div className="wrapper">
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
        </div>

        <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h3 className="title h3">Get Started with a free quotation</h3>
                  <ul className="page-list">
                    <li className="rainbow-breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="rainbow-breadcrumb-item active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="rainbow-contact-area rainbow-section-gapTop-big">
            <div className="container">
              <div className="row mt--40 row--15">
                <div className="col-lg-8">
                  <div className="contact-details-box">
                    <h3 className="title">Get Started with a free quotation</h3>
                    <div className="profile-details-tab">
                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="image-genarator" role="tabpanel" aria-labelledby="image-genarator-tab">
                          <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                            {['First Name', 'Last Name', 'User Name', 'Email'].map((label, index) => (
                              <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                                <div className="form-group">
                                  <label htmlFor={`input${index}`}>{label}</label>
                                  <input
                                    id={`input${index}`}
                                    type={label === 'Email' ? 'email' : 'text'}
                                    placeholder={label}
                                  />
                                </div>
                              </div>
                            ))}
                            <div className="col-12">
                              <div className="form-group">
                                <label htmlFor="bio1">Bio</label>
                                <textarea id="bio1" cols="20" rows="5" placeholder="Your bio here." />
                              </div>
                            </div>
                            <div className="col-12 mt--20">
                              <div className="form-group mb--0">
                                <Link className="btn-default" to="#">Update Info</Link>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mt_md--30 mt_sm--30">
                  <div className="rainbow-address">
                    <div className="icon">
                      <i className="fa-sharp fa-regular fa-location-dot"></i>
                    </div>
                    <div className="inner">
                      <h4 className="title">Location</h4>
                      <p className="b2">100 avenue of the moon, 12 new <br /> York, ny 1001B US.</p>
                    </div>
                  </div>
                  <div className="rainbow-address">
                    <div className="icon">
                      <i className="fa-sharp fa-regular fa-envelope"></i>
                    </div>
                    <div className="inner">
                      <h4 className="title">Our Email Address</h4>
                      <p className="b2"><a href="mailto:admin@gmail.com">admin@gmail.com</a></p>
                      <p className="b2"><a href="mailto:example@gmail.com">example@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default ContactPage;
