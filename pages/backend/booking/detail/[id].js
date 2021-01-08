import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import Print from '../../../../components/backend/report/print'
import api from '../../../../utils/api-admin'
import tools from '../../../../utils/tools'

const Index = (props) => {
  const [bookings, setBooking] = useState();
  const router = useRouter()
  const {id} = router.query;

  useEffect(() => {
    if(!id) return;
    api.getBookingOne(id)
    .then(res => {
      setBooking(res.data)
      // console.log('data',res.data)
    })
    .catch(err=>{
      console.log(err.response || err)
    })

  }, [id]);

  console.log(bookings);


  return (
    <>
      <Layout title="Booking Details" page_name="Bookings" sub_page="details" main_link="booking">
        {
          bookings ? (
            <>
              <div className="row justify-content-between align-items-center px-3">
                <div className="">
                  <h4>Booking Details</h4>
                </div>
                <div className="">
                  <Print  data={bookings} />
                </div>
              </div>
              <div className="divider"></div>

              <div className="row justify-content-center">
                <div className="col-lg-9 col-12">
                  <h5>Booking Details</h5>
                  <p>Booking NO. {bookings.booking_details[0]?.booking_id}</p>
                </div>
                <div className="col-lg-3 col-12">
                  <h5>Summary</h5>
                  <div className="sum-text"><span className="total">Total </span> <span className="total">{bookings.booking_details[0]?.price}</span></div>
                  <div className="sum-text"><span>Date </span> <span>{bookings.start_date ? tools.formatDate(start_date,false,false) : null}</span></div>
                  <div className="sum-text"><span>Adults </span> <span>{bookings.adult}</span></div>
                  <div className="sum-text"><span>Childs </span> <span>{bookings.children}</span></div>

                </div>
              </div>
            </>
          ) : null
        }
      </Layout>
    </>
  )
}


export default Index
