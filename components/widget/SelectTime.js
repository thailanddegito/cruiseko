
import React, {useEffect, useRef} from 'react';
  
const SelectTime = (props) => {
  const {active, setActive, handleButton, state} = props;


  
  return (
    <>
      <div className={`panel-dropdown w-50 ${active ? 'active' : ''}`}>
        <a onClick={() => setActive(!active)}><span className="qtyTotal select-time">10.30</span></a>
        <div className="panel-dropdown-content time right">
          <div className="select-option-time" id="from">
            <label>Hour</label>
            <select className="form-control">
              <option>01</option>
              <option>23</option>
            </select>
          </div>
          <div className="select-option-time" id="to">
            <label>Minute</label>
            <select className="form-control">
              <option>00</option>
              <option>30</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
export default SelectTime