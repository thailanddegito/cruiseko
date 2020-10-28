import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import Link from 'next/link'
import TablePermission from '../../../components/backend/table/TablePermission';

const Index = (props) => {

  return (
    <>
      <Layout title="Admin permission" page_name="Admin permission">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Admin permission</h4>
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
          <TablePermission />
        </div>
      </Layout>
    </>
  )
}


export default Index
