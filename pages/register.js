import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Step from '../components/widget/Step';
import Company from '../components/register/Company';
import User from '../components/register/User';
import Success from '../components/register/Success';

const Register = ({ t }) => {
  const [loading, setLodding] = useState(false);
  const [show, setShow] = useState(1);

  useEffect(() => {
    
  },[]);
  
  return (
    <Layout loading={loading} title="Register">
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bs-wizard clearfix">
                <Step active={show == 1} name="ข้อมูลบริษัท" />
                <Step active={show == 2} name="ข้อมูลผู้ใช้งาน" />
                <Step active={show == 3} name="ข้อมูลการเข้าระบบ" />
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="register">
          <aside className="main-content">
            <form>
              <Company setShow={setShow} show={show == 1} />
              <User setShow={setShow} show={show == 2} />
              <Success setShow={setShow} show={show == 3} />
            </form>
          </aside>
        </div>
      </main>
    </Layout>
  )
}


export default Register
