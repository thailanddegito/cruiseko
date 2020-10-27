import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import InputLabel from '../../../components/widget/InputLabel'
import Button from '../../../components/widget/Button';

const Create = (props) => {

  return (
    <>
      <Layout title="Create Admin" page_name="Admin" sub_page="Create" isLogin={true}>
        <form>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'email',
                name : 'email', required : true
              }} 
              labelName="Email : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                name : 'username', required : true
              }} 
              labelName="Username : " iconProps={{className : 'fa icon icon-user'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',name : 'password', 
                pattern : ".{6,}", required : true
              }} 
              labelName="Password : " iconProps={{className : 'fa icon icon-key-1'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text', name : 'confirm_password',
                pattern : ".{6,}", required : true
              }} 
              labelName="Re - Password : " iconProps={{className : 'fa icon icon-key-1'}}  />
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="form-group">
                <Button _type="submit" _name="บันทึก" _class="btn-primary" />
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </>
  )
}


export default Create
