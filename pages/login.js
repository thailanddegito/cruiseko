import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';


const Login = ({ t }) => {
  const [loading, setLodding] = useState(false);

  useEffect(() => {
    
  },[]);
  
  return (
    <Layout loading={loading} title="Login">
      <div className="container" id="login">
        <aside className="main-content">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" id="email" />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" id="password" value="" />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="clearfix add_bottom_30">
              <div className="checkboxes float-left">
                <label className="container_check">Remember me
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-right mt-1"><a id="forgot" href="javascript:void(0);">Forgot Password?</a></div>
            </div>
            <a href="#0" className="btn_1 rounded full-width">Login</a>
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
