import React from 'react';

const SubStep = ({ title, children }) => {
  return (
    <div className="sub-step">
      {title && <h4 className="sub-step-title">{title}</h4>}
      <div className="sub-step-content">
        {children}
      </div>
    </div>
  );
};

export default SubStep; 