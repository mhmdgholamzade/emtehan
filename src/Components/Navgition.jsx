import React from 'react';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#home">
        <img src="public/img/logo.png" alt="header-logo" className="logo" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="icon-bar">
          <i className="fa fa-bars fa-2x"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto line">
          {[
            ['Home', 0],
            ['About', 1],
            ['Services', 2],
            ['Work', 3],
            ['Team', 4],
            ['Price', 5],
            ['Blog', 6],
            ['Contact', 7],
          ].map(([label, index]) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={`#${label.toLowerCase()}`} data-scroll-nav={index}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
