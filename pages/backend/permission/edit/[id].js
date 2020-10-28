import React from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import InputLabel from '../../../../components/widget/InputLabel'
import Button from '../../../../components/widget/Button';

const EditPermission = ({query}) => {

  return (
    <>
      <Layout title="Edit Permission" page_name="Permission" sub_page="Edit" isLogin={true}>
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>แก้ไขสิทธิ์การใช้งานเมนูหน้าเว็บ</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'name',
                name : 'name', required : true
              }} 
              labelName="ชื่อเมนู : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="text-center">
                <Button _type="submit" _name="บันทึก" _class="btn-primary" />
                <Link href="/backend/permission">
                  <a>
                    <Button _type="button" _name="ยกเลิก" _class="btn-outline-primary ml-4" />
                  </a>
                </Link>
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
