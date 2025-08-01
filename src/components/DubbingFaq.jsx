import React, { useState } from 'react';

const DubbingFaq = () => {
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
              <h3 className="title additional-help-class">Have Any Questions?</h3>
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
                        question: 'What is Dubbing and how does it work?',
                        answer: 'Dubbing is the process of adding or replacing voices in a video or audio project. It uses advanced AI to synchronize the voice with the characters or content, allowing for multi-language support or voice replacement.',
                      },
                      {
                        id: '2',
                        question: 'Can I use dubbing in multiple languages?',
                        answer: 'Yes, you can choose from various languages and regional accents for dubbing to localize your content for global audiences.',
                      },
                      {
                        id: '3',
                        question: 'How can I control the voice style in dubbing?',
                        answer: 'You can customize the dubbing voice by adjusting pitch, speed, tone, and emotion to fit your content and characters perfectly.',
                      },
                      {
                        id: '4',
                        question: 'Are there different voice options for dubbing?',
                        answer: 'Yes, we offer a wide range of voice options including various accents, ages, and genders to suit the needs of your project.',
                      },
                      {
                        id: '5',
                        question: 'Is the Dubbing service secure and confidential?',
                        answer: 'Yes, we ensure that all dubbing files and related data are securely handled, respecting your privacy and complying with all relevant data protection regulations.',
                      },
                      {
                        id: '6',
                        question: 'Can I integrate Dubbing into my multimedia projects?',
                        answer: 'Absolutely! You can seamlessly integrate the dubbed audio into your videos, animations, podcasts, and more for a polished, professional result.',
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

export default DubbingFaq;
