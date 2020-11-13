import React, { useEffect, useState } from 'react';
import PriceInfo from './PriceInfo';

const PackageTierData = (props) => {
  const {id = 'One', data, handlePriceChange} = props;

  return (
    <>
      
      <div className="card">
        <div className="card-header" id={`heading${id}`}>
          <h5 className="mb-0">
            <button className="btn btn-link name-tier" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls={`collapse${id}`} >
              Tier 1 - 2
            </button>
          </h5>
        </div>
        <div id={`collapse${id}`} className="collapse show" aria-labelledby={`heading${id}`} data-parent="#accordion">
          <div className="card-body">
            <div>
              <PriceInfo name="Adult's Price" data={data.adult} type="adult" handlePriceChange={handlePriceChange} />
              <PriceInfo name="Children's Price" data={data.children} type="children" handlePriceChange={handlePriceChange} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default PackageTierData