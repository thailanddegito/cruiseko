import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TablePackage from '../../../components/backend/table/TablePackage';

const Index = (props) => {

  return (
    <>
      <Layout title="Package" page_name="Package">
        <div className="row justify-content-start align-items-center">
          <div className="col-6">
            <h4>Package</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/package/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TablePackage />
        </div>
      </Layout>
    </>
  )
}


export default Index
