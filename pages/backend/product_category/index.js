import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableProductCategory from '../../../components/backend/table/TableProductCategory';

const Index = (props) => {

  return (
    <>
      <Layout title="Product Category" page_name="Product Category">
      <div className="row justify-content-start">
          <div className="col-6">
            <h4>Product Category</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/product_category/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableProductCategory />
        </div>
      </Layout>
    </>
  )
}


export default Index
