import React, { useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import ProductDetail from '../../../components/backend/product/ProductDetail';
import ProductImage from '../../../components/backend/product/ProductImage';
import ProductPrice from '../../../components/backend/product/ProductPrice';
import ShowPrice from '../../../components/backend/product/ShowPrice';
import Button from '../../../components/widget/Button';

const Index = (props) => {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState([]);

  /*
    {start_date,end_date , adult : [] ,children : [] }

    // {company_type_id , price , deposit ,commission }
  */


  const handleShow = () => {
    setShow(true);
  }
  const handleCancel = () => {
    setShow(false);
  }

  const handleAdd = () => {
    setPrice([]);
    setShow(false);
  }



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
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#price">Schedule and Pricing</a>
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
          <div className="tab-pane fade" id="price">
            <div className="row">
              <div className="col-12">
                <div className="text-right">
                  {!show ?<Button _type="button" _name="Add" _class="btn-primary" _click={() => handleShow()} /> :null}
                </div>
              </div>
            </div>

            {
              show ? (
                <>
                  <div>
                    <ProductPrice />
                  </div>
                  <div className="text-center">
                    <Button _type="button" _name="Add" _class="btn-primary" _click={() => handleAdd()} />
                    <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={() => handleCancel()} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <ShowPrice price={price} />
                  </div>
                </>
              )
            }
          </div>
        </div>
       

        
      </Layout>
    </>
  )
}


export default Index
