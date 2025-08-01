



import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import ServiceAreap from "../components/ServiceAreap";
import Footer from "../components/footer";
import axios from "axios";
import CONFIG from "../config";
import DubbingSection from "../components/DubbingSection";
import DubbingFaq from "../components/DubbingFaq";

const Dubbing = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("");
  const [outputLanguage, setOutputLanguage] = useState("");
  const [stability, setStability] = useState(0.5);
  const [similarityBoost, setSimilarityBoost] = useState(0.5);
  const [generatedAudioURL, setGeneratedAudioURL] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Fetch supported languages from the backend
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(`${CONFIG.baseURL}/api/languages`);
        setLanguages(response.data.languages || []);
      } catch (error) {
        console.error("Error fetching languages:", error.message);
        toast.error("Failed to fetch supported languages.");
      }
    };

    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${CONFIG.baseURL}/api/auth/check-login`);
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    };

    fetchLanguages();
    checkLoginStatus();
  }, []);

  // Handle file upload
  const handleFileUpload = (event) => {
    if (!isLoggedIn) {
      toast.warn("Please sign in first.");
      navigate("/signin"); // Redirect to the sign-in page
      return;
    }

    const file = event.target.files[0];
    if (!file) return;

    setUploadedFile(file);
    setGeneratedAudioURL(null); // Reset previous generated audio
    toast.info("File uploaded successfully!");
  };

  const triggerFileInput = () => {
    if (!isLoggedIn) {
      toast.warn("Please sign in first.");
      navigate("/signin"); // Redirect to the sign-in page
      return;
    }
    document.getElementById("file-upload").click();
  };

  // Handle dubbing process
  const handleConvertVoice = async () => {
    if (!uploadedFile || !inputLanguage || !outputLanguage) {
      toast.error("Please upload a file and select both input and output languages.");
      return;
    }

    if (inputLanguage === outputLanguage) {
      toast.warning("Input and output languages cannot be the same.");
      return;
    }

    try {
      setLoading(true);
      setGeneratedAudioURL(null); // Clear the previous audio

      const formData = new FormData();
      formData.append("file", uploadedFile);
      formData.append("name", uploadedFile.name);
      formData.append("source_lang", inputLanguage);
      formData.append("target_lang", outputLanguage);
      formData.append("stability", stability);
      formData.append("similarity_boost", similarityBoost);

      // Call the backend dubbing API
      const response = await axios.post(`${CONFIG.baseURL}/api/dubbing`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "arraybuffer", // Expect binary audio data
      });

      if (response.status === 200) {
        // Convert array buffer to a Blob and generate a URL
        const blob = new Blob([response.data], { type: "audio/mpeg" });
        const url = URL.createObjectURL(blob);
        setGeneratedAudioURL(url); // Set the new audio URL
        toast.success("Dubbing completed successfully!");
      } else {
        throw new Error("Failed to generate dubbed audio.");
      }
    } catch (error) {
      console.error("Error generating dubbed audio:", error.message);
      toast.error("Failed to generate dubbed audio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />

      <section className="container">
        <div className="row justify-content-center align-items-center" style={{ padding: "60px 0", marginTop: "85px" }}>
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <div className="p-4" style={{ color: "#cec9c9", borderRadius: "8px" }}>
              <h1 className="title display-one text-center" style={{ marginLeft: "50px" }}>
                Voice
                <span className="header-caption" style={{ marginLeft: "30px" }}>
                  <span className="cd-headline rotate-1">
                    <span className="cd-words-wrapper">
                      <b className="is-visible theme-gradient">
                        <span>Dubbing</span>
                      </b>
                    </span>
                  </span>
                </span>
              </h1>

              <p className="mb-4">
                Upload a file, select its language, and choose the target language for dubbing.
              </p>

              {/* Upload File Section */}
              <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
                <button
                  className="btn-default color-blacked"
                  onClick={triggerFileInput}
                >
                  Upload File
                </button>
                <input
                  type="file"
                  id="file-upload"
                  accept="audio/*, video/*"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </div>

              {uploadedFile && (
                <>
                  {/* Select Input Language */}
                  <div className="mt-4">
                    <h5 className="mb-3">Select the language of the uploaded file:</h5>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          className={`btn ${
                            inputLanguage === language.code ? "btn-primary" : "btn-outline-primary"
                          }`}
                          onClick={() => setInputLanguage(language.code)}
                        >
                          {language.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Output Language */}
                  {inputLanguage && (
                    <div className="mt-4">
                      <h5 className="mb-3">Select the language for dubbing:</h5>
                      <div className="d-flex flex-wrap gap-3 justify-content-center">
                        {languages
                          .filter((language) => language.code !== inputLanguage)
                          .map((language) => (
                            <button
                              key={language.code}
                              className={`btn ${
                                outputLanguage === language.code ? "btn-success" : "btn-outline-success"
                              }`}
                              onClick={() => setOutputLanguage(language.code)}
                            >
                              {language.name}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Stability and Similarity Boost Sliders */}
                  {inputLanguage && outputLanguage && (
                    <div className="mt-4 text-center">
                      <h5>Stability</h5>
                      <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={stability}
                        onChange={(e) => setStability(parseFloat(e.target.value))}
                      />
                      <h5>Similarity Boost</h5>
                      <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={similarityBoost}
                        onChange={(e) => setSimilarityBoost(parseFloat(e.target.value))}
                      />
                    </div>
                  )}

                  {/* Generate Dubbed Audio Button */}
                  {inputLanguage && outputLanguage && (
                    <div className="mt-4">
                      <button className="btn btn-success" onClick={handleConvertVoice} disabled={loading}>
                        {loading ? "Generating..." : "Generate Dubbed Audio"}
                      </button>
                    </div>
                  )}

                  {/* Generated Audio Preview */}
                  {generatedAudioURL && (
                    <div className="mt-3 text-center">
                      <h5>Preview Dubbed Audio:</h5>
                      <audio controls>
                        <source src={generatedAudioURL} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                      </audio>
                      <a href={generatedAudioURL} download="dubbed_audio.mp3">
                        <button className="btn btn-success mt-3">Download Dubbed Audio</button>
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <DubbingSection />
      <DubbingFaq />
      <ServiceAreap />
      <Footer />
    </div>
  );
};

export default Dubbing;

