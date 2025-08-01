import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assests/logo/logo.png"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between">
            {/* Logo and Newsletter Section */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="rainbow-footer-widget">
              <div className="logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "80px" }}
                />
              </Link>
            </div>
                <p className="b1 desc-text">
                  It has long been known that a reader's <br />
                  attention will be diverted from
                </p>
                <h6 className="subtitle">Join a Newsletter</h6>
                <form className="newsletter-form" action="#">
                  <div className="form-group d-flex">
                    <input type="email" className="form-control" placeholder="Enter Your Email Here" />
                    <button className="btn-default bg-solid-primary" type="submit">
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-2 col-md-6 col-sm-3">
              <div className="rainbow-footer-widget">
                <h4 className="title">Services</h4>
                <ul className="footer-link link-hover">
                <li><a href="/TextToSoundEffects">Text To Sound Effects</a></li>
                <li><a href="/TextToSpeechConverter">Text To Speech</a></li>
                  <li><a href="/VoiceChanger">Voice Changer</a></li>
                  <li><a href="/Dubbing">Dubbing</a></li>
                  <li><a href="/Meeting">Meeting</a></li>
                </ul>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-lg-2 col-md-6 col-sm-3">
              <div className="rainbow-footer-widget">
                <h4 className="title">Quick Links</h4>
                <ul className="footer-link link-hover">
                <li><a href="PrivacyPolicy">Privacy Policy</a></li>
                  <li><a href="Faq">FAQ Section</a></li>
                  <li><a href="PrivacyPolicy">Privacy Policy</a></li>
                  <li><a href="TermsOfService">Terms &amp; Policy</a></li>
                  <li><a href="RefundPolicy">Refund Policy</a></li>
                  
                  
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 col-md-6 col-sm-3">
              <div className="rainbow-footer-widget">
                <h4 className="title">Contact</h4>
                <ul className="footer-link contact-link">
                  <li>
                    <i className="contact-icon fa-regular fa-location-dot"></i>
                    <a >A B C Area </a>
                  </li>
                  <li>
                    <i className="contact-icon fa-sharp fa-regular fa-envelope"></i>
                    <a >example@domain.com</a>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
