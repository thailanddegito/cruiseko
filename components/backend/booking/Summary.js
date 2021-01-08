import React from 'react';
import tools from '../../../utils/tools';

const Summary = (props) => {
  const {data} = props;

  return (
    <>
      <h5>Summary</h5>
      <div className="sum-text"><span className="total">Total </span> <span className="total">{data.booking_details[0]?.price}</span></div>
      <div className="sum-text"><span>Date </span> <span>{data.start_date ? tools.formatDate(start_date,false,false) : null}</span></div>
      <div className="sum-text"><span>Adults </span> <span>{data.adult}</span></div>
      <div className="sum-text"><span>Childs </span> <span>{data.children}</span></div>
      <div className="sum-text"><span className="total">Net Price </span> <span className="total">{data.net_price}</span></div>
    </>
  )
}

export default Summary