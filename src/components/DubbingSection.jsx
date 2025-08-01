
// import React from "react";

// const DubbingSection = () => {
//   return (
//     <div className="container py-5" style={{ marginTop: '45px' }}>
//       {/* Heading Section */}
//       <div className="text-center mb-5">
//         <h2 className="fw-bold ">Explore Our Dubbing Features</h2>
//         <p>
//           High-quality, seamless dubbing services to take your content to the next level.
//         </p>
//       </div>

//       {/* Features Section */}
//       <div className="row gy-5">

//         {/* Feature 1 */}
//         <div className="col-md-3 text-center">
//           <div className="mb-3">
//             <img
//               src="https://via.placeholder.com/100x100"
//               alt="Instant Dubbing"
//               className="img-fluid rounded-circle"
//               style={{ maxWidth: '100px' }}
//             />
//           </div>
//           <h5 className="fw-bold">Instant Dubbing</h5>
//           <p>
//             Quickly convert text into professional voice-over dubbing within seconds.
//           </p>
//         </div>

//         {/* Feature 2 */}
//         <div className="col-md-3 text-center">
//           <div className="mb-3">
//             <img
//               src="https://via.placeholder.com/100x100"
//               alt="Precise Voice Control"
//               className="img-fluid rounded-circle"
//               style={{ maxWidth: '100px' }}
//             />
//           </div>
//           <h5 className="fw-bold">Precise Voice Control</h5>
//           <p>
//             Adjust voice parameters like pitch, speed, and tone for a fully customizable experience.
//           </p>
//         </div>

//         {/* Feature 3 */}
//         <div className="col-md-3 text-center">
//           <div className="mb-3">
//             <img
//               src="https://via.placeholder.com/100x100"
//               alt="Natural Sounding Voices"
//               className="img-fluid rounded-circle"
//               style={{ maxWidth: '100px' }}
//             />
//           </div>
//           <h5 className="fw-bold">Natural Sounding Voices</h5>
//           <p>
//             Create dubbing with voices that sound realistic and human-like for a seamless experience.
//           </p>
//         </div>

//         {/* Feature 4 */}
//         <div className="col-md-3 text-center">
//           <div className="mb-3">
//             <img
//               src="https://via.placeholder.com/100x100"
//               alt="Seamless Integration"
//               className="img-fluid rounded-circle"
//               style={{ maxWidth: '100px' }}
//             />
//           </div>
//           <h5 className="fw-bold">Seamless Integration</h5>
//           <p>
//             Easily integrate the dubbing into your videos, presentations, or podcasts.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DubbingSection;







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
        <h2 className="mb-4">Elevate Your Dubbing Experience</h2>
        <p className="mb-4">
          Transform the way you create audio with advanced AI-powered dubbing technology. Whether 
          you're localizing content, producing videos, or enhancing accessibility, our solution 
          ensures seamless and professional voiceovers with unmatched clarity and precision.
        </p>
  
        {/* Subheading and Features */}
        <h4 className="mb-3">Why Choose Our Dubbing Tool?</h4>
        <p className="mb-2">AI-powered voice synthesis for realistic and natural dubbing.</p>
        <p className="mb-2">Wide range of customizable voices to match diverse characters.</p>
        <p className="mb-2">Support for multilingual dubbing to reach global audiences.</p>
        <p className="mb-2">High-quality audio output that integrates effortlessly into your projects.</p>
        <p className="mb-2">Perfect for filmmakers, content creators, educators, and businesses.</p>
      </div>
  
      {/* Image Section */}
      <div className="col-12 col-md-6 text-center">
        <img
          src={VoiceBoostImage}
          alt="Dubbing Illustration"
          className="img-fluid rounded-lg shadow"
        />
      </div>
    </div>
  </div>
  
  );
};

export default VoiceBoostSection;

