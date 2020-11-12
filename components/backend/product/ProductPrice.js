import React from 'react';
import InputLabel from '../../widget/InputLabel';
import PriceData from '../product/PriceData';

const ProductPrice = (props) => {

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="When does your schedule start?" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-3 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="When does your schedule end?" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
      </div>

      <div className="adult">
        <div className="adult-head">
          <div className="row">
            <div className="col-12">
              <span>Adult's Price</span>
            </div>
          </div>
        </div>
        <div className="adult-body my-4">
          <PriceData name="fit" text="FIT" />
          <PriceData name="agent" text="Agent" />
        </div>
      </div>
      <div className="children">
        <div className="children-head">
          <div className="row">
            <div className="col-12">
              <span>Children's Price</span>
            </div>
          </div>
        </div>
        <div className="children-body my-4">
          <PriceData name="fit" text="FIT" />
          <PriceData name="agent" text="Agent" />
        </div>
      </div>
    </>
  )
}
export default ProductPrice