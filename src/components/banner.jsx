// src/AISection.js
import React from 'react';

const AISection = () => {
  return (
    <div className="container ">
      <div className="row justify-content-center ">
        <div className="col-lg-12">
          <div className="inner text-center mt--140">
          <h1 className="title display-one Light">
  Unlock the Potential of<br />
  <span className="header-caption">
    <span className="cd-headline rotate-1">
      <span className="cd-words-wrapper">
        <b className="is-visible theme-gradient">Text to Speech</b>
        <b className="is-hidden theme-gradient">Speech to Speech</b>
        <b className="is-hidden theme-gradient">Text to SFX</b>
      </span>
    </span>
  </span>
  Voice Technology
</h1>

<p className="description additional-class" style={{ marginBottom: '30px' }}>
  Discover innovative solutions for transforming text and speech. 
  <br />
  Enhance your communication with our powerful voice tools.
</p>

            <div className="form-group breadcarumb-style-1" style={{ marginTop: '20px' }}>
              <textarea
                name="text"
                id="slider-text-area"
                cols="30"
                rows="2"
                placeholder="Enter your text or prompt, e.g., 'Convert this text to speech.'"
                style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
              ></textarea>
              
            </div>
            <div style={{marginTop:'15px'}}>
               <a className="btn-default color-blacked" href="TextToSpeechConverter">Start Exploring Now</a>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;
