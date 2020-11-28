
import React from 'react';
import Link from 'next/link';

const Summayry = (props) => {
  const {packages} = props;

  return (
    packages ? (
      <>
        <div id="total_cart">
          Total <span className="float-right">69.00$</span>
        </div>
        <ul className="cart_details">
          <li>Date <span>02-11-18</span></li>
          <li>Adults <span>2</span></li>
          <li>Childs <span>1</span></li>
        </ul>
        <a href="cart-3.html" className="btn_1 full-width purchase">Purchase</a>
        {/* <div className="text-center"><small>No money charged in this step</small></div> */}
      </>
    ) : null
  )
}
export default Summayry