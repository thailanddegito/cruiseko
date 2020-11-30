import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableBooking from '../../../components/backend/table/TableBooking';

const Index = (props) => {

  return (
    <>
      <Layout title="Bookings" page_name="Bookings">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Bookings</h4>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableBooking />
        </div>
      </Layout>
    </>
  )
}


export default Index
