import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableBoat from '../../../components/backend/table/TableBoat';

const Index = (props) => {

  return (
    <>
      <Layout title="Boat" page_name="Boat">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Boat</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/boat/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableBoat />
        </div>
      </Layout>
    </>
  )
}


export default Index
