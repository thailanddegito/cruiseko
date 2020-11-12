import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableAdmin from '../../../components/backend/table/TableAdmin';

const Index = (props) => {

  return (
    <>
      <Layout title="Admin" page_name="Admin">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Admin</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/admin/create">
                <a className="btn btn-primary">Create</a>
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
