import { useRouter } from 'next/router';
import React, { useEffect,useState } from 'react';
import Layout from '../../../../components/frontend/layout/Layout';
import Print from '../../../../components/backend/report/print'
import api from '../../../../utils/api'
import Summary from '../../../../components/backend/booking/Summary'
import Detail from '../../../../components/backend/booking/Detail';
import UserBooking from '../../../../components/backend/booking/UserBooking';
import Link from 'next/link';
import AddReview from '../../../../components/frontend/product_detail/AddReview';

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
    fetchPackage();
  }, [id]);

  const fetchPackage = ()=>{
    if(!id) return;
    var data = {'booking_id' : id}
    api.checkRevuew(data)
    .then(res => {
      const data= res.data;
      console.log('fetched data',data)
    })
    .catch(err=>{
      console.log(err.response || err)
    })
  }

  // console.log(bookings);


  return (
    <>
      <Layout title="Booking Details" page_name="Bookings" sub_page="details" main_link="booking" banner={false}>
        <div className="container start-content">
          <aside className="main-content border-r8px p-4">
          {
            bookings ? (
              <>
                <div className="row justify-content-between align-items-center px-3">
                  <div className="d-flex align-items-center">
                    <h4>Booking Details</h4>        
                    <div className="ml-4">{bookings.payment_status == 1 ? <span className="text-warning">(Pending)</span> : <span className="text-success">(Success)</span>}</div>
                  </div>
                  <div className="">
                    <Link href="/user/my_booking">
                      <a><button className="btn btn-primary" type="button">Back</button></a>
                    </Link>
                  </div>
                </div>
                <div className="divider"></div>

                <div className="row justify-content-center">
                  <div className="col-lg-9 col-12">
                    <div>
                      <Detail data={bookings} />
                    </div>
                    <div className="mt-4">
                      <UserBooking data={bookings} />
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <Summary data={bookings} />
                  </div>
                </div>
                <div className="divider"></div>
                <section className="mt-4" id="reviews">
                  <AddReview data={bookings} />
                </section>
              </>
            ) : null
          }
          </aside>
        </div>
        <div className="end-content"></div>
      </Layout>
    </>
  )
}


export default Index
