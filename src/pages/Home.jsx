import React from 'react';
import AISection from '../components/banner'; // Adjust the path as necessary
import Servicearea from '../components/Servicearea'; // Adjust the path as necessary
import RainbowServiceArea from '../components/Rainbowservice'
import PricingArea from '../components/Pricing'
import FAQSection from '../components/Faq'
import Footer from '../components/footer'
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import ServiceAreap from '../components/ServiceAreap'

const Home = () => {
  return (
    <div>
      <Header/>
      <AISection />
      <Servicearea />
      <RainbowServiceArea/>
      <PricingArea/>
      <ServiceAreap/>
      <FAQSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Home;
