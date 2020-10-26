
import React from 'react';
import InputLabel from '../widget/InputLabel'
  
const User = (props) => {
  const {show, setShow} = props;

  const saveStep2 = () => {
    setShow(3);
  }

  return (
    <>
      <div className={`${show ? 'd-block' : 'd-none'}`}>
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'firstname'}} 
              labelName="Name : ชื่อ" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'lastname'}} 
              labelName="Last Name : นามสกุล" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'position'}} 
              labelName="Position : ตำแหน่ง" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'phone'}} 
              labelName="Tel : เบอร์โทรศัพท์" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'email'}} 
              labelName="Email : อีเมล์" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'line_id'}} 
              labelName="Line ID (ไม่จำเป็นต้องระบุ)" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6">
              <div className="form-group">
               <button type="button" className="btn btn-primary" onClick={() => saveStep2()}>ขั้นตอนถัดไป</button>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </>
  )
}
export default User