
import React from 'react';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Button from '../../widget/Button';

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
        <form onSubmit={saveStep2}>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'firstname', required : true}} 
              labelName="Name : ชื่อ" iconProps={{className : 'fa icon icon-user'}}  />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'lastname', required : true}} 
              labelName="Last Name : นามสกุล" iconProps={{className : 'fa icon icon-user'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <SelectLabel inputProps={{ className:'form-control select', name : 'position', required : true}} 
              labelName="Position : ตำแหน่ง" iconProps={{className : 'fa icon icon-user'}} options={optionPosition} />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'phone'}} 
              labelName="Tel : เบอร์โทรศัพท์" iconProps={{className : 'fa icon icon-phone'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'email', required : true}} 
              labelName="Email : อีเมล์" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'line_id'}} 
              labelName="Line ID (ไม่จำเป็นต้องระบุ)" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col-12">
              <div className="form-group">
                <Button _type="submit" _name="ขั้นตอนถัดไป" _class="btn-primary" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default User