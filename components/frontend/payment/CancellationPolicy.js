
import React from 'react';
import Link from 'next/link';

const CancellationPolicy = (props) => {
  const {packages} = props;

  return (
    packages ? (
      <>
        <div id="policy">
          <h5>Cancellation policy</h5>
          <p className="nomargin">Lorem ipsum dolor sit amet, vix <a href="#0">cu justo blandit deleniti</a>, discere omittantur consectetuer per eu. Percipit repudiare similique ad sed, vix ad decore nullam ornatus.</p>
        </div>
      </>
    ) : null
  )
}
export default CancellationPolicy