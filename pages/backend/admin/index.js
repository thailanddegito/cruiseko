import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableAdmin from '../../../components/backend/table/TableAdmin';
import Link from 'next/link'

const Index = (props) => {

  return (
    <>
      <Layout title="ผู้ใช้งานระบบ" page_name="ผู้ใช้งานระบบ">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>ผู้ใช้งานระบบ</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/admin/create">
                <a className="btn btn-primary">เพิ่ม</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableAdmin />
        </div>
      </Layout>
    </>
  )
}


export default Index
