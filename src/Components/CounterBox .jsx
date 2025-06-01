import React from 'react';
import CountUp from 'react-countup';

const CounterBox = ({ iconClass, end, label }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 mx-auto">
      <div className="counter text-center">
        <div className="counting-icon">
          <i className={`fa ${iconClass} fa-2x`}></i>
        </div>
        <span className="count">
          <CountUp start={0} end={end} duration={2} />
        </span>
        <h4>{label}</h4>
      </div>
    </div>
  );
};

export default CounterBox;