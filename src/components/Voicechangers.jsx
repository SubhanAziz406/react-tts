import React from "react";
import VoiceBoostImage from "../assests/images/Voice-change.jpg"; // Replace with the actual image path

const VoiceChangers = () => {
  return (
    <div
      className="container px-4 py-5 rounded-lg"
      style={{ marginTop: "25px", marginBottom: "15px" }}
    >
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={VoiceBoostImage}
            alt="Voice Changer Illustration"
            className="img-fluid rounded-lg shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className="mb-4">Transform Your Voice with AI</h2>
          <p className="mb-4">
            VoiceChanger gives you the power to change your voice using cutting-edge AI technology. 
            Whether you're looking to create unique character voices, disguise your identity, or add fun effects 
            to your recordings, VoiceChanger is the ultimate tool for creative voice manipulation.
          </p>

          {/* Subheading and Features */}
          <h4 className="mb-3">Why Choose VoiceChanger?</h4>
          <p className="mb-2">Real-time voice transformation with multiple presets.</p>
          <p className="mb-2">Create and customize unique voice effects instantly.</p>
          <p className="mb-2">Perfect for gaming, streaming, and content creation.</p>
          <p className="mb-2">Easy-to-use interface for fast setup and use.</p>
          <p className="mb-2">Compatible with all major platforms and apps.</p>
        </div>
      </div>
    </div>
  );
};

export default VoiceChangers;
