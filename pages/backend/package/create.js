import React, { useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import PackageDetail from '../../../components/backend/package/PackageDetail';
import PackageImage from '../../../components/backend/package/PackageImage';
import PackagePrice from '../../../components/backend/package/PackagePrice';
import ShowPrice from '../../../components/backend/package/ShowPrice';
import Button from '../../../components/widget/Button';

const Index = (props) => {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState([]);
  const [editData,setEditData] = useState()

  /*
    {start_date,end_date , adult : [] ,children : [] }

    // {company_type_id , price , deposit ,commission }
  */


  const handleShow = () => {
    setShow(true);
    if(editData) setEditData(null)
  }
  const handleCancel = () => {
    setShow(false);
  }

  const handleAdd = (price_data) => {
    setPrice([...price,price_data]);
    setShow(false);
  }

  const onClickEdit = (index)=>{
    setEditData({...price[index],index})
    setShow(true)
  }

  const handlePriceSave =(data,index)=>{
    var tmp = [...price]
    tmp[index] = data
    console.log('editing data',tmp)
    setPrice(tmp)
    setShow(false);
  }

  

  return (
    <>
      <Layout title="Create Package" page_name="Package">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Create Package</h4>
          </div>
        </div>
        <div className="divider"></div>


        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#details">Package Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#images">Package Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#price">Schedule and Pricing</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="details">
            <div>
              <PackageDetail />
            </div>
          </div>
          <div className="tab-pane fade" id="images">
            <PackageImage />
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
                    <PackagePrice 
                    handleAdd={handleAdd} 
                    handleCancel={handleCancel} 
                    editData={editData}
                    handlePriceSave={handlePriceSave}
                    lasted={price[price.length-1]} />
                  </div>
                  {/* <div className="text-center">
                    <Button _type="button" _name="Add" _class="btn-primary" _click={() => handleAdd()} />
                    <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={() => handleCancel()} />
                  </div> */}
                </>
              ) : (
                <>
                  <div>
                    <ShowPrice price={price} onClickEdit={onClickEdit}  />
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
