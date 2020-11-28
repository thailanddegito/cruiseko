import React, { useState } from 'react';
import Layout from '../../components/frontend/layout/Layout';
import Address from '../../components/frontend/payment/Address'
import PaymentMethod from '../../components/frontend/payment/PaymentMethod'
import BillingAddress from '../../components/frontend/payment/BillingAddress'
import CancellationPolicy from '../../components/frontend/payment/CancellationPolicy'
import Summayry from '../../components/frontend/payment/Summayry'

const Payment = (props) => {
  const [loading, setLodding] = useState(false);

  return (
    <Layout loading={loading} title="Payment" page={'payment'}>
      <main>
        <div className="bg_color_1">
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-8">
                <div className="box_cart">
                  <Address packages={true} />
                  <PaymentMethod packages={true} />
                  <BillingAddress packages={true} />
                  <CancellationPolicy packages={true} />
                </div>
              </div>
              
              <aside className="col-lg-4" id="sidebar">
                <div className="box_detail">
                  <Summayry packages={true} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default Payment

