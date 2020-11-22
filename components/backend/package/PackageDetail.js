import dynamic from 'next/dynamic';
import React, { memo, useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import api from '../../../utils/api-admin';
import DivLoad from '../../widget/DivLoad';
import InputLabel from '../../widget/InputLabel';

const animatedComponents = makeAnimated();

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const PackageDetail = memo((props) => {
  const {pkg} = props;
  const [types, setType] = useState();
  const [boats, setBoat] = useState();
  const [selectData,setSelectData] = useState({cate : undefined ,boat_id : undefined })
  const [img, setImg] = useState("/template/img/tour_1.jpg");

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

  const handleSelectChange = (key,item)=>{
    console.log(item)
    setSelectData({...selectData,[key] : item})
  }
  
  useEffect(() => {
    fecthBoat();
    fecthPackageCate();
  },[]);

  useEffect(() => {
    if(!pkg || !boats || !types) return;

    const cate = types.find(val => val.value === pkg.cate_id )
    const boat = boats.find(val => val.vlue === pkg.boat_id)
    
    setSelectData({cate,boat})
  }, [pkg,types,boats]);
  useEffect(() => {
    if(!pkg) return;
    setImg(pkg.picture ? pkg.picture : "/template/img/tour_1.jpg");
  },[pkg]);

  const handleChange = (event) => {
    if(!event.target.files[0]) {
      return;
    }
    setImg(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <>
      <div className="row" >
        <div className="col-lg-8 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true,
            defaultValue : pkg ? pkg.name : undefined
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
              value={selectData.cate }
              onChange={ (e) => handleSelectChange('cate',e) }
            /> 
          </div>
        </div>
      </div>

      <div className="row"> 
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Short Description</label>
            <textarea className="form-control" name="short_description" required defaultValue={pkg ? pkg.short_description : ''}></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Description</label>
            <Editor name="description" height="200px" required data={pkg?.description} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Highlight</label>
            <Editor name="highlight" height="200px" required data={pkg?.highlight} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Itinerary</label>
            <Editor name="itinerary" height="200px" required data={pkg?.itinerary} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'remark', required : true,
            defaultValue : pkg ? pkg.remark : undefined
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
              value={selectData.boat_id }
              onChange={ (e) => handleSelectChange('boat_id',e) }
            /> 
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="form-group">
            <label>Thumbnail</label>
            <div className="default-picture">
              <div>
                <img src={img} className="mw-100" />
              </div>
              {/* <label className="mt-3">file</label> */}
              <input type="file" name="picture" id="picture" className="form-control"  onChange={handleChange} accept="image/png, image/jpeg, image/gif, image/jpg, image/svg"  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
export default PackageDetail