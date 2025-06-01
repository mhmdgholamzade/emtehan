import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <a href="#home">
              <img src="public/img/logo.png" alt="Logo" className="logo" />
            </a>
            <h2 className="heading-tertiary mb-3">Creative Template</h2>
            <div className="social-links">
              <ul>
                <li><a href="#facebook"><i className="fa fa-facebook fa-fw"></i></a></li>
                <li><a href="#twitter"><i className="fa fa-twitter fa-fw"></i></a></li>
                <li><a href="#linkedin"><i className="fa fa-linkedin fa-fw"></i></a></li>
                <li><a href="#pinterest"><i className="fa fa-pinterest-p fa-fw"></i></a></li>
                <li><a href="#instagram"><i className="fa fa-instagram fa-fw"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="copyright">
              <h5>&copy; {new Date().getFullYear()} Creative Template. All Rights Reserved.</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
