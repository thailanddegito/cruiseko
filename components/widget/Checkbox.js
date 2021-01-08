import React from 'react';
  
const Checkbox = (props) => {
  const {value1,value2,onChange,name=''} = props;

  return (
    <>
      <div class="clearfix">
        <div class="checkboxes float-left w-100">
          <label class="container_check">
            <input type="checkbox" onChange={onChange} name={name} />
            <span class="checkmark"></span>
            <div className="d-flex justify-content-between">
              <label>{value1}</label>
              <label>{value2}</label>
            </div>
          </label>
        </div>
      </div>
    </>
  )
}

export default Checkbox