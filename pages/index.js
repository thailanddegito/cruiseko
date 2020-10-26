import React, { useState } from 'react';
import Layout from '../components/frontend/layout/Layout';

const Home = (props) => {
  const [loading, setLodding] = useState(false);

  return (
    <Layout loading={loading} title="Home">
    </Layout>
  )
}
export default Home

