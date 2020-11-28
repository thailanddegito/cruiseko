
import React from 'react';
import Link from 'next/link';

const PaymentMethod = (props) => {
  const {packages} = props;

  return (
    packages ? (
      <>
        <div className="form_title">
          <h3><strong>2</strong>Payment Information</h3>
          <p>
            Mussum ipsum cacilds, vidis litro abertis.
          </p>
        </div>
        <div className="step">
          <div className="form-group">
            <label>Name on card</label>
            <input type="text" className="form-control" id="name_card_bookign" name="name_card_bookign" />
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label>Card number</label>
                <input type="text" id="card_number" name="card_number" className="form-control" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src="/template/img/cards_all.svg" alt="Cards" className="cards-payment" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>Expiration date</label>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" id="expire_month" name="expire_month" className="form-control" placeholder="MM" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" id="expire_year" name="expire_year" className="form-control" placeholder="Year" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Security code</label>
                <div className="row">
                  <div className="col-4">
                    <div className="form-group">
                      <input type="text" id="ccv" name="ccv" className="form-control" placeholder="CCV" /> 
                    </div>
                  </div>
                  <div className="col-8">
                    <img src="/template/img/icon_ccv.gif" width="50" height="29" alt="ccv" /><small>Last 3 digits</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </>
    ) : null
  )
}
export default PaymentMethod