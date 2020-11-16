import React from 'react';
import tools from '../../../utils/tools'
import ShowPriceData from './ShowPriceData'

const ShowPrice = (props) => {
  const {price,onClickEdit,onClickDelete} = props;

  return (
    <>
      {
        price && price.length ? (
          <>
            <div className="row my-4">
              <div className="col-4"><p className="p-medium">Schedule start</p></div>
              <div className="col-4"><p className="p-medium">Schedule end</p></div>
              <div className="col-2"><p className="p-medium">Pricing type</p></div>
              <div className="col-2"><div className="text-right"></div></div>
            </div>
            <div>
              {
                price.map((val, index) => (
                  <ShowPriceData key={index} val={val} 
                  onClickDelete={() => onClickDelete(index)}
                  onClickEdit={() => onClickEdit(index) } />
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