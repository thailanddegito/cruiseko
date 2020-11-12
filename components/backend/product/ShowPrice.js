import React from 'react';
import tools from '.././../../utils/tools'

const ShowPrice = (props) => {
  const {start, end} = props;

  return (
    <>
      <div className="row mt-4">
        <div className="col-4">{start ? tools.formatDate(start) : null}</div>
        <div className="col-4">{end ? tools.formatDate(end) : null}</div>
        <div className="col-4"><div className="text-right">See more</div></div>
      </div>
    </>
  )
}
export default ShowPrice