import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import Button from '../../../../components/widget/Button';
import InputLabel from '../../../../components/widget/InputLabel';
import SuccessDialog from '../../../../components/widget/ModalSuccessDialog';
import WarningDialog from '../../../../components/widget/ModalWarningDialog';
import SelectLabel from '../../../../components/widget/SelectLabel';
import api from '../../../../utils/api-admin';

const EditRole = ({query}) => {
  const [modalWarning, setModalWarning] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [roles, setRole] = useState();

  const router = useRouter();
  const id = router.query.id



  const fechRoleOne = () => {
    api.getRoleOne(id)
    .then(res=>{
      const data = res.data;
      setRole(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    if(!id) return
    fechRoleOne();
  },[id]);


  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    if(!data.get('permission')){
      setModalWarning(true);
      return false
    }
    api.updateRole(data)
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
      <Layout title="Edit Company Type" page_name="Company Type" sub_page="Edit" main_link="company_type">
      <div className="row justify-content-start">
          <div className="col-12">
            <h4>Edit Company Type</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave} >
          <input type="hidden" name="id" value={roles ? roles.id:''} />

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'name',
                defaultValue : roles ? roles.name: '',
                name : 'name', required : true
              }} 
              labelName="Name : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'name',
                defaultValue : roles ? roles.prefix: '',
                name : 'prefix', required : true
              }} 
              labelName="Prefix : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                defaultValue : roles ? roles.commission_rate: '',
                name : 'commission_rate', required : true,
                pattern : "[0-9]*", maxLength : 3
              }} 
              labelName="Commission Rate : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          
          <div className="row justify-content-center mt-4">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="Save" _class="btn-primary" />
                <Link href="/backend/roles">
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
          route={"/backend/roles"} />
        
        <WarningDialog show={modalWarning}
          text="Please select at least 1 permission !!!"
          size="md" onHide={() => setModalWarning(false)} />
      </Layout>
    </>
  )
}

EditRole.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default EditRole
