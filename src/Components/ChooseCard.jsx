import React from 'react';

function ChooseCard({ image, iconClass, title, description }) {
  return (
    <div className="choose-item col-lg-4 col-md-6 mx-auto p-0 mt-5">
      <div className="choose">
        <img src={image} alt={title} />
        <div className="text-center">
          <i className={`icon fa ${iconClass} fa-2x`}></i>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseCard;
