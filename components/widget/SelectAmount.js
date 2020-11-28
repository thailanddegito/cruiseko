
import React, {useEffect} from 'react';
  
const SelectAmount = (props) => {
  const {active, setActive} = props;
  return (
    <>
      <div className={`panel-dropdown ${active ? 'active' : ''}`}>
        <a onClick={() => setActive(!active)}>Guests <span className="qtyTotal">1</span></a>
        <div className="panel-dropdown-content right">
          <div className="qtyButtons" id="adults">
            <label>Adults</label>
            <div className="qtyDec"></div>
            <input type="text" name="qtyInput" id="adults_input" value="1" />
            <div className="qtyInc"></div>
          </div>
          <div className="qtyButtons" id="childrens">
            <label>Childrens</label>
            <div className="qtyDec"></div>
            <input type="text" name="qtyInput" id="childrens_input" value="0"/>
            <div className="qtyInc"></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SelectAmount