import React, { useEffect, useState } from 'react';
import Button from '../../widget/Button';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Dropzone from '../../widget/Dropzone'

const ProductDetail = (props) => {

  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="Package Name" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-4 col-12">
          <SelectLabel inputProps={{ 
            className:'form-control select', 
            name : 'level', required : true,
          }} 
          labelName="Category" iconProps={{className : 'fa icon icon-home'}} options={[]} />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-12">
          <SelectLabel inputProps={{ 
            className:'form-control select', 
            name : 'level', required : true,
          }} 
          labelName="Package Type" iconProps={{className : 'fa icon icon-home'}} options={[]} />
        </div>
        <div className="col-lg-4 col-12">
          <SelectLabel inputProps={{ 
            className:'form-control select', 
            name : 'level', required : true,
          }} 
          labelName="Operator" iconProps={{className : 'fa icon icon-home'}} options={[]} />
        </div>
        <div className="col-lg-4 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="Pax" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-12">
          <SelectLabel inputProps={{ 
            className:'form-control select', 
            name : 'level', required : true,
          }} 
          labelName="Diner Style" iconProps={{className : 'fa icon icon-home'}} options={[]} />
        </div>
        <div className="col-lg-4 col-12">
          <SelectLabel inputProps={{ 
            className:'form-control select', 
            name : 'level', required : true,
          }} 
          labelName="Time" iconProps={{className : 'fa icon icon-home'}} options={[]} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Detail</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="Remark" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-4 col-12">
          <SelectLabel inputProps={{ 
            className:'form-control select', 
            name : 'level', required : true,
          }} 
          labelName="Status" iconProps={{className : 'fa icon icon-home'}} options={[]} />
        </div>
      </div>

      <div className="divider"></div>
      <div className="row justify-content-start">
        <div className="col-6">
          <h4>Photos</h4>
        </div>
      </div>
      <div className="divider"></div>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="form-group">
            <Dropzone />
          </div>
        </div>
      </div>

    </>
  )
}
export default ProductDetail