import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';


const Login = ({ t }) => {
  const [loading, setLodding] = useState(true);

  useEffect(() => {
    
  },[]);
  
  return (
    <Layout loading={loading} title="Login">
      
    </Layout>
  )
}


export default Login
