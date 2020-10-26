
import React from 'react';
import InputLabel from '../widget/InputLabel'
  
const Success = (props) => {
  const {show, setShow} = props;

  const saveStep3 = () => {
    alert('success');
  }

  return (
    <>
      <div className={`${show ? 'd-block' : 'd-none'}`}>
        <div className="row justify-content-start">
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'id', readOnly : true}} 
              labelName="Account ID : " iconProps={{className : 'icon_lock_alt'}}  />
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'username'}} 
            labelName="Username : " iconProps={{className : 'icon_lock_alt'}}  />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'password'}} 
            labelName="Password : " iconProps={{className : 'icon_lock_alt'}}  />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text'}} 
            labelName="Re - Password : " iconProps={{className : 'icon_lock_alt'}}  />
          </div>
        </div>
        
        <div className="row justify-content-start">
          <div className="col-12">
            <div className="form-group">
              <button type="button" className="btn btn-primary" onClick={() => saveStep3()}>บันทึก</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Success