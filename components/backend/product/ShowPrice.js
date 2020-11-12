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
            <div className="row my-4">
              <div className="col-4"><p className="p-medium">Schedule Start</p></div>
              <div className="col-4"><p className="p-medium">Schedule End</p></div>
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