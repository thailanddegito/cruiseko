import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import Button from '../../../../components/widget/Button';
import InputLabel from '../../../../components/widget/InputLabel';
import SuccessDialog from '../../../../components/widget/ModalSuccessDialog';
import api from '../../../../utils/api-admin';

const EditPermission = ({query}) => {
  const page_key = "permission";
  const [modalSuccess, setModalSuccess] = useState(false);
  const [permission, setPermission] = useState()
  const router = useRouter();
  const id = router.query.id

  const fechPermissionOne = () => {
    api.getPermissioneOne(id)
    .then(res=>{
      const data = res.data;
      setPermission(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  useEffect(() => {
    fechPermissionOne();
  },[id]);


  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.updatePermission(data)
    .then(res=>{
      const data = res.data;
      setModalSuccess(true);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  // console.log(permission);


  return (
    <>
      <Layout title="Edit admin permission" page_name="Edit admin permission" sub_page="edit" main_link="permission">
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>Edit admin permission</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave}>
          <input type="hidden" name="id" value={permission ?permission.id:''} />
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                defaultValue : permission ? permission.name: '',
                name : 'name', required : true
              }} 
              labelName="Menu name : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                defaultValue : permission ? permission.permission_key: '',
                name : 'permission_key', required : true
              }} 
              labelName="Key : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-4">
              <div className="text-center">
                <Button _type="submit" _name="Submit" _class="btn-primary" />
                <Link href="/backend/permission">
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
          route={"/backend/permission"} />
          
      </Layout>
    </>
  )
}

EditPermission.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default EditPermission
