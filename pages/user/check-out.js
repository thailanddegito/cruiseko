import React, { useState,useEffect } from 'react';
import Layout from '../../components/frontend/layout/Layout';
import Address from '../../components/frontend/payment/Address'
import PaymentMethod from '../../components/frontend/payment/PaymentMethod'
import BillingAddress from '../../components/frontend/payment/BillingAddress'
import CancellationPolicy from '../../components/frontend/payment/CancellationPolicy'
import Router from 'next/router'
import Summary from '../../components/frontend/payment/Summary'

const Payment = (props) => {
  const [loading, setLodding] = useState(false);
  const [data,setData] = useState();

  useEffect(() => {
    const _data =  localStorage.getItem('checkout_dt')
    if(!_data){
      Router.push('/')
      return;
    }
    var json = JSON.parse(_data);
    if(json.expired_at <= new Date().getTime() ){
      localStorage.removeItem('checkout_dt')
      Router.push('/')
      return;
    }
    setData(JSON.parse(_data))
    
  }, []);

  const purchase = ()=>{
    // localStorage.removeItem('checkout_dt')
    alert('Hello')
    // Router.push('/order-success')
  }

  return (
    <Layout loading={loading} title="Checkout" page={'checkout'}>
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
                  <Summary data={data} purchase={purchase} />
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

