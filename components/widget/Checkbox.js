import React from 'react';
  
const Checkbox = (props) => {
  const {name} = props;

  return (
    <>
      <div class="clearfix">
        <div class="checkboxes float-left w-100">
          <label class="container_check">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="d-flex justify-content-between">
              <label>Name</label>
              <label>10</label>
            </div>
          </label>
        </div>
      </div>
    </>
  )
}

export default Checkbox