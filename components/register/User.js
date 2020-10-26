
import React from 'react';
import InputLabel from '../widget/InputLabel'
import SelectLabel from '../widget/SelectLabel'

const User = (props) => {
  const {show, setShow} = props;

  const saveStep2 = () => {
    setShow(3);
  }

  const optionPosition = [
    {val : '1', name : 'Sale'},{val : '2', name : 'Sales Agent'},{val : '3', name : 'Sales & Operation'},
    {val : '4', name : 'Tour Operation'},{val : '5', name : 'Operations Executive'},{val : '6', name : 'Operation Manager '}
  ];

  return (
    <>
      <div className={`${show ? 'd-block' : 'd-none'}`}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'firstname'}} 
            labelName="Name : ชื่อ" iconProps={{className : 'icon_lock_alt'}}  />
          </div>
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'lastname'}} 
            labelName="Last Name : นามสกุล" iconProps={{className : 'icon_lock_alt'}}  />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <SelectLabel inputProps={{ className:'form-control select', name : 'position'}} 
            labelName="Position : ตำแหน่ง" iconProps={{className : 'icon_lock_alt'}} options={optionPosition} />
          </div>
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'phone'}} 
            labelName="Tel : เบอร์โทรศัพท์" iconProps={{className : 'icon_lock_alt'}}  />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'email'}} 
            labelName="Email : อีเมล์" iconProps={{className : 'icon_lock_alt'}}  />
          </div>
          <div className="col-lg-6 col-12">
            <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'line_id'}} 
            labelName="Line ID (ไม่จำเป็นต้องระบุ)" iconProps={{className : 'icon_lock_alt'}}  />
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col-12">
            <div className="form-group">
              <button type="button" className="btn btn-primary" onClick={() => saveStep2()}>ขั้นตอนถัดไป</button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
export default User