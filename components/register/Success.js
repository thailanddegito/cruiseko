
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
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'id'}} 
                labelName="Account ID : " />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'username'}} 
              labelName="Username : " />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'password'}} 
              labelName="Password : " />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text'}} 
              labelName="Re - Password : " />
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="form-group">
               <button type="button" className="btn btn-primary" onClick={() => saveStep3()}>บันทึก</button>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </>
  )
}
export default Success