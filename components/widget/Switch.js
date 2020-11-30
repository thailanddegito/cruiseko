import React from 'react';
import { Form } from 'react-bootstrap';
  
const Button = (props) => {
  const {name, id, label, checked, disabled, handleFunction} = props;

  return (
    <>
      <div className="form-switch">
        <Form.Check 
          type="switch"
          id={id}
          label={label}
          name={name}
          onChange={handleFunction}
          checked={checked}
          disabled={disabled}
        />
      </div>
    </>
  )
}

export default Button