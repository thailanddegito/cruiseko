import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import Print from '../../../../components/backend/report/print'

const Index = (props) => {
 
const router = useRouter()
const {id} = router.query;

useEffect(() => {

}, [id]);

  


  return (
    <>
      <Layout title="Booking Details" page_name="Bookings" sub_page="details" main_link="booking">
        <div className="row justify-content-between align-items-center px-3">
          <div className="">
            <h4>Booking Details</h4>
          </div>
        </div>
        <div className="divider"></div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
            <Print />
          </div>
        </div>
      </Layout>
    </>
  )
}


export default Index
