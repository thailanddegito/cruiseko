import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import ProductDetail from '../../../components/backend/product/ProductDetail';
const Index = (props) => {

  return (
    <>
      <Layout title="Product" page_name="Product">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Users</h4>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <ProductDetail />
        </div>
      </Layout>
    </>
  )
}


export default Index
