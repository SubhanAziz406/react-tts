import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';

import DashboardHeader from './components/Dheader';
import ServiceAreap from './components/ServiceAreap';
import Dpricing from './Dashboard/Dpricing';
import DTermsOfService from './Dashboard/DTermsOfService';
import Dcontact from './Dashboard/Dcontact';
import Dtexttospeech from './Dashboard/Dtexttospeech';
import DRefundPolicy from './Dashboard/DRefundPolicy';
import Dspeechtotext from './Dashboard/Dspeechtotext';
import DPrivacyPolicy from './Dashboard/DPrivacyPolicy';
import DMeeting from './Dashboard/DMeeting';
import DHistory from './Dashboard/DHistory';

import ProfileDetails from './components/ProfileDetails';
import Home from './pages/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import TextToSpeechConverter from './pages/TextToSpeechConverter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import PricingPage from './pages/PricingPage';
// import SpeechToTextConvert from './pages/SpeechToTextConvert';
// import GoogleTranslate from './pages/GoogleTranslate';
import Meeting from './pages/Meeting';
import Faq from './pages/Faq';
import TermsOfService from './pages/TermPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Dashboard from './pages/Dashboard';
import VoiceChanger from './pages/VoiceChanger';
import TextToSoundEffects from './pages/TextToSoundEffects';
import Dvoicechanger from './Dashboard/Dvoicechanger';
import Dsoundeffect from './Dashboard/Dsoundeffect';
import Dubbing from './pages/Dubbing';
import DaDubbing from './Dashboard/DaDubbing';
import SuccessPage from './pages/Successpage';
import CancelPage from './pages/Cancelpage';

const App = () => {
  const location = useLocation();
  
  const routes = [
    
    { path: '/', element: <Home />, showHeader: true },
    { path: '/Signin', element: <Signin />, showHeader: false },
    { path: '/Dashboard', element: <Dashboard />, showHeader: false },
    { path: '/Signup', element: <Signup />, showHeader: false },
    { path: '/TextToSpeechConverter', element: <TextToSpeechConverter />, showHeader: true },
    { path: '/PrivacyPolicy', element: <PrivacyPolicy />, showHeader: true },
    { path: '/Contact', element: <Contact />, showHeader: true },
    { path: '/PricingPage', element: <PricingPage />, showHeader: true },
    // { path: '/SpeechToTextConvert', element: <SpeechToTextConvert />, showHeader: true },
    { path: '/Meeting', element: <Meeting />, showHeader: true },
    // { path: '/GoogleTranslate', element: <GoogleTranslate />, showHeader: false },
    { path: '/Faq', element: <Faq />, showHeader: true },
    { path: '/TermsOfService', element: <TermsOfService />, showHeader: true },
    { path: '/RefundPolicy', element: <RefundPolicy />, showHeader: true },
    { path: '/DashboardHeader', element: <DashboardHeader />, showHeader: false },
    { path: '/ServiceAreap', element: <ServiceAreap />, showHeader: false },
    { path: '/ProfileDetails', element: <ProfileDetails />, showHeader: false },
    { path: '/Dtexttospeech', element: <Dtexttospeech />, showHeader: false },
    // { path: '/Dspeechtotext', element: <Dspeechtotext />, showHeader: false },
    { path: '/Dpricing', element: <Dpricing />, showHeader: false },
    { path: '/Dcontact', element: <Dcontact />, showHeader: false },
    { path: '/DTermsOfService', element: <DTermsOfService />, showHeader: false },
    { path: '/DRefundPolicy', element: <DRefundPolicy />, showHeader: false },
    { path: '/DPrivacyPolicy', element: <DPrivacyPolicy />, showHeader: false },
    { path: '/DMeeting', element: <DMeeting />, showHeader: false },
    { path: '/DHistory', element: <DHistory />, showHeader: false },
    { path: '/Dvoicechanger', element: <Dvoicechanger />, showHeader: false },
    { path: '/Dsoundeffect', element: <Dsoundeffect />, showHeader: false },
    { path: '/VoiceChanger', element: <VoiceChanger />, showHeader: true },
    { path: '/TextToSoundEffects', element: <TextToSoundEffects />, showHeader: true },
    { path: '/Dubbing', element: <Dubbing />, showHeader: true },
    { path: '/DaDubbing', element: <DaDubbing />, showHeader: false },
    { path: '/subscription-success', element: <SuccessPage />, showHeader: false },
    { path: '/cancel', element: <CancelPage />, showHeader: false },
    { path: '/DMeeting', element: <DMeeting />, showHeader: false },
  ];

  return (
    <div className="App">
      <ToastContainer />
      {/* Render Header based on the route configuration */}
      {routes.map((route) => 
        route.path === location.pathname && route.showHeader && <Header key={route.path} />
      )}
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
};

// Setting basename for correct routing in cPanel
const Wrapper = () => (
  <Router basename="/">
    <App />
  </Router>
);

export default Wrapper;
