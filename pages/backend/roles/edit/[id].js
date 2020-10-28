import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import InputLabel from '../../../../components/widget/InputLabel'
import Button from '../../../../components/widget/Button';
import Link from 'next/link';
import api from '../../../../utils/api-admin';
import SelectLabel from '../../../../components/widget/SelectLabel';

const EditRole = ({query}) => {

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
      alert('กรุณาเลือกอย่างน้อย 1 สิทธิ์')
      return false
    }
    api.updateRole(data)
    .then(res=>{
      const data = res.data;
      alert('แก้ไขข้อมูลสำเร็จ');
      Router.push('/backend/roles');
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
      <Layout title="Edit Role" page_name="Role" sub_page="Edit" isLogin={true}>
      <div className="row justify-content-start">
          <div className="col-12">
            <h4>แก้สิทธิ์ผู้ใช้งานระบบ</h4>
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
              labelName="ชื่อสิทธิ์ผู้ใช้งานระบบ : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <SelectLabel 
              inputProps={{ 
                className:'form-control select', 
                name : 'level', required : true,
              }} 
              labelName="ระดับการเข้าถึง" iconProps={{className : 'fa icon icon-home'}} options={levels} />
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-lg-6 col-12">
              <p className="mb-0">เมนูหน้าเว็บ</p>
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

          <div className="row justify-content-center">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="บันทึก" _class="btn-primary" />
                <Link href="/backend/roles">
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

EditRole.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default EditRole
