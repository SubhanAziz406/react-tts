import React, { useState } from 'react';

const HelpFAQs = () => {
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
  <h3 className="title additional-help-class">Help & FAQs</h3>
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
                        question: 'What is a text-to-speech tool and how does it function?',
                        answer: 'A text-to-speech tool converts written text into spoken words, allowing you to hear the content instead of reading it.',
                      },
                      {
                        id: '2',
                        question: 'What types of text can I convert to speech?',
                        answer: 'You can convert any text, including documents, articles, and emails, into speech for easier listening.',
                      },
                      {
                        id: '3',
                        question: 'How often will I receive updates?',
                        answer: 'You will receive regular updates with new features and improvements based on user feedback.',
                      },
                      {
                        id: '4',
                        question: 'How can I contact support for help?',
                        answer: 'For any assistance, please reach out to our support team via email.',
                      },
                      {
                        id: '5',
                        question: 'Is my information kept private?',
                        answer: 'Yes, your information is secure and treated with the utmost confidentiality.',
                      },
                      {
                        id: '6',
                        question: 'Can the tool support multiple languages?',
                        answer: 'Absolutely! The tool is designed to work in various languages to accommodate a global audience.',
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

export default HelpFAQs;
