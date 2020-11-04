
import React from 'react';
  
const SelectLabel = (props) => {
  const {labelName,labelProps={},inputProps={}, icon = true, iconProps={}, options=[]} = props;
  return (

      <div className="form-group">
        {!!labelName && <label {...labelProps} >{labelName}</label>}
        <select {...inputProps} >
          {
            options.map((item, index) => (
              <option key={index} value={item.val}>{item.name}</option>
            ))
          }
        </select>
        {icon && <i {...iconProps}></i>}
        
      </div>

  )
}
export default SelectLabel