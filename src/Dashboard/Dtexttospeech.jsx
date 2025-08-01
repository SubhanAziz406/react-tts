






import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faTrashAlt, faMicrophone, faDownload } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import VoiceBoostSection from '../components/TexttoSpeech';
import Textfaq from '../components/Textfaq';
import ServiceArea from '../components/ServiceAreap';
import CONFIG from "../config/index"; 
import DashboardHeader from '../components/Dheader';
import DFooter from '../components/DFooter';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook 

const Dspeechtotext = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState('');
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state
  const navigate = useNavigate(); // Hook to redirect users

  useEffect(() => {
    const fetchVoices = async () => {
      const token = localStorage.getItem('token');  // Adjust this key if necessary
if (!token) {
  navigate('/signin');  // Redirect to sign-in if no token is found
  return;
}
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
  }, [navigate]);

  useEffect(() => {
    



    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  const handleSpeak = async () => {
    if (!text || !selectedVoiceId) {
      toast.error("Please enter text and select a voice.");
      return;
    }

    setLoading(true);

    const payload = {
      voice_id: selectedVoiceId,
      text: text.trim(),
    };

    try {
      const response = await axios.post(`${CONFIG.baseURL}/api/text-to-speech`, payload, {
        responseType: 'arraybuffer',
        withCredentials: true,
      });

      const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(audioBlob);

      setAudioUrl(url);
      setIsAudioReady(true);

      const history = JSON.parse(localStorage.getItem('audioHistory')) || [];
      const newEntry = { text, url, date: new Date().toISOString() };
      localStorage.setItem('audioHistory', JSON.stringify([newEntry, ...history]));

      const audio = new Audio(url);
      audio.play();

      toast.success("Text-to-speech conversion successful!");
    } catch (error) {
      console.error("Error sending text-to-speech request:", error);
      toast.error("Failed to process the text-to-speech request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTextChange = (event) => setText(event.target.value);

  const handleClear = () => setText('');

  return (
    <div>
      <ToastContainer />
      <DashboardHeader />

      {loading && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
          }}
        >
          <div id="wifi-loader">
            <svg className="circle-outer" viewBox="0 0 86 86">
              <circle className="back" cx="43" cy="43" r="40"></circle>
              <circle className="front" cx="43" cy="43" r="40"></circle>
              <circle className="new" cx="43" cy="43" r="40"></circle>
            </svg>
            <svg className="circle-middle" viewBox="0 0 60 60">
              <circle className="back" cx="30" cy="30" r="27"></circle>
              <circle className="front" cx="30" cy="30" r="27"></circle>
            </svg>
            <svg className="circle-inner" viewBox="0 0 34 34">
              <circle className="back" cx="17" cy="17" r="14"></circle>
              <circle className="front" cx="17" cy="17" r="14"></circle>
            </svg>
            <div className="text" data-text="Processing..."></div>
          </div>
        </div>
      )}

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
                  style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ccc',  }}
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
                    border: '3px solid #765694',
                    borderRadius: '8px',
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
                   <div style={{marginLeft:'15px'}}>

                   <a href={audioUrl} download="converted_audio.mp3" className="btn-default color-blacked mt-3">
                    <FontAwesomeIcon icon={faDownload} /> Download
                  </a></div> 
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <VoiceBoostSection/>
      <Textfaq />
      <ServiceArea/>
      <DFooter/>
    </div>
  );
};

export default Dspeechtotext;

