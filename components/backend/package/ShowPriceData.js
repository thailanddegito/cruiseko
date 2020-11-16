import React from 'react';
import tools from '../../../utils/tools'

const ShowPriceData = (props) => {
  const {val : {pricing_type,start_date, end_date},onClickEdit,onClickDelete} = props;

  return (
    <>
      <div className="row mt-2">
        <div className="col-4">{start_date ? tools.formatDate(start_date,false,false) : null}</div>
        <div className="col-4">{end_date ? tools.formatDate(end_date,false,false) : null}</div>
        <div className="col-2"> {pricing_type === 'normal' ? 'Tour' : 'Tier' } </div>
        <div className="col-2">
          <div className="text-right">
            <span className="mr-3" ><a href="#" onClick={onClickEdit}>See more</a></span>
            
            <span><a href="#" onClick={onClickDelete}>Delete</a></span>
            
          </div>
        </div>
      </div>
    </>
  )
}
export default ShowPriceData