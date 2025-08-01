import React, { useState } from 'react';


const Voicefaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rbt-main-content mb-0">
      <div className="rbt-daynamic-page-content ">
        <div className="rbt-dashboard-content">
          <div className="banner-area">
            <div className="settings-area">
              <h3 className="title additional-help-class">Have Any Question?</h3>
            </div>
          </div>
          <div className="content-page pb--50">
            <div className="chat-box-list">
              <div className="content">
                <div className="rainbow-accordion-style accordion rainbow-section-gapBottom">
                  <div className="accordion" id="accordionExamplea">
                    {[ 
                      {
                        id: '1',
                        question: 'What is the Voice Changer and how does it work?',
                        answer: 'The Voice Changer allows you to modify your voice in real-time using advanced AI technology. You can choose from various voice effects like robot, alien, and more to transform your voice.',
                      },
                      {
                        id: '2',
                        question: 'Can I change my voice in any application?',
                        answer: 'Yes, the Voice Changer can be used in various applications, including gaming, streaming, and video conferencing. You can adjust your voice in real-time across multiple platforms.',
                      },
                      {
                        id: '3',
                        question: 'How can I control the type of voice effect generated?',
                        answer: 'You can customize the voice effect by selecting from presets or adjusting parameters like pitch, speed, tone, and modulation for a fully personalized sound.',
                      },
                      {
                        id: '4',
                        question: 'Are there different voice styles available?',
                        answer: 'Yes, the Voice Changer offers a variety of voice styles, such as deep voices, high-pitched voices, robotic voices, and more. You can experiment with a range of effects to match your needs.',
                      },
                      {
                        id: '5',
                        question: 'Is the Voice Changer service secure?',
                        answer: 'Yes, the service ensures that your voice transformations and any related data are handled securely, respecting your privacy and complying with data protection policies.',
                      },
                      {
                        id: '6',
                        question: 'Can I integrate Voice Changer into my multimedia projects?',
                        answer: 'Absolutely! The Voice Changer can be seamlessly integrated into your videos, podcasts, or live streams, enhancing the auditory experience with unique and fun voice effects.',
                      },
                    ].map((item, index) => (
                      <div className="accordion-item card" key={item.id}>
                        <h2 className="accordion-header card-header" id={`heading${item.id}`}>
                          <button
                            className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`collapse${item.id}`}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.id}`}
                          className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                          aria-labelledby={`heading${item.id}`}
                          data-bs-parent="#accordionExamplea"
                        >
                          <div className="accordion-body card-body">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voicefaq;
