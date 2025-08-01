import React, { useState } from 'react';

const Textfaq = () => {
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
                        question: 'What is Text-to-Speech (TTS) technology?',
                        answer: 'Text-to-Speech (TTS) technology converts written text into spoken words, enabling users to listen to the content instead of reading it.',
                      },
                      {
                        id: '2',
                        question: 'Which formats can I use for Text-to-Speech conversion?',
                        answer: 'You can convert a wide range of text formats including PDFs, Word documents, web pages, and emails into speech.',
                      },
                      {
                        id: '3',
                        question: 'Can I adjust the speed of the speech?',
                        answer: 'Yes, the TTS tool allows you to adjust the speech speed to suit your preference for a more customized listening experience.',
                      },
                      {
                        id: '4',
                        question: 'How do I choose different voices?',
                        answer: 'The tool provides a variety of voice options, including male, female, and different accents. You can select the one that fits your preference.',
                      },
                      {
                        id: '5',
                        question: 'Is my personal data safe when using the TTS service?',
                        answer: 'Yes, we prioritize the security of your personal data and ensure that it is stored and processed in compliance with privacy regulations.',
                      },
                      {
                        id: '6',
                        question: 'Does the tool support multiple languages?',
                        answer: 'Yes, the TTS service supports several languages and can handle multilingual content to cater to a global audience.',
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

export default Textfaq;
