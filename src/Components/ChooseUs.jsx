import React from 'react';
import ChooseCard from './ChooseCard';

function ChooseUs() {
  const services = [
    {
      image: 'public/img/choose-01.jpg',
      iconClass: 'fa-paint-brush',
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa dicta.',
    },
    {
      image: 'public/img/choose-02.jpg',
      iconClass: 'fa-desktop',
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula viverra.',
    },
    {
      image: 'public/img/choose-03.jpg',
      iconClass: 'fa-diamond',
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel aliquet quam.',
    },
  ];

  return (
    <section className="choose-us padding">
      <div className="container">
        <div className="row">
          <div className="choose-us_title text-center">
            <h2 className="heading-primary mb-5">What We Do</h2>
            <p className="mb-5">
              Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries.
            </p>
          </div>
          {services.map((service, index) => (
            <ChooseCard
              key={index}
              image={service.image}
              iconClass={service.iconClass}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
