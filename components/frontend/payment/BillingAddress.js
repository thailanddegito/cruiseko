
import React from 'react';
import Link from 'next/link';

const BillingAddress = (props) => {
  const {packages} = props;

  return (
    packages ? (
      <>
        <div className="form_title">
          <h3><strong>3</strong>Billing Address</h3>
          <p>
            Mussum ipsum cacilds, vidis litro abertis.
          </p>
        </div>
        <div className="step">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Country</label>
                <div className="custom-select-form">
                <select className="wide add_bottom_15" name="country" id="country">
                  <option value="" selected>Select your country</option>
                  <option value="Europe">Europe</option>
                  <option value="United states">United states</option>
                  <option value="South America">South America</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Asia">Asia</option>
                </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Street line 1</label>
                <input type="text" id="street_1" name="street_1" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Street line 2</label>
                <input type="text" id="street_2" name="street_2" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label>City</label>
                <input type="text" id="city_booking" name="city_booking" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <label>State</label>
                <input type="text" id="state_booking" name="state_booking" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <label>Postal code</label>
                <input type="text" id="postal_code" name="postal_code" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    ) : null
  )
}
export default BillingAddress