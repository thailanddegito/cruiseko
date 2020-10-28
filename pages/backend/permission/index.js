import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import Link from 'next/link'
import TableUser from '../../../components/backend/permission/Table';

const Index = (props) => {

  return (
    <>
      <Layout title="Permission" page_name="Permission" isLogin={true}>
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>สิทธิ์การใช้งานเมนูหน้าเว็บ</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/permission/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableUser />
        </div>
      </Layout>
    </>
  )
}


export default Index
