
import React from 'react';
  
const Input = (props) => {
  const {inputProps={}} = props;
  return (
    <>
      <input {...inputProps}/>
    </>
  )
}
export default Input