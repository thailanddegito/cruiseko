
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
                <label>First name</label>
                <input type="text" className="form-control" id="firstname_booking" name="firstname_booking" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" id="lastname_booking" name="lastname_booking" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Email</label>
                <input type="email" id="email_booking" name="email_booking" className="form-control" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Telephone</label>
                <input type="text" id="telephone_booking" name="telephone_booking" className="form-control" />
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