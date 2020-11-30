import React from 'react';
import tools from '../../../utils/tools'

const ShowPriceData = (props) => {
  const {val : {pricing_type,start_date, end_date},onClickEdit,onClickDelete} = props;

  return (
    <>
      <div className="row div-table">
        <div className="col-3">{start_date ? tools.formatDate(start_date,false,false) : null}</div>
        <div className="col-3">{end_date ? tools.formatDate(end_date,false,false) : null}</div>
        <div className="col-3"> {pricing_type === 'normal' ? 'Tour' : 'Tier' } </div>
        <div className="col-3">
          <div className="text-right">
            <button type="button" className="a-manage warning" onClick={onClickEdit}><i className="fa fa-fw fa-pencil"></i> <span>See more</span></button>
            <button type="button" className="a-manage danger" onClick={onClickDelete}><i className="fa fa-fw fa-trash"></i> <span>Delete</span></button>            
          </div>
        </div>
      </div>
    </>
  )
}
export default ShowPriceData