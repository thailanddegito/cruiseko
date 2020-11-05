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
    api.insertCompany(data)
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
      <Layout title="Create Company Type" page_name="Company Type" sub_page="Create" main_link="company_type">
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>Create Company Type</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave} >
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'name',
                name : 'name', required : true
              }} 
              labelName="Name : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'name',
                name : 'prefix', required : true,
                pattern : "^[A-Z]+$", minLength : 2, maxLength : 2
              }} 
              labelName="Prefix : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                name : 'commission_rate', required : true,
                pattern : "[0-9]*", maxLength : 3
              }} 
              labelName="Commission Rate (%) : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>


          
          <div className="row justify-content-center mt-4 mt-4">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="Submit" _class="btn-primary" />
                <Link href="/backend/company_type">
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
          route={"/backend/company_type"} />

      </Layout>
    </>
  )
}


export default Create
