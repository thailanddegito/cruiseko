import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/backend/layout/Layout';
import Router from 'next/router';
import FormLogin from '../../components/backend/login/FormLogin';
import UserContext from '../../contexts/UserContext';
import api from '../../utils/api-admin';
import AuthService from '../../utils/AdminAuthService';
const Login = ({ t }) => {


  const [loading, setLodding] = useState(false);
  const [error,setError] = useState()
  const { fetchAdmin } = useContext(UserContext)

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
      AuthService.setProfile({id : res.data.admin_id})
      window.location = '/backend'
      // fetchAdmin()
      // Router.push('/backend')
    })
    .catch(err => {
      if(!err.response) return;

      setError(err.response.data.error)
    })
  }

  return (
    <>
      <Layout title="Login" page_name="Login" >
        <div className="container h-100" id="login">
          <aside className="main-content">
            <div className="text-center mb-3">
              <img src="/icon/logo_n.png" height="48" alt="" className="logo_sticky" />
            </div>
            <form id="login-form" onSubmit={login}>
              <FormLogin error={error} />
            </form>
          </aside>
        </div>
      </Layout>
    </>
  )
}


export default Login
