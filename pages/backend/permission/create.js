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
      <Layout title="Create Permission" page_name="Permission" sub_page="Create" isLogin={true}>
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


export default Create
