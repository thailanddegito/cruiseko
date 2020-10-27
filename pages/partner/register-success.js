import React, { useState } from 'react';
import Layout from '../../components/frontend/layout/Layout';

const RegisterSuccess = (props) => {
  const [loading, setLodding] = useState(false);

  return (
    <Layout loading={loading} title="Home">
    </Layout>
  )
}
export default RegisterSuccess

