import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import Print from '../../../../components/backend/report/print'
import api from '../../../../utils/api-admin'

const Index = (props) => {
const [booking, setBooking] = useState();
const router = useRouter()
const {id} = router.query;

useEffect(() => {
  if(!id) return;
  api.getBookingOne(id)
  .then(res => {
    setBooking(res.data)
    console.log('data',res.data)
  })
  .catch(err=>{
    console.log(err.response || err)
  })

}, [id]);

  


  return (
    <>
      <Layout title="Booking Details" page_name="Bookings" sub_page="details" main_link="booking">
        <div className="row justify-content-between align-items-center px-3">
          <div className="">
            <h4>Booking Details</h4>
          </div>
          <div className="">
            <Print  data={booking} />
          </div>
        </div>
        <div className="divider"></div>

        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
           
          </div>
        </div>
      </Layout>
    </>
  )
}


export default Index
