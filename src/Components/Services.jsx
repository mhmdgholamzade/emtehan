import React, { useState, useEffect } from 'react';
function useServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    
    setServices([
      {
        icon: 'fa-cog',
        title: 'Highly Customisable',
        description: 'Offers extensive customisation options to meet diverse requirements.'
      },
      {
        icon: 'fa-desktop',
        title: 'Responsive Design',
        description: 'Ensures optimal viewing experience across various devices.'
      },
      {
        icon: 'fa-clock-o',
        title: 'Optimised for Speed',
        description: 'Designed for fast loading times and efficient performance.'
      },
      {
        icon: 'fa-lightbulb-o',
        title: 'Features & Plugins',
        description: 'Provides a rich set of features and plugin support.'
      },
      {
        icon: 'fa-pencil-square-o',
        title: 'Designs & Interfaces',
        description: 'Delivers intuitive and aesthetically pleasing user interfaces.'
      },
      {
        icon: 'fa-comment-o',
        title: 'Dedicated Support',
        description: 'Offers reliable and responsive customer support services.'
      }
    ]);
  }, []);

  return services;
}

function ServiceItem({ icon, title, description }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-10 mx-auto">
      <div className="content-box text-center">
        <div className="content-box-icon">
          <i className={`fa ${icon} fa-2x`}></i>
        </div>
        <h5 className="heading-secondary">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}


function Services() {
  const services = useServices();

  return (
    <section className="services padding" id="services" data-scroll-index="2">
      <div className="container">
        <div className="services_title text-center">
          <h2 className="heading-primary text-center mb-5">Our Services</h2>
          <p className="mb-5">
            We offer a range of high-quality services tailored to meet your needs.
          </p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
