
// import React from "react";
// import VoiceBoostImage from "../assests/images/text-to-speech.jpg"; // Replace with the actual image path

// const VoiceBoostSection = () => {
//   return (
//     <div class="container px-4 py-5  rounded-lg" style={{marginTop:'25px',marginBottom:'15px'}}>
//     <div class="row align-items-center">
      
//       <div class="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
//         <h2 class="display-4  mb-4">
//           Unlock the Potential of Your Voice
//         </h2>
//         <p class=" lead">
//           VoiceBoost enhances your audio experience with advanced AI-powered
//           text-to-speech technology, delivering precision and clarity in every word.
//         </p>
//       </div>
  
     
//       <div class="col-12 col-md-6 text-center">
//         <img
//           src={VoiceBoostImage} 
//           alt="VoiceBoost Illustration"
//           class="img-fluid rounded-lg shadow"
//         />
//       </div>
//     </div>
//   </div>
  

//   );
// };

// export default VoiceBoostSection;

import React from "react";
import VoiceBoostImage from "../assests/images/text-to-speech.jpg"; // Replace with the actual image path

const VoiceBoostSection = () => {
  return (
    <div
      className="container px-4 py-5 rounded-lg"
      style={{ marginTop: "25px", marginBottom: "15px" }}
    >
      <div className="row align-items-center">
        
        {/* Text Section */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h2 className="mb-4">Unlock the Potential of Your Voice</h2>
          <p className="mb-4">
            VoiceBoost enhances your audio experience with advanced AI-powered text-to-speech
            technology, delivering precision and clarity in every word. Whether you're creating
            content, improving accessibility, or simply exploring new ways to engage, VoiceBoost
            is your ultimate tool for voice transformation.
          </p>

          {/* Subheading and Features */}
          <h4 className="mb-3">Why Choose VoiceBoost?</h4>
          <p className="mb-2">AI-driven speech synthesis for natural-sounding voices.</p>
          <p className="mb-2">Customizable voice settings to match your brand's tone.</p>
          <p className="mb-2">High-quality audio output with crystal-clear clarity.</p>
          <p className="mb-2">Seamless integration into your workflow with multiple formats.</p>
          <p className="mb-2">Perfect for content creators, educators, and businesses.</p>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img
            src={VoiceBoostImage}
            alt="VoiceBoost Illustration"
            className="img-fluid rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default VoiceBoostSection;
