

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CONFIG from "../config/index"; // Assuming CONFIG holds the baseURL for your API

import ServiceAreap from "../components/ServiceAreap";
import Footer from "../components/footer";
import SFXSection from "../components/SFXSection";
import Effectfaq from "../components/Effectfaq";

const TextToSoundEffectsPage = () => {
  const [textInput, setTextInput] = useState(""); // User input
  const [soundUrl, setSoundUrl] = useState(null); // Generated sound URL
  const [loading, setLoading] = useState(false); // Loading state
  const [duration, setDuration] = useState(5); // Duration of sound
  const [promptInfluence, setPromptInfluence] = useState(0.7); // Influence level
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state

  const navigate = useNavigate();

  useEffect(() => {
    // Check login status on page load
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${CONFIG.baseURL}/api/auth/check-login`, {
          headers: {
            Authorization: `Bearer ${CONFIG.apiKey}`,
          },
        });
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false); // Assume not logged in if there's an error
      }
    };

    checkLoginStatus();
  }, []);

  // Generate sound from text
  const handleGenerateSound = async () => {
    if (!isLoggedIn) {
      toast.warn("Please sign in first."); // Notify the user to sign in
      navigate("/signin"); // Redirect to sign-in page
      return;
    }

    if (!textInput.trim()) {
      toast.error("Please enter a valid text description.");
      return;
    }

    setLoading(true);
    setSoundUrl(null); // Reset previous sound URL

    try {
      const payload = {
        text: textInput.trim(),
        duration_seconds: duration,
        prompt_influence: promptInfluence,
      };

      const response = await axios.post(
        `${CONFIG.baseURL}/api/generate-sound`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "arraybuffer", // Expect binary audio data
        }
      );

      // Convert binary data to a blob URL
      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setSoundUrl(audioUrl); // Update the sound URL
      toast.success("Sound generated successfully!");
    } catch (error) {
      console.error("Error generating sound:", error);
      toast.error("Failed to generate sound. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer /> {/* React Toastify container for notifications */}

      {/* Header Section */}
      <header className="py-12">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-2xl font-extrabold text-gray-900" style={{ paddingTop: "20vh" }}>
            Transform Your Text into <br /> Stunning{" "}
            <span className="header-caption">
              <span className="cd-headline rotate-1">
                <span className="cd-words-wrapper">
                  <b className="is-visible theme-gradient">
                    <h1>Sound Effect</h1>
                  </b>
                </span>
              </span>
            </span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Create soundscapes and effects with just a few clicks.
          </p>
        </div>
      </header>

      <section className="py-5 d-flex justify-content-center align-items-center position-relative">
        {loading && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              zIndex: 1050, // Higher than other elements
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
              <div className="text" data-text="Generating"></div>
            </div>
          </div>
        )}

        <div
          className="container shadow-lg rounded"
          style={{
            background: "linear-gradient(135deg, #7690B5, #B976F9)",
          }}
        >
          <div className="row" style={{ marginTop: "25px", marginBottom: "18px" }}>
            {/* Textarea Section */}
            <div
              className="col-md-8 text-center text-md-start px-6"
              style={{
                paddingLeft: "10vh",
                paddingRight: "10vh",
                border: "none",
              }}
            >
              <textarea
                placeholder="Describe your sound here..."
                maxLength="100"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="form-control h-100"
                style={{
                  color: "black",
                  fontSize: "16px",
                }}
              ></textarea>
            </div>

            {/* Other Input Sections */}
            <div className="col-md-4 px-8 d-flex flex-column gap-3">
              <div className="d-flex flex-column align-items-start" style={{ width: "75%" }}>
                <label className="form-label mb-2" style={{ color: "black" }}>
                  Duration (seconds):
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="form-control w-100 border border-secondary rounded"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "black",
                  }}
                />
              </div>

              <div className="d-flex flex-column align-items-start" style={{ width: "75%" }}>
                <label className="form-label mb-2" style={{ color: "black" }}>
                  Prompt Influence:
                </label>
                <div className="d-flex align-items-center gap-2 w-100">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={promptInfluence}
                    onChange={(e) => setPromptInfluence(Number(e.target.value))}
                    className="form-range w-100"
                    style={{
                      backgroundColor: "#EFEFFF",
                    }}
                  />
                  <span
                    className="p-2 text-center border border-secondary rounded"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "black",
                    }}
                  >
                    {promptInfluence}
                  </span>
                </div>
              </div>

              {/* Generate Button Section */}
              <div className="mt-4" style={{ marginBottom: "15px", marginLeft: "115px" }}>
                <button
                  style={{ paddingTop: "10px" }}
                  onClick={handleGenerateSound}
                  disabled={loading}
                  className={`btn btn-lg ${
                    loading ? "btn-secondary disabled" : "btn-primary bg-gradient"
                  }`}
                >
                  {loading ? "Generating..." : "Generate"}
                </button>
              </div>
            </div>
          </div>

          {soundUrl && (
            <div
              className="mt-5 text-center p-4 border border-secondary rounded"
              style={{
                backgroundColor: "#EFEFFF",
                color: "black",
                marginBottom: "15px",
              }}
            >
              <h3 className="mb-3" style={{ color: "#B976F9" }}>
                Your Generated Sound:
              </h3>
              <audio controls src={soundUrl} className="mt-3"></audio>
              <a
                href={soundUrl}
                download="GeneratedSound.mp3"
                className="d-block mt-3 text-primary fw-bold text-decoration-underline"
              >
                Download Sound
              </a>
            </div>
          )}
        </div>
      </section>

      <SFXSection />
      <Effectfaq />
      <ServiceAreap />
      <Footer />
    </div>
  );
};

export default TextToSoundEffectsPage;



