import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import ProductDetail from '../../../components/backend/product/ProductDetail';
import ProductImage from '../../../components/backend/product/ProductImage';

const Index = (props) => {

  return (
    <>
      <Layout title="Create Product" page_name="Product">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Create Product</h4>
          </div>
        </div>
        <div className="divider"></div>


        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#details">Product Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#images">Product Images</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="details">
            <div>
              <ProductDetail />
            </div>
          </div>
          <div className="tab-pane fade" id="images">
            <ProductImage />
          </div>
        </div>
       

        
      </Layout>
    </>
  )
}


export default Index
