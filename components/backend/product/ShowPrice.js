import React from 'react';
import tools from '.././../../utils/tools'

const ShowPrice = (props) => {
  const {price} = props;

  return (
    <>
      {
        price && price.length ? (
          <>
            <div className="row mt-4">
              <div className="col-4">Schedule Start</div>
              <div className="col-4">Schedule End</div>
              <div className="col-4"><div className="text-right">See more</div></div>
            </div>
            <div>
              {
                price.map((val, index) => (
                  <ShowPrice key={index} />
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