
import React from 'react';
  
const Input = (props) => {
  const {labelName,labelProps={},inputProps={} , iconProps={}} = props;
  return (

      <div className="form-group">
        {!!labelName && <label {...labelProps} >{labelName}</label>}
        <input {...inputProps} />
        <i {...iconProps}></i>
      </div>

  )
}
export default Input