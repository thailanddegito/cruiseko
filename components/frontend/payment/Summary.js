
import React from 'react';
import Link from 'next/link';

const Summayry = (props) => {
  const {data,purchase} = props;

  return (
    data ? (
      <>
        <div id="total_cart">
          Total <span className="float-right"> {parseFloat(data.price).toFixed(2) }฿</span>
        </div>
        <ul className="cart_details">
          <li>Date <span> {data.date} </span></li>
          {
            data.is_boat == 1 && (
              <>
              <li>Time <span> {data.start_time} - {data.end_time} </span></li>
              <li>duration <span> {data.duration} hour(s) </span></li>
              </>
            )
          }
          <li>Adults <span> {data.adult} </span></li>
          <li>Childs <span>{data.children}</span></li>
        </ul>
        <button type="button" className="btn_1 full-width purchase" onClick={purchase} >Purchase </button>
        {/* <a href="cart-3.html" className="btn_1 full-width purchase">Purchase</a> */}
        {/* <div className="text-center"><small>No money charged in this step</small></div> */}
      </>
    ) : null
  )
}
export default Summayry