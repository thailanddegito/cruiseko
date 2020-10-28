import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import Link from 'next/link'
import TableRole from '../../../components/backend/table/TableRole';

const Index = (props) => {

  return (
    <>
      <Layout title="สิทธิ์เข้าใช้งานระบบ" page_name="สิทธิ์เข้าใช้งานระบบ">
      <div className="row justify-content-start">
          <div className="col-6">
            <h4>สิทธิ์เข้าใช้งานระบบ</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/roles/create">
                <a className="btn btn-primary">เพิ่ม</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableRole />
        </div>
      </Layout>
    </>
  )
}


export default Index
