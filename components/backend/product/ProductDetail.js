import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '../../widget/Button';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Dropzone from '../../widget/Dropzone'
import api from '../../../utils/api-admin'
import DivLoad from '../../../components/widget/DivLoad';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Loading = <div className="position-relative"><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../../components/widget/Editor'),{ ssr: false, loading: () => Loading })

const ProductDetail = (props) => {
  const [types, setType] = useState();
  const [boats, setBoat] = useState();

  const fecthProductCate = () => {
    api.getProductCate()
    .then(res=>{
      const data = res.data;
      var temp = data.map(val => ({...val,val : val.cate_id})  )
      setType(temp);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  const fecthBoat = () => {
    api.getBoat()
    .then(res=>{
      const data = res.data;
      var temp = data.map(val => ({...val,val : val.boat_id})  )
      setBoat(temp);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBoat();
    fecthProductCate();
  },[]);


  


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
            name : 'cate_id', required : true,
          }} 
          labelName="Category" iconProps={{className : 'fa icon icon-home'}} options={types} />
        </div>
      </div>


      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Detail</label>
            <Editor name="detail" height="200px" required/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'remark', required : true
          }} 
          labelName="Remark" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-4 col-12">
          <div className="form-group select2">
            <label className="">Boat</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti={false}
              placeholder="-- Please Select Boat --"
              name={"boat"}
              options={boats}
              // onChange={(e) => handleChange(e)}
            /> 
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetail