import React, { useEffect, useState,memo } from 'react';
import dynamic from 'next/dynamic';
import Button from '../../widget/Button';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Dropzone from '../../widget/Dropzone'
import api from '../../../utils/api-admin'
import DivLoad from '../../widget/DivLoad';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const PackageDetail = memo((props) => {
  const [types, setType] = useState();
  const [boats, setBoat] = useState();

  const fecthPackageCate = () => {
    api.getPackageCate()
    .then(res=>{
      const data = res.data;
      var temp = data.map(val => ({...val,value : val.cate_id,label : val.name})  )
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
      var temp = data.map(val => ({label : val.name,value : val.boat_id})  )
      console.log(temp)
      setBoat(temp);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBoat();
    fecthPackageCate();
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
          <div className="form-group select2">
            <label className="">Category</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti={false}
              placeholder="-- Please Select Category --"
              name="cate_id"
              options={types}
              // onChange={(e) => handleChange(e)}
            /> 
          </div>
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
              name="boat_id"
              options={boats}
              // onChange={(e) => handleChange(e)}
            /> 
          </div>
        </div>
      </div>
    </>
  )
})
export default PackageDetail