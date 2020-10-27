import React, { useEffect, useState } from 'react';
import Layout from '../../components/frontend/layout/Layout';
import Company from '../../components/frontend/register/Company';
import Success from '../../components/frontend/register/Success';
import User from '../../components/frontend/register/User';
import Step from '../../components/widget/Step';

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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bs-wizard step clearfix">
                <Step active={show == 1} name="ข้อมูลบริษัท" />
                <Step active={show == 2} name="ข้อมูลผู้ใช้งาน" />
                <Step active={show == 3} name="ข้อมูลการเข้าระบบ" />
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="register">
          <aside className="main-content">

              <Company setShow={setShow} show={show == 1} />
              <User setShow={setShow} show={show == 2} />
              <Success setShow={setShow} show={show == 3} isPartner={true} user_type="parner"  />
  
          </aside>
        </div>
      </main>
    </Layout>
  )
}


export default Register
