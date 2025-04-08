import React from 'react';

const Step = ({ number, title, children, id }) => {
  return (
    <div className="step" id={id}>
      <div className="step-header">
        <div className="step-number">{number}</div>
        <h3 className="step-title">{title}</h3>
      </div>
      <div className="step-content">
        {children}
      </div>
    </div>
  );
};

export default Step; 