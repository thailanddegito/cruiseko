import React, { useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import PackageDetail from '../../../components/backend/package/PackageDetail';
import PackageImage from '../../../components/backend/package/PackageImage';
import PackagePrice from '../../../components/backend/package/PackagePrice';
import ShowPrice from '../../../components/backend/package/ShowPrice';
import Button from '../../../components/widget/Button';
import api from '../../../utils/api-admin'

const Index = (props) => {
  const [show, setShow] = useState(false);
  const [priceList, setPriceList] = useState([]);
  const [editData,setEditData] = useState()

  const handleShow = () => {
    setShow(true);
    if(editData) setEditData(null)
  }
  const handleCancel = () => {
    setShow(false);
  }

  const handleAdd = (price_data) => {
    setPriceList([...priceList,price_data]);
    setShow(false);
  }

  const onClickEdit = (index)=>{
    setEditData({...priceList[index],index})
    setShow(true)
  }

  const handlePriceSave =(data,index)=>{
    var tmp = [...priceList]
    tmp[index] = data
    console.log('editing data',tmp)
    setPriceList(tmp)
    setShow(false);
  }

  const handleSubmit = (method) =>{
    // e.preventDefault()
    var form = document.getElementById('package-form')
    var formData = new FormData(form)

    if(!form.reportValidity()){
      return;
    }
    formData.append('price_date_list',JSON.stringify(priceList))
    formData.append('method',method)

    api.createPackage(formData)
    .then(() => {
      
    })
    .catch(err =>{
      console.log(err.response || err)
    })

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
        <form  id="package-form" >
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
                      <ShowPrice price={priceList} onClickEdit={onClickEdit}  />
                    </div>
                  </>
                )
              }
            </div>
          </div>
          <div>
            <Button _type="button" _name="Save Draft"  _click={() => handleSubmit('draft')} /> 
          </div>
        </form>
        
       

        
      </Layout>
    </>
  )
}


export default Index
