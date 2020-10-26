
import React from 'react';
  
const Input = (props) => {
  const {labelName,labelProps={},inputProps={} } = props;
  return (

      <div className="form-group">
        {!!labelName && <label {...labelProps} >{labelName}</label>}
        <input {...inputProps} />
      </div>

  )
}
export default Input