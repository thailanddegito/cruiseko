import React, {useEffect, useRef} from 'react';
  
const SelectStyle = (props) => {
  const {open, setOpen, name, col = "col-lg-3", textOptions, setTextOption, options, setOptionVal, option_val, setType} = props;

  const boxEl = useRef(null)
	const onClickOut = (e) => {
		if(!boxEl.current.contains(e.target)){
			if(open) setOpen(!open)
		}	
	}
  useEffect(() => {
		open && document.addEventListener('mousedown' , onClickOut)
		return () => {
			document.removeEventListener('mousedown' , onClickOut)
		}
  },[open])
  
  const handleChange = (val, text, type) => {
    setTextOption(text);
    setOptionVal(val);
    setType(type);
  }
  

  return (
    <>
      <div className={`select ${col}`} onClick={() => setOpen(!open)} ref={boxEl}>
        <select className="wide d-none" name={name} value={option_val}>
          {
            options ? options.map((val, index) => (
              <option value={val.value} key={index}>{val.name}</option>	      
            )) : null
          }
        </select>
        <div className={`nice-select wide ${open ? 'open' : ''} mb-lg-0 mb-3`} tabIndex="0">
          <span className="current">{textOptions}</span>
          <ul className="list">
            {
              options ? options.map((val, index) => (   
              <li data-value={val.value} key={index} className={`option ${textOptions == val.name ? "selected focus" : ''}`} onClick={() => handleChange(val.value, val.name, val.type)}>{val.name}</li>
              )) : null
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default SelectStyle