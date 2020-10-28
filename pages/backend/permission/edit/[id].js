import React from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import InputLabel from '../../../../components/widget/InputLabel'
import Button from '../../../../components/widget/Button';

const EditPermission = ({query}) => {

  return (
    <>
      <Layout title="Edit Permission" page_name="Permission" sub_page="Edit" isLogin={true}>
        <form>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'name',
                name : 'name', required : true
              }} 
              labelName="Name : " iconProps={{className : 'fa icon icon-email'}}  />
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

EditPermission.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default EditPermission
