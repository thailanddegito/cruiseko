
import React from 'react';
import InputLabel from '../../widget/InputLabel';
import Input from '../../widget/Input';
import Button from '../../widget/Button';

const Success = (props) => {
  const {show, setShow, isPartner, user_type} = props;

  const saveStep3 = (event) => {
    event.preventDefault();
    alert('success');
  }

  return (
    <>
      <div className={`${show ? 'd-block' : 'd-none'}`}>
        <form onSubmit={saveStep3}>
          
          <Input inputProps={{ className:'form-control', type : 'hidden', name : 'user_type', defaultValue : user_type, readOnly : true}}/>
            
          {
            !!isPartner && (
              <div className="row justify-content-start">
                <div className="col-lg-6 col-12">
                  <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'id', readOnly : true}} 
                    labelName="Account ID : " iconProps={{className : 'fa icon icon-user'}}  />
                </div>
              </div>
            )
          }
          <div className="row justify-content-start">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'username', required : true}} 
              labelName="Username : " iconProps={{className : 'fa icon icon-user'}}  />
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'password', 
              pattern : ".{6,}", required : true}} 
              labelName="Password : " iconProps={{className : 'fa icon icon-key-1'}}  />
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text', 
               pattern : ".{6,}", required : true}} 
              labelName="Re - Password : " iconProps={{className : 'fa icon icon-key-1'}}  />
            </div>
          </div>
          
          <div className="row justify-content-start">
            <div className="col-12">
              <div className="form-group">
                <Button _type="submit" _name="บันทึก" _class="btn-primary" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Success