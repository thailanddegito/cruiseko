
import React, {useState, useContext} from 'react';
import InputLabel from '../../widget/InputLabel';
import Link from 'next/link';
import Button from '../../widget/Button';
import UserContext from '../../../contexts/UserContext';
import api from '../../../utils/api';
import AuthService from '../../../utils/AuthService';

const FormLogin = (props) => {
  const [error,setError] = useState()
  const { fetchUser } = useContext(UserContext)

  const handleLogin = (event)=>{
    event.preventDefault()
    var form = document.getElementById("login-form-modal")
    var form_data = new FormData(form)
    api.login(form_data)
    .then(res => {
      console.log(res.data)
      AuthService.setToken(res.data.token)
      AuthService.setProfile({user_id : res.data.user_id})
      fetchUser()
      // Router.push('/')
      window.location = '/'

    })
    .catch(err => {
      if(!err.response) return;

      setError(err.response.data.error)
    })
  }
  

  return (
    <>
      <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide">
        <div class="small-dialog-header">
          <h3>Sign In</h3>
        </div>
        <form id="login-form-modal">
          <div class="sign-in-wrapper">
            <a href="#0" class="social_bt facebook">Login with Facebook</a>
            <div class="divider"><span>Or</span></div>
            <InputLabel inputProps={{ 
              className:'form-control', type : 'email',name : 'username', id : "email",
              pattern : "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$", title :"Invalid email", required : true
            }} 
            labelName="Email" iconProps={{className : "icon_mail_alt"}} />
            <InputLabel inputProps={{ 
              className:'form-control', type : 'password',name : 'password', id : "password",
              pattern : ".{6,}", title :"six or more characters", required : true
            }} 
            labelName="Password" iconProps={{className : "icon_lock_alt"}}  />
            {
              error && ( 
                <div className="text-danger"> Email or password is incorrect </div>
              )
            }
            <div class="clearfix add_bottom_15">
              <div class="checkboxes float-left">
                <label class="container_check">Remember me
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div class="text-center">
              <button type="button" class="btn_1 full-width" onClick={() => handleLogin()}>Log In</button>
              {/* <input type="submit" value="Log In" class="btn_1 full-width" /> */}
            </div>
            <div class="text-center">
              Don’t have an account? <Link href="/register"><a>Sign up</a></Link>
            </div>
          </div>
        </form>
      </div>    
    </>
  )
}
export default FormLogin