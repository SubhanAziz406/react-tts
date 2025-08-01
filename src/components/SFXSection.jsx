import React from "react";
import rain from '../assests/images/rain.jpg'
import sound from '../assests/images/sound.jpg'
import nature from '../assests/images/nature.jpg'
import thunder from '../assests/images/thunder.jpg'

const SFXSection = () => {
  return (
    <div className="container py-5" style={{marginTop:'45px'}}>
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">All SFX you need for your next blockbuster</h2>
        <p >
          Create distinctive sound effects directly from text descriptions, streamlining your audio production process
        </p>
      </div>

      {/* Cards Section */}
      <div className="row gy-4">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className=" border-0 text-center p-3 shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <img
                  src={rain}
                  alt="Instant generation"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h5 className="fw-bold" >Instant generation</h5>
              <p >
                Start generating and get four samples within seconds, speeding up your selection and workflow.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className=" border-0 text-center p-3 shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <img
                  src={sound}
                  alt="Precise control"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h5 className="fw-bold">Precise control</h5>
              <p >
                Add nuance to your sound effects through precise text descriptions, tailoring each effect to fit your
                scene.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className=" border-0 text-center p-3 shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <img
                  src={nature}
                  alt="Royalty free"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h5 className="fw-bold">Royalty free</h5>
              <p >
                Use our sound effects in your projects worry-free, with no licensing fees or royalties.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className=" border-0 text-center p-3 shadow-sm">
            <div className="card-body">
              <div className="mb-3">
                <img
                  src={thunder}
                  alt="Highest quality audio"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h5 className="fw-bold">Highest quality audio</h5>
              <p >
                Enjoy clear, high-fidelity sound that enhances your projects with realistic audio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SFXSection;
