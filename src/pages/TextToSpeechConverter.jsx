
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faTrashAlt, faMicrophone, faDownload } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




import CONFIG from "../config/index"; 
import DashboardHeader from '../components/Dheader';
import Footer from '../components/footer'

import VoiceBoostSection from '../components/TexttoSpeech';
import Textfaq from '../components/Textfaq';
import ServiceArea from '../components/ServiceAreap';

const TextToSpeechConverter = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState('');
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const navigate = useNavigate(); // Initialize navigate using useNavigate

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await axios.get(`${CONFIG.baseURL}/api/voices`);
        const voicesData = response.data.voices;
        if (Array.isArray(voicesData)) {
          setVoices(voicesData);
          setSelectedVoiceId(voicesData[0]?.voice_id || ''); 
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching voices:", error);
        toast.error("Failed to fetch voices. Please try again later.");
      }
    };

    fetchVoices();
  }, []);

  const handleSpeak = () => {
    navigate('/signin'); // Immediately redirect to the Sign In page
  };
  

  const handleTextChange = (event) => setText(event.target.value);

  const handleClear = () => setText('');

  return (
    <div>
      <ToastContainer />
      <DashboardHeader />
      <section>
        <div>
          <div className="row justify-content-center">
            <div className="inner text-center mt-5">
              <div style={{ color: '#fff', padding: '20px', borderRadius: '8px', marginTop: '40px' }}>
              <h1 className="title display-one">
  Text to <span className="header-caption">
    <span className="cd-headline rotate-1">
      <span className="cd-words-wrapper">
        <b className="is-visible theme-gradient"><h1>Speech</h1></b>
        
      </span>
    </span>
   </span> <h1 >Converter</h1>
 </h1>
                <p>Type your text in the box below, choose a voice, adjust the rate and pitch, and click "Speak" to hear it aloud!</p>
                <div className="form-group breadcarumb-style-1" style={{ marginTop: '20px' }}>
                <textarea
                  cols="30"
                  rows="4"
                  placeholder="Enter your text..."
                  style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
                  value={text}
                  onChange={handleTextChange}
                />
                </div>
                <select
                  className="form-select mb-3"
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    height: '50px',
                    width: '250px',
                    fontWeight: 'bold',
                    border: '3px solid #765694', // Adjust the color code as needed
                    borderRadius: '8px', // Optional: add rounded corners
                  }}
                  value={selectedVoiceId}
                  onChange={(e) => setSelectedVoiceId(e.target.value)}
                >
                  {voices.map((voice) => (
                    <option key={voice.voice_id} value={voice.voice_id}>
                      {voice.name} ({voice.labels?.accent || 'Unknown'})
                    </option>
                  ))}
                </select>
                <div>
                  <label>
                    Rate:
                    <input type="range" min="0.1" max="2" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                  </label>
                  <label>
                    Pitch:
                    <input type="range" min="0" max="2" step="0.1" value={pitch} onChange={(e) => setPitch(Number(e.target.value))} />
                  </label>
                </div>
                <button className="btn-default color-blacked" style={{marginRight:'15px'}} onClick={handleSpeak}>
                  <FontAwesomeIcon icon={faVolumeUp} /> Speak
                </button>
                <button className="btn-default color-blacked" onClick={handleClear}>
                  <FontAwesomeIcon icon={faTrashAlt} /> Clear
                </button>
                {isAudioReady && (
                  <a href={audioUrl} download="converted_audio.mp3" className="btn btn-success mt-3">
                    <FontAwesomeIcon icon={faDownload} /> Download
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
     <VoiceBoostSection/>
      <Textfaq />
      <ServiceArea/>
      <Footer/>
    </div>
  );
};

export default TextToSpeechConverter;
