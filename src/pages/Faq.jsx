import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
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
    {
      id: '7',
      question: 'What platforms can I use the text-to-speech tool on?',
      answer: 'The tool is compatible with various platforms, including web, mobile, and desktop applications.',
    },
    {
      id: '8',
      question: 'Are there any limitations on text length?',
      answer: 'Yes, some versions of the tool may have limitations on the number of characters or words you can convert at one time.',
    },
    {
      id: '9',
      question: 'Can I customize the voice and speed of the speech?',
      answer: 'Yes, most tools allow you to select different voices and adjust the speed to suit your preferences.',
    },
    {
      id: '10',
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a free trial period for new users to test the features of the tool before committing to a subscription.',
    },
  ];

  return (
    <section>
      <div className="breadcrumb-area breadcarumb-style-1 pt--180 pb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h3 className="title h3">Get Started with a Free Quotation</h3>
                <ul className="page-list">
                  <li className="rainbow-breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="rainbow-breadcrumb-item active">Frequently Asked Questions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-main-content mb-0">
        <div className="rbt-daynamic-page-content">
          <div className="rbt-dashboard-content">
            <div className="banner-area">
              <div className="settings-area">
                <h3 className="description additional-class">Help & FAQs</h3>
              </div>
            </div>
            <div className="content-page pb--50">
              <div className="chat-box-list">
                <div className="content">
                  <div className="rainbow-accordion-style accordion rainbow-section-gapBottom">
                    <div className="accordion" id="accordionExamplea">
                      {faqItems.map((item, index) => (
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
      <ContactForm />
      <style jsx>{`
        @media (max-width: 768px) {
          .title {
            font-size: 1.5rem;
          }
          .accordion-button {
            font-size: 1rem;
            padding: 0.75rem;
          }
          .accordion-body {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;
