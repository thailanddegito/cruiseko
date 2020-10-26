
import React from 'react';
  
const Step = (props) => {
  const {active, name} = props;

  
  return (
    <>
      <div className={`bs-wizard-step ${active ? 'active' : 'disabled'}`}>
        <div className="text-center bs-wizard-stepnum">{name}</div>
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <a className="bs-wizard-dot"></a>
      </div>
    </>
  )
}
export default Step