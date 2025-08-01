import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import serviceIcon01 from '../assests/icons/service-icon-01.png';
import serviceIcon02 from '../assests/icons/service-icon-02.png';
import serviceIcon03 from '../assests/icons/service-icon-03.png';
import bgImage from '../assests/images/bg.png'; // Replace with actual path
import bgHoverImage from '../assests/images/bg-hover.png'; // Replace with actual path
import PricingArea from '../components/Pricing';
import ServiceAreap from '../components/ServiceAreap';
import Footer from '../components/footer';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const currentTranscript = event.results[0][0].transcript;
      setTranscript((prevTranscript) => `${prevTranscript} ${currentTranscript}`);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Error occurred in recognition: ' + event.error);
    };

    recognition.start();
  };

  const clearTranscript = () => {
    setTranscript('');
  };

  return (
    <div>
        
      <section>
        <div className="container">
          <div className="row ">
            <div className="inner  mt--140">
            <h1 className="text-center title display-one">Speech to Text Converter</h1>

              <div className="text-center mt-4">
                <button
                   className={`btn btn-default btn-${isListening ? 'danger' : 'primary'} me-4`}
                  onClick={isListening ? () => setIsListening(false) : handleSpeechRecognition}
                >
                  <i className={`fas fa-${isListening ? 'stop' : 'microphone'}`}></i>
                  {isListening ? ' Stop Listening' : ' Start Listening'}
                </button>
                <button
                  className="btn-default color-blacked"
                  onClick={clearTranscript}
                >
                  Clear Transcript
                </button>
              </div>
              <div className="mt-4">
              <h5 className="transcript-title">Transcript:</h5>

                <div className="form-group breadcarumb-style-1" style={{ marginTop: '20px' }}>
                  <textarea
                    name="text"
                    id="slider-text-area"
                    cols="30"
                    rows="5"
                    value={transcript}
                    readOnly
                    style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
                  ></textarea>
                </div>
              </div>
              <div className="mt-4">
  <h5 className="tips-title">Tips for Using Speech to Text:</h5>
  <ul className="tips-list">
    <li>Speak clearly and at a moderate pace for best results.</li>
    <li>Make sure you're in a quiet environment to minimize background noise.</li>
    <li>Use specific phrases to improve accuracy.</li>
  </ul>
</div>

            </div>
          </div>
        </div>
      </section>
      <section>
  <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
    <div className="container">
      <div className="row">
      <h3 className="title additional-help-class">How It's Work</h3>
      </div>
    </div>
    <div className="container">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4" style={{ padding: '20px' }}>
          <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped" style={{ padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="inner breadcarumb-style-1">
              <div className="icon">
                <img alt="Service Icon" loading="lazy" width="48" height="48" src={serviceIcon01} />
              </div>
              <div className="description centered-shape">
                <h5 className="title">Get Instant Transcriptions</h5>
                <p className="desc">
                  This feature helps users convert speech to text quickly and accurately, making it easy to capture spoken content without delay.
                </p>
              </div>
            </div>
            <div className="bg-shaped">
              <img alt="shape" className="bg" src={bgImage} />
              <img alt="shape" className="bg-hover" src={bgHoverImage} />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4" style={{ padding: '20px' }}>
          <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped" style={{ padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="inner breadcarumb-style-1">
              <div className="icon">
                <img alt="Service Icon" loading="lazy" width="48" height="48" src={serviceIcon02} />
              </div>
              <div className="description centered-shape">
                <h5 className="title">Seamless Dictation</h5>
                <p className="desc">
                  This feature allows users to dictate notes from any device, ensuring smooth and uninterrupted transcription, no matter where you are.
                </p>
              </div>
            </div>
            <div className="bg-shaped">
              <img alt="shape" className="bg" src={bgImage} />
              <img alt="shape" className="bg-hover" src={bgHoverImage} />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4" style={{ padding: '20px' }}>
          <div className="rainbow-box-card card-style-default aiwave-service-default has-bg-shaped" style={{ padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="inner breadcarumb-style-1">
              <div className="icon">
                <img alt="Service Icon" loading="lazy" width="48" height="48" src={serviceIcon03} />
              </div>
              <div className="description centered-shape">
                <h5 className="title">Rapid Speech Recognition</h5>
                <p className="desc">
                  This feature enhances productivity by providing quick and accurate speech recognition, streamlining your workflow and decision-making.
                </p>
              </div>
            </div>
            <div className="bg-shaped">
              <img alt="shape" className="bg" src={bgImage} />
              <img alt="shape" className="bg-hover" src={bgHoverImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<PricingArea/>
<ServiceAreap/>
<Footer/>




    </div>
  );
};

export default SpeechToText;
