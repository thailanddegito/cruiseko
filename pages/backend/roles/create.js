import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import InputLabel from '../../../components/widget/InputLabel'
import Button from '../../../components/widget/Button';
import Router from 'next/router';
import Link from 'next/link';
import api from '../../../utils/api-admin';

const Create = (props) => {
  const [permission, setPermission] = useState();

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

  useEffect(() => {
    fechPermission();
  },[]);

 
  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    if(!data.get('กรุณาเลือกอย่างน้อย 1 สิทธิ์')){
      alert('test')
      return false
    }
    api.insertRole(data)
    .then(res=>{
      const data = res.data;
      alert('เพิ่มข้อมูลสำเร็จ');
      Router.push('/backend/roles');
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  return (
    <>
      <Layout title="Create Role" page_name="Role" sub_page="Create" isLogin={true}>
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>สร้างสิทธิ์ผู้ใช้งานระบบ</h4>
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
              labelName="ชื่อสิทธิ์ผู้ใช้งานระบบ : " iconProps={{className : 'fa icon icon-email'}}  />
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
                      <input type="checkbox" className="custom-control-input" id={val.id} name="permission" value={val.id} />
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


export default Create
