import React, { useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import PackageDetail from '../../../components/backend/package/PackageDetail';
import PackageImage from '../../../components/backend/package/PackageImage';
import PackagePrice from '../../../components/backend/package/PackagePrice';
import ShowPrice from '../../../components/backend/package/ShowPrice';
import Button from '../../../components/widget/Button';
import LoadingButton from '../../../components/widget/LoadingButton';
import api from '../../../utils/api-admin'
import Router from 'next/router'
import SuccessDialog from '../../../components/widget/ModalSuccessDialog';
import Link from 'next/link'
import EventMain from '../../../components/backend/package/EventMain';

const Index = (props) => {
  const [show, setShow] = useState(false);
  const [priceList, setPriceList] = useState([]);
  const [editData,setEditData] = useState()
  const [saving,setSaving] = useState(false)
  const [modalSuccess, setModalSuccess] = useState(false);

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

  const onClickDelete = (index) =>{
    var tmp = [...priceList]
    tmp.splice(index,1)
    setPriceList(tmp)
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

    setSaving(true)

    api.insertPackage(formData)
    .then(() => {
      setSaving(false)
      setModalSuccess(true);
    })
    .catch(err =>{
      setSaving(false)
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
            <a className="nav-link active" data-toggle="tab" href="#details">Package Detail</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#images">Package Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#events">Events Detail</a>
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
              <PackageImage dropzone_header="Banner Images" pixel_text="1600px x 1067px" input_name="banners" index="0" />
              <PackageImage dropzone_header="Image Gallery" pixel_text="960px x 640px" input_name="images" index="1" />
            </div>
            <div className="tab-pane fade" id="events">
              <EventMain />
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
                      lasted={priceList[priceList.length-1]} />
                    </div>
                    {/* <div className="text-center">
                      <Button _type="button" _name="Add" _class="btn-primary" _click={() => handleAdd()} />
                      <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={() => handleCancel()} />
                    </div> */}
                  </>
                ) : (
                  <>
                    <div>
                      <ShowPrice price={priceList} onClickEdit={onClickEdit} onClickDelete={onClickDelete}  />
                    </div>
                  </>
                )
              }
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="text-right">
                <Link href="/backend/package">
                  <a>
                    <Button _type="button" _name="Cancel" _class="btn-outline-default mr-4" />
                  </a>
                </Link>
                <LoadingButton type="button" 
                className="btn-outline-primary"  
                loading={saving}
                onClick={() => handleSubmit('draft')} >
                  Save Draft
                </LoadingButton> 

                <LoadingButton type="button" 
                className="btn-primary ml-3"  
                loading={saving}
                onClick={() => handleSubmit('publish')} >
                  Publish
                </LoadingButton> 
              </div>
            </div>
          </div>
        </form>
        
       
        <SuccessDialog show={modalSuccess}
          text="Successfully saved data !!!"
          size="md" onHide={() => setModalSuccess(false)}
          route={"/backend/package"} />

        
      </Layout>
    </>
  )
}


export default Index
