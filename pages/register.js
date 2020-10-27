import React, { useEffect, useState } from 'react';
import Layout from '../components/frontend/layout/Layout';
import Company from '../components/frontend/register/Company';
import Success from '../components/frontend/register/Success';
import User from '../components/frontend/register/User';
import Step from '../components/widget/Step';

const Register = ({ t }) => {
  const [loading, setLodding] = useState(false);
  const [show, setShow] = useState(1);
  const [chkImg, setChkimg]  = useState(false);
  const [index, setIndex] = useState([]);

  useEffect(() => {
    
  },[]);

  return (
    <Layout loading={loading} title="Register">
      <main>
        
      </main>
    </Layout>
  )
}


export default Register
