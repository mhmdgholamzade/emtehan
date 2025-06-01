import React from 'react';

function ContactInfoBox({ icon, title, children }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-8 mx-auto">
      <div className="contact-info">
        <i className={`fa ${icon} fa-fw`}></i>
        <h5><span>{title}:</span></h5>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default ContactInfoBox;
