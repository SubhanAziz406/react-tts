import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from '../components/Header';

const GoogleTranslate = () => {
  const [text, setText] = useState('');
  const [selectedLang, setSelectedLang] = useState('English');
  const [targetLang, setTargetLang] = useState('Spanish');
  const [translatedText, setTranslatedText] = useState('');

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Russian',
    'Italian',
    'Urdu',
  ];

  const simulateTranslation = (text, lang) => {
    switch (lang) {
      case 'Spanish':
        return `Traducción: ${text}`;
      case 'French':
        return `Traduction: ${text}`;
      case 'German':
        return `Übersetzung: ${text}`;
      case 'Chinese':
        return `翻译: ${text}`;
      case 'Japanese':
        return `翻訳: ${text}`;
      case 'Russian':
        return `Перевод: ${text}`;
      case 'Italian':
        return `Traduzione: ${text}`;
      case 'Urdu':
        return `ترجمہ: ${text}`;
      default:
        return text;
    }
  };

  const handleTranslate = () => {
    if (!text.trim()) {
      alert("Please enter some text to translate.");
      return;
    }
    const translated = simulateTranslation(text, targetLang);
    setTranslatedText(translated);
  };

  const handleClear = () => {
    setText('');
    setTranslatedText('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    alert("Copied to clipboard!");
  };

  return (
    <div style={{
      color: '#333',
      fontFamily: 'Roboto, sans-serif',
      margin: '0 auto',
      borderRadius: '15px',
      boxShadow: '0 4px 25px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f7f7f7',
      padding: '30px 0',
    }}>
      <Header />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1 className="text-center mb-4 mt-3" style={{ fontSize: '32px', color: '#333' }}>Text Translate Simulation</h1>
            </div>
            <div className="col-md-6">
              <div className="card shadow-lg mb-4" style={{ borderRadius: '20px', border: 'none' }}>
                <div className="card-body" style={{ backgroundColor: '#fff', padding: '20px' }}>
                  <textarea
                    className="form-control mb-3"
                    rows="6"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text"
                    aria-label="Input text for translation"
                    style={{
                      borderRadius: '10px',
                      resize: 'none',
                      padding: '15px',
                      backgroundColor: '#f4f4f4',
                      color: '#333',
                      border: '1px solid #ddd',
                      fontSize: '16px',
                    }}
                  />
                  <small className="text-muted">{text.length} characters</small>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
                    <select
                      className="form-control my-3"
                      value={selectedLang}
                      onChange={(e) => setSelectedLang(e.target.value)}
                      aria-label="Select source language for translation"
                      style={{ width: '200px', borderRadius: '8px', backgroundColor: '#f4f4f4' }}
                    >
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>

                    <select
                      className="form-control my-3"
                      value={targetLang}
                      onChange={(e) => setTargetLang(e.target.value)}
                      aria-label="Select target language for translation"
                      style={{ width: '200px', borderRadius: '8px', backgroundColor: '#f4f4f4' }}
                    >
                      {languages.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-primary btn-lg"
                      onClick={handleTranslate}
                      style={{
                        borderRadius: '20px',
                        padding: '10px 25px',
                        fontSize: '16px',
                      }}
                    >
                      Translate
                    </button>
                    <button
                      className="btn btn-danger btn-lg"
                      onClick={handleClear}
                      style={{
                        borderRadius: '20px',
                        padding: '10px 25px',
                        fontSize: '16px',
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-lg mb-4" style={{ borderRadius: '20px', border: 'none' }}>
                <div className="card-body">
                  <h2 style={{ color: '#333' }}>Translated Text:</h2>
                  <div className="border p-3" style={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '10px',
                    fontSize: '18px',
                    color: '#333',
                  }}>
                    {translatedText || 'Translation will appear here.'}
                  </div>
                  {translatedText && (
                    <button
                      className="btn btn-success btn-lg mt-3"
                      onClick={copyToClipboard}
                      style={{
                        borderRadius: '20px',
                        padding: '10px 25px',
                        fontSize: '16px',
                      }}
                    >
                      Copy to Clipboard
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleTranslate;
