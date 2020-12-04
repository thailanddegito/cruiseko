
import React, {useEffect, useRef} from 'react';
  
const SelectAmount = (props) => {
  const {active, setActive, handleButton, state} = props;
  
  return (
    <>
      <div className={`panel-dropdown ${active ? 'active' : ''}`}>
        <a onClick={() => setActive(!active)}>Guests <span className="qtyTotal">1</span></a>
        <div className="panel-dropdown-content right">
          <div className="qtyButtons" id="adults">
            <label>Adults</label>
            <div className="qtyDec" onClick={() => handleButton('adult', 'minus')}></div>
            <input type="text" name="qtyInput" id="adults_input" value={state.adult} readOnly />
            <div className="qtyInc" onClick={() => handleButton('adult', 'plus')}></div>
          </div>
          <div className="qtyButtons" id="childrens">
            <label>Childrens</label>
            <div className="qtyDec" onClick={() => handleButton('children', 'minus')}></div>
            <input type="text" name="qtyInput" id="childrens_input" value={state.children} readOnly />
            <div className="qtyInc" onClick={() => handleButton('children', 'plus')}></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SelectAmount