import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import InputLabel from '../../../components/widget/InputLabel'
import Button from '../../../components/widget/Button';
import Router from 'next/router';
import Link from 'next/link';
import api from '../../../utils/api-admin';

const Create = (props) => {
 

  return (
    <>
      <Layout title="Create Role" page_name="Role" sub_page="Create" isLogin={true}>
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
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'email',
                name : 'email', required : true
              }} 
              labelName="Email : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
            {
              valid1 && (
                <div className="col-12 px-0">
                  <div className="form-group blues">
                    <span className="text-danger">อีเมลไม่ถูกต้อง หรือ มีอีเมลนี้ในระบบแล้ว</span>
                  </div>
                </div>
              )
            }
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                name : 'username', required : true
              }} 
              labelName="Username : " iconProps={{className : 'fa icon icon-user'}}  />
            </div>
            {
              valid2 && (
                <div className="col-12 px-0">
                  <div className="form-group blues">
                    <span className="text-danger">ชื่อผู้ใช้งานระบบไม่ถูกต้อง หรือ มีชื่อผู้ใช้งานระบบนี้ในระบบแล้ว</span>
                  </div>
                </div>
              )
            }
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
