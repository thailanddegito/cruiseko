
import React from 'react';
import InputLabel from '../../widget/InputLabel';
import Link from 'next/link';

const FormLogin = (props) => {
  const {error, isPartner} = props;

 

  return (
    <>
      <InputLabel inputProps={{ 
        className:'form-control', type : 'email',name : 'username', id : "email",
        pattern : "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", title :"Invalid email", required : true
      }} 
      labelName="Email" iconProps={{className : 'fa icon icon-email'}}  />
      <InputLabel inputProps={{ 
        className:'form-control', type : 'password',name : 'password', id : "password",
        pattern : ".{6,}", title :"six or more characters", required : true
      }} 
      labelName="Password" iconProps={{className : 'fa icon icon-lock-1'}}  />
      {
        error && ( 
          <div className="text-danger"> Email or password is incorrect </div>
        )
      }

      <div className="clearfix add_bottom_30">
        <div className="float-left mt-1">
          <Link href={isPartner ? "/partner/register" : 'register'}>
            <a id="forgot">Register?</a>
          </Link>
        </div>
        <div className="float-right mt-1"><a id="forgot">Forgot Password?</a></div>
      </div>

      <div>
        <button type="submit"  className="btn_1 rounded full-width">Login</button>
      </div>
      {
        !isPartner && (
          <>
            <div className="divider"><span>Or</span></div>
            <div className="access_social">
              <a className="social_bt facebook">Login with Facebook</a>
            </div>
          </>
        )
      }
      
    </>
  )
}
export default FormLogin