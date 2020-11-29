import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import Button from '../../../components/widget/Button';
import InputLabel from '../../../components/widget/InputLabel';
import SelectLabel from '../../../components/widget/SelectLabel';
import SuccessDialog from '../../../components/widget/ModalSuccessDialog';
import api from '../../../utils/api-admin';

const Create = (props) => {  
  const [modalSuccess, setModalSuccess] = useState(false);
 
  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.insertBlogCate(data)
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
      <Layout title="Create Blog Category" page_name="Blog Category" sub_page="Create" main_link="blog_category">
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>Create Blog Category</h4>
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
              labelName="Name " iconProps={{className : 'fa icon icon-home'}} />
            </div>
          </div>
          
          <div className="row justify-content-center mt-4 mt-4">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="Submit" _class="btn-primary" />
                <Link href="/backend/blog_category">
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
          route={"/backend/blog_category"} />

      </Layout>
    </>
  )
}


export default Create
