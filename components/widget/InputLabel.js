
import React from 'react';
  
const InputLabel = (props) => {
  const {labelName,labelProps={},inputProps={}, icon = true , iconProps={}} = props;
  return (

      <div className="form-group">
        {!!labelName && <label {...labelProps} >{labelName}</label>}
        <input {...inputProps} />
        {icon && <i {...iconProps}></i>}
      </div>

  )
}
export default InputLabel