import React, { useState } from 'react';
import Wavify from 'react-wavify';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="home" id="home" data-scroll-index="0">
      <div className="container">
        <div className="row">
          <div className="offset-lg-1 col-lg-10 offset-lg-1 home-content text-center mt-md-5 mt-sm-5">
            <h3 className="heading-tertiary mb-3">Digital Agency</h3>
            <h1 className="heading-primary mb-3">
              Best <span>Creative Agency</span> For your Needs
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel aut animi quam ducimus
              consequatur voluptas delectus, sapiente.
            </p>
            <a href="#0" className="button btn-hover btn-fill mt-5">More About &rarr;</a>
            <button
              className="button video-btn mt-5"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <i className={`fa fa-${isMenuOpen ? 'times' : 'play'}`}></i>
            </button>
          </div>
        </div>
      </div>
      <svg width="100%" height="80%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave">
        <title>Wave</title>
        <defs></defs>
        <path id="feel-the-wave" d="" />
      </svg>
      <svg width="100%" height="80%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="wave">
        <title>Wave</title>
        <defs></defs>
        <path id="feel-the-wave-two" d="" />
      </svg>
       <Wavify
        fill="#009933"
        paused={false}
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.15,
          points: 3
          
        }}
      />
    </header>
  );
}

export default Header;
