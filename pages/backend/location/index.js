import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableLocation from '../../../components/backend/table/TableLocation';

const Index = (props) => {

  return (
    <>
      <Layout title="Location" page_name="Location">
      <div className="row justify-content-start">
          <div className="col-6">
            <h4>Location</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/location/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableLocation />
        </div>
      </Layout>
    </>
  )
}


export default Index
