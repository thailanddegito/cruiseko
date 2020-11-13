import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TablePackageCategory from '../../../components/backend/table/TablePackageCategory';

const Index = (props) => {

  return (
    <>
      <Layout title="Package Category" page_name="Package Category">
      <div className="row justify-content-start">
          <div className="col-6">
            <h4>Package Category</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/package_category/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TablePackageCategory />
        </div>
      </Layout>
    </>
  )
}


export default Index
