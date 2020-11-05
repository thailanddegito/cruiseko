import React, { useState } from 'react';
import Layout from '../components/frontend/layout/Layout';
import ProductCard from '../components/frontend/product/ProductCard'

const Home = (props) => {
  const [loading, setLodding] = useState(false);

  return (
    <Layout loading={loading} title="Main Product">
      <div className="container">
        <div className="wrapper-grid">
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Home

