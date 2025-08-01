

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { ReactMic } from "react-mic"; // Import ReactMic
import "../css/mode.css";

import ServiceAreap from "../components/ServiceAreap";
import Footer from "../components/footer";
import CONFIG from "../config/index";
import VoiceChangers from "../components/Voicechangers";
import Voicefaq from "../components/VoiceChangerfaq";

const VoiceChanger = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoiceId, setSelectedVoiceId] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [generatedAudioURL, setGeneratedAudioURL] = useState(null); // Generated audio state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

  const navigate = useNavigate();

  useEffect(() => {
    // Check login status
    const checkLogin = async () => {
      try {
        const response = await axios.get(`${CONFIG.baseURL}/api/auth/check-login`, {
          headers: {
            Authorization: `Bearer ${CONFIG.apiKey}`,
          },
        });
        setIsLoggedIn(response.data.isLoggedIn); // Update login status
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false); // Assume not logged in if there's an error
      }
    };

    checkLogin();

    const fetchVoices = async () => {
      try {
        const response = await axios.get(`${CONFIG.baseURL}/api/voices`, {
          headers: {
            Authorization: `Bearer ${CONFIG.apiKey}`,
          },
        });
        const voicesData = response.data.voices;
        if (Array.isArray(voicesData)) {
          setVoices(voicesData);
          setSelectedVoiceId(voicesData[0]?.voice_id || ""); // Default to the first voice
        } else {
          throw new Error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching voices:", error);
      }
    };

    fetchVoices();
  }, []);

  const handleConvertVoice = async (file) => {
    if (!isLoggedIn) {
      toast.warn("Please sign in to use this feature."); // Notify user to sign in
      navigate("/signin"); // Redirect to sign-in page
      return;
    }

    if (!file || !selectedVoiceId) {
      return;
    }

    const formData = new FormData();
    formData.append("audio", file);
    formData.append("voice_id", selectedVoiceId);
    formData.append("stability", 0.5);
    formData.append("similarity_boost", 0.5);

    try {
      const response = await axios.post(
        `${CONFIG.baseURL}/api/speech-to-speech`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "arraybuffer",
        }
      );

      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setGeneratedAudioURL(audioUrl); // Save the generated audio URL
    } catch (error) {
      console.error("Error processing voice:", error);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    setRecordedAudio(null);
    setGeneratedAudioURL(null); // Clear previous generated audio
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordedAudio(null);
    setGeneratedAudioURL(null); // Clear previous generated audio
  };

  const handleStopRecording = (recordedData) => {
    setIsRecording(false);
    setRecordedAudio(recordedData.blob);
  };

  const handleClear = () => {
    setUploadedFile(null);
    setRecordedAudio(null);
    setGeneratedAudioURL(null); // Clear generated audio
  };

  const handleVoiceSelect = (voice) => {
    setSelectedVoiceId(voice.voice_id);
    setGeneratedAudioURL(null); // Clear the generated audio when voice changes
  };

  return (
    <div>
      <ToastContainer />
      <section>
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "100vh", padding: "60px 0" }}
        >
          <div className="inner text-center">
            <h1 className="title display-one text-gray-900 text-xl sm:text-3xl lg:text-5xl">
              AI-Powered{" "}
              <span
                className="title display-one "
                style={{ color: "#B976F9" }}
              ></span>{" "}
              Voice <br />{" "}
              <span className="header-caption">
                <span className="cd-headline rotate-1">
                  <span className="cd-words-wrapper">
                    <b className="is-visible theme-gradient">
                      <h1>Change over</h1>
                    </b>
                  </span>
                </span>
              </span>{" "}
              Tool
            </h1>
            <p className=" text-gray-900 text-sm sm:text-base">
              From natural accents to character voices, explore them all.
            </p>
            <div
              className="text-center mx-auto mt-6 px-4 sm:px-6 py-6 sm:py-8 rounded-lg shadow-lg"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
                color: "#cec9c9",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #805AF5, #E0C3FC)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "65%",
              }}
            >
              <p className="mb-4" style={{ color: "black" }}>
                Record your voice, upload a file, or choose a voice model to
                convert your audio.
              </p>

              <ReactMic
                record={isRecording}
                className="sound-wave md:flex md:shrink-0"
                onStop={handleStopRecording}
                mimeType="audio/webm"
                strokeColor="#000000"
                backgroundColor="#f9f9f9"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  width: "90%",
                  maxWidth: "600px",
                  minWidth: "280px",
                  height: "100px",
                  margin: "10px auto",
                }}
              />

              <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    document.getElementById("audio-upload").click()
                  }
                  style={{
                    color: "white",
                    background: "transparent",
                    border: "2px solid #805AF5",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#805AF5";
                    e.target.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "white";
                  }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-upload" /> Upload File
                </button>
                <input
                  type="file"
                  id="audio-upload"
                  accept="audio/*"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
                {!isRecording ? (
                  <button
                    className="btn btn-primary"
                    onClick={handleStartRecording}
                    style={{
                      fontSize: "16px",
                      padding: "10px 16px",
                      background: "#805AF5",
                      color: "white",
                      border: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.background = "#5A39B4")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.background = "#805AF5")
                    }
                  >
                    <FontAwesomeIcon icon={faMicrophone} /> Record Voice
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => setIsRecording(false)}
                    style={{ fontSize: "20px", padding: "10px 20px" }}
                  >
                    Stop Recording
                  </button>
                )}
              </div>

              {(uploadedFile || recordedAudio) && (
                <button
                  className="btn btn-danger mt-3"
                  onClick={handleClear}
                  style={{ fontSize: "14px", padding: "8px 12px" }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Clear
                </button>
              )}

              {(uploadedFile || recordedAudio) && voices.length > 0 && (
                <div className="mt-4">
                  <h5
                    className="mb-3 text-center text-black text-sm sm:text-base"
                    style={{ color: "black" }}
                  >
                    Select a Voice:
                  </h5>
                  <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {voices.map((voice) => (
                      <button
                        key={voice.voice_id}
                        className={`btn ${
                          selectedVoiceId === voice.voice_id
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        onClick={() => {
                          handleVoiceSelect(voice);
                          handleConvertVoice(uploadedFile || recordedAudio);
                        }}
                      >
                        {voice.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {generatedAudioURL && (
                <div className="mt-3 text-center">
                  <h5 className="text-black">Generated Audio:</h5>
                  <audio controls>
                    <source src={generatedAudioURL} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <VoiceChangers />
      <Voicefaq />
      <ServiceAreap />
      <Footer />
    </div>
  );
};

export default VoiceChanger;
