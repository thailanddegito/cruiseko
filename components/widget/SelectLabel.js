
import React from 'react';
  
const SelectLabel = (props) => {
  const {labelName,labelProps={},inputProps={} , iconProps={}} = props;
  return (

      <div className="form-group">
        {!!labelName && <label {...labelProps} >{labelName}</label>}
        <select {...inputProps} >
          <option>1</option>
          <option>2</option>
        </select>
        <i {...iconProps}></i>
      </div>

  )
}
export default SelectLabel