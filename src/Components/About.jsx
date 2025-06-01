
import React from 'react';
import CounterBox from './CounterBox .jsx';

function About() {
  return (
    <section className="about padding" id="about" data-scroll-index="1">
      <div className="container">
        <div className="row">
         
          <div className="col-lg-6 mt-lg-5">
            <div className="img-background"></div>
            <img src="img/about.jpg" className="about-img" alt="about-picture" />
          </div>

         
          <div className="col-lg-6 mt-md-5 mt-sm-5 mt-0 about-content">
            <h2 className="heading-primary mb-5">About Us</h2>
            <h3 className="heading-tertiary mt-3 mb-4">Who We Are</h3>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel aut animi quam ducimus
              consequatur voluptas delectus, sapiente, explicabo nam quasi! Corporis ipsum quae repellendus
              molestias.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem suscipit ex quasi
              in iure dolorem cupiditate corrupti ducimus ipsa.
            </p>
            <a href="#0" className="button btn-hover btn-fill mt-5">Read More &rarr;</a>

           
            <div className="counts">
              <div className="row">
                <CounterBox iconClass="fa-rocket" end={500} label="Completed Projects" />
                <CounterBox iconClass="fa-trophy" end={250} label="Digital Design Awards" />
                <CounterBox iconClass="fa-users" end={980} label="Satisfied Customers" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
