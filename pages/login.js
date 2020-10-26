import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import api from '../utils/api'
import AuthService from '../utils/AuthService'

const Login = ({ t }) => {
  const [loading, setLodding] = useState(false);
  const [error,setError] = useState()
  useEffect(() => {
    
  },[]);

  const login = (e)=>{
    e.preventDefault()
    // var form = document.getElementById(e.target)
    var form_data = new FormData(e.target)
    api.login(form_data)
    .then(res => {
      console.log(res.data)
      AuthService.setToken(res.data.token)
      AuthService.setProfile({user_id : res.data.user_id})
      Router.push('/')
    })
    .catch(err => {
      if(!err.response) return;

      setError(err.response.data.error)
    })
  }
  
  return (
    <Layout loading={loading} title="Login">
      <div className="container" id="login">
        <aside className="main-content">
          <form id="login-form" onSubmit={login}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="username" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Invalid email" />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" id="password" pattern=".{6,}" title="six or more characters" />
              <i className="icon_lock_alt"></i>
            </div>

            {
              error && ( 
                <div className="text-danger"> Email or password is incorrect </div>
              )
            }

            <div className="clearfix add_bottom_30">
              <div className="checkboxes float-left">
                <label className="container_check">Remember me
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
            </div>
            <button type="submit"  className="btn_1 rounded full-width"  >Login</button>
            <div className="divider"><span>Or</span></div>
            <div className="access_social">
              <a href="#0" className="social_bt facebook">Login with Facebook</a>
            </div>
          </form>
        </aside>
      </div>
    </Layout>
  )
}


export default Login
