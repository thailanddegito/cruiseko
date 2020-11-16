import React,{memo} from 'react';
import PriceData from './PriceData';

const PriceInfo = memo((props) => {
  const {name, data, type, handlePriceChange} = props;

  return (
    <>
      <div className="price">
        <div className="price-head">
          <div className="row">
            <div className="col-12">
              <span>{name}</span>
            </div>
          </div>
        </div>
        <div className="price-body my-4">
          {
            data.map((val, index) => (
              <PriceData key={val.company_type_id} 
              {...val}
              type={type}
              index={index}
              handlePriceChange={handlePriceChange}
              />
            ))
          }
        </div>
      </div>
    </>
  )
})
export default PriceInfo