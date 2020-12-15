import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import Button from '../../../components/widget/Button';
import InputLabel from '../../../components/widget/InputLabel';
import SuccessDialog from '../../../components/widget/ModalSuccessDialog';
import WarningDialog from '../../../components/widget/ModalWarningDialog';
import SelectLabel from '../../../components/widget/SelectLabel';
import api from '../../../utils/api-admin';

const Create = (props) => {  
  const [modalWarning, setModalWarning] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
 
  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.insertLocation(data)
    .then(res=>{
      const data = res.data;
      setModalSuccess(true);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  return (
    <>
      <Layout title="Create Location" page_name="Location" sub_page="Create" main_link="location">
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>Create Location</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave} >
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                name : 'name', required : true
              }} 
              labelName="Location name " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                name : 'lat', required : true
              }} 
              labelName="Latitude " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                name : 'long', required : true
              }} 
              labelName="Longitude " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          

          <div className="row justify-content-center mt-4 mt-4">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="Submit" _class="btn-primary" />
                <Link href="/backend/location">
                  <a>
                    <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </form>

        <SuccessDialog show={modalSuccess}
          text="Successfully saved data !!!"
          size="md" onHide={() => setModalSuccess(false)}
          route={"/backend/location"} />

        <WarningDialog show={modalWarning}
          text="Please select at least 1 permission !!!"
          size="md" onHide={() => setModalWarning(false)} />  
      </Layout>
    </>
  )
}


export default Create
