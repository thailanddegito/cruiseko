import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import Button from '../../../components/widget/Button';
import InputLabel from '../../../components/widget/InputLabel';
import SuccessDialog from '../../../components/widget/ModalSuccessDialog';
import api from '../../../utils/api-admin';

const Create = (props) => {  
  const [modalSuccess, setModalSuccess] = useState(false);
 
  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.insertPackageCate(data)
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
      <Layout title="Create Package Category" page_name="Package Category" sub_page="Create" main_link="package_category">
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>Create Package Category</h4>
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
              labelName="Name : " iconProps={{className : 'fa icon icon-home'}} />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                name : 'code', required : true,
              }} 
              labelName="Code : " iconProps={{className : 'fa icon icon-home'}} />
            </div>
          </div>

          
          <div className="row justify-content-center mt-4 mt-4">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="Submit" _class="btn-primary" />
                <Link href="/backend/package_category">
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
          route={"/backend/package_category"} />

      </Layout>
    </>
  )
}


export default Create
