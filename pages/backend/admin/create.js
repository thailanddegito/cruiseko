import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import InputLabel from '../../../components/widget/InputLabel'
import Button from '../../../components/widget/Button';
import Router from 'next/router';
import Link from 'next/link';
import api from '../../../utils/api-admin';
import SelectLabel from '../../../components/widget/SelectLabel';

const Create = (props) => {
  const [roles, setRole] = useState();

  const fechRole = () => {
    api.getRole()
    .then(res=>{
      const data = res.data;
      
      setRole(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    fechRole();
  },[]);

  const handleSave = () => {
    const data = new FormData(event.target)
    event.preventDefault()
    api.insertAdminUsers(data)
    .then(res=>{
      const data = res.data;
      alert('เพิ่มข้อมูลสำเร็จ');
      Router.push('/backend/admin');
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    })
  }

  const handleError = (error) => {
    console.log( error);
  }

  return (
    <>
      <Layout title="Create Admin" page_name="Admin" sub_page="Create" isLogin={true}>
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>สร้างผู้ใช้งานระบบ (ผู้ดูแลระบบ)</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave}>
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
                className:'form-control', type : 'email',
                name : 'email', required : true
              }} 
              labelName="Email : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                name : 'username', required : true
              }} 
              labelName="Username : " iconProps={{className : 'fa icon icon-user'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',name : 'password', 
                pattern : ".{6,}", required : true
              }} 
              labelName="Password : " iconProps={{className : 'fa icon icon-key-1'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <SelectLabel 
              inputProps={{ 
                className:'form-control select', 
                name : 'company_type', required : true,
              }} 
              labelName="สิทธิ์ผู้ใช้งานระบบ" iconProps={{className : 'fa icon icon-home'}} options={roles} />
            </div>
          </div>
          
          
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="บันทึก" _class="btn-primary" />
                <Link href="/backend/admin">
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


export default Create
