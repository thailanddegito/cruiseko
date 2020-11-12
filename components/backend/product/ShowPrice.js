import React from 'react';
import tools from '.././../../utils/tools'
import ShowPriceData from '../product/ShowPriceData'

const ShowPrice = (props) => {
  const {price,onClickEdit} = props;

  return (
    <>
      {
        price && price.length ? (
          <>
            <div className="row mt-4">
              <div className="col-4">Schedule Start</div>
              <div className="col-4">Schedule End</div>
              <div className="col-4"><div className="text-right"></div></div>
            </div>
            <div>
              {
                price.map((val, index) => (
                  <ShowPriceData key={index} val={val} onClickEdit={() => onClickEdit(index) } />
                ))
              }
            </div>
          </>
        ) : null
      }
    </>
  )
}
export default ShowPrice