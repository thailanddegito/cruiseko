import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableBoatCategory from '../../../components/backend/table/TableBoatCategory';

const Index = (props) => {

  return (
    <>
      <Layout title="Boat Category" page_name="Boat Category">
      <div className="row justify-content-start">
          <div className="col-6">
            <h4>Boat Category</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/boat_category/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableBoatCategory />
        </div>
      </Layout>
    </>
  )
}


export default Index
