import React from 'react';
import serviceIcon01 from '../assests/icons/service-icon-01.png';
import serviceIcon02 from '../assests/icons/service-icon-02.png';
import serviceIcon03 from '../assests/icons/service-icon-03.png';

const ServiceArea = () => {
  const services = [
    {
      icon: serviceIcon01,
      title: '100% No-Risk, Money Back Guarantee!',
      description: 'Refunds will be issued within 14 days from the purchase date',
    },
    {
      icon: serviceIcon02,
      title: 'Upgrade or Cancel Anytime',
      description: 'There are many variations of Lorem Ipsum available',
    },
    {
      icon: serviceIcon03,
      title: 'Not sure yet? Try the free version',
      description: 'Refunds will be issued within 14 days from the purchase date',
    },
  ];

  return (
    <div className="aiwave-service-area rainbow-section-gap">
      <div className="container">
        <div className="row row--15 service-wrapper">
          {services.map((service, index) => (
            <div 
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" 
              data-sal="slide-up" 
              data-sal-duration="700"
            >
              <div className="service service__style--1 aiwave-style text-center">
                <div className="icon">
                  <img 
                    alt="Service Image" 
                    loading="lazy" 
                    width="91" 
                    height="90" 
                    decoding="async" 
                    src={service.icon} 
                    className="img-fluid" // Ensures the image is responsive
                  />
                </div>
                <div className="content">
                  <h4 className="title w-600 light-mode-title dark-mode-title">{service.title}</h4>
                  <p className="additional-class b1 mb--0 light-mode-description dark-mode-description">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
