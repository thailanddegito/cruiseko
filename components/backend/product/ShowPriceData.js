import React from 'react';
import tools from '.././../../utils/tools'

const ShowPriceData = (props) => {
  const {val : {start_date, end_date},onClickEdit} = props;

  return (
    <>
      <div className="row mt-4">
        <div className="col-4">{start_date ? tools.formatDate(start_date) : null}</div>
        <div className="col-4">{end_date ? tools.formatDate(end_date) : null}</div>
        <div className="col-4"><div className="text-right" onClick={onClickEdit} >See more</div></div>
      </div>
    </>
  )
}
export default ShowPriceData