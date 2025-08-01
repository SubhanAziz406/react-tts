



import React from 'react';
const ContactForm = ({ onSubmit }) => {
  return (
    <div
      className="single-settings-box contact-box overflow-hidden"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        marginBottom: '100px',
        padding: '20px',
      }}
    >
      <h4 className="title mb--30">Get in Touch</h4>
      <form
        action="#"
        className="rbt-profile-row rbt-default-form row row--15"
        onSubmit={onSubmit}
        style={{ maxWidth: '600px', width: '100%' }}
      >
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="firstname">Your Name</label>
            <input
              id="firstname"
              type="text"
              placeholder="Enter your name"
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Enter subject"
              required
              className="form-control"
            />
          </div>
        </div>
       
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="bio">Your Message</label>
            <textarea
              id="bio"
              cols="30"
              rows="5"
              placeholder="Write your message"
              required
              className="form-control"
            ></textarea>
          </div>
        </div>
        <div className="col-12 mt--20">
          <div className="form-group mb--0">
            <button className="btn btn-default" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

