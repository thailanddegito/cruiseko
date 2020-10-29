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
  const [permission, setPermission] = useState();
  const [roles, setRole] = useState();

  const router = useRouter();
  const id = router.query.id

  const fechPermission = () => {
    api.getPermission()
    .then(res=>{
      const data = res.data;
      setPermission(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

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
    fechPermission();
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

  const checkPermission = (id)=>{
    console.log('id', id)
    if(!roles) return
    const check =  roles.role_has_permissions.findIndex((val)=>val.permission_id == id)
    // console.log('check', check)
    if(check != -1) return true
  }

  const levels = [
    {val : '1', name : '1'},{val : '2', name : '2'},{val : '3', name : '3'},
    {val : '4', name : '4'},{val : '5', name : '5'}
  ];


  return (
    <>
      <Layout title="Edit role" page_name="Edit role" sub_page="edit" main_link="roles" page_key={"roles"}>
      <div className="row justify-content-start">
          <div className="col-12">
            <h4>Edit role</h4>
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
              labelName="Role name : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <SelectLabel 
              inputProps={{ 
                className:'form-control select', 
                name : 'level', required : true,defaultValue : roles ? roles.level : 1
              }} 
              labelName="Access level" iconProps={{className : 'fa icon icon-home'}} options={levels} />
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-lg-6 col-12">
              <p className="mb-0">Website menu</p>
            </div>    
          </div>    

          {
            permission ? permission.map((val, index) => (
              <div className="row justify-content-center" key={index}>
                <div className="col-lg-6 col-12">
                  <div className="form-group blues mb-0">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id={val.id} name="permission" value={val.id}  defaultChecked={checkPermission(val.id)} />
                      <label className="custom-control-label" htmlFor={val.id}>
                        <p>{val.name}</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )) : ''
          }

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
