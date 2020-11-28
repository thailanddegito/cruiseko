import React, { useState } from 'react';
import Layout from '../../components/frontend/layout/Layout';

const RegisterSuccess = (props) => {
  const [loading, setLodding] = useState(false);

  return (
    <Layout loading={loading} title="Register Success" page={'partner_register_success'}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h4>Register Success</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default RegisterSuccess

