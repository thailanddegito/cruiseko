import dynamic from 'next/dynamic';
import React, { memo, useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import api from '../../../utils/api-admin';
import DivLoad from '../../widget/DivLoad';
import InputLabel from '../../widget/InputLabel';
import Datetime from 'react-datetime';

const animatedComponents = makeAnimated();

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const PackageDetail = memo((props) => {
  const {pkg} = props;
  const [types, setType] = useState();
  const [boats, setBoat] = useState();
  const [locations, setLocation] = useState();
  const [selectData,setSelectData] = useState({cate : undefined ,boat_id : undefined, location : undefined })
  const [img, setImg] = useState("/template/img/tour_1.jpg");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
  const fechLocation = () => {
    api.getLocation()
    .then(res=>{
      const data = res.data;
      var temp = data.map(val => ({...val,value : val.id,label : val.name})  )
      setLocation(temp);
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
    fechLocation();
  },[]);

  useEffect(() => {
    if(!pkg || !boats || !types) return;

    const cate = types.find(val => val.value === pkg.cate_id )
    const boat_id = boats.find(val => val.value === pkg.products_boats[0]?.boat_id)
    // console.log('boat',boat)
    // console.log('cate',cate)
    setSelectData({cate,boat_id,location})
  }, [pkg,types,boats]);
  useEffect(() => {
    if(!pkg) return;
    setImg(pkg.picture ? pkg.picture : "/template/img/tour_1.jpg");
    setStartDate(pkg.start_time ? pkg.start_time : null);
    setEndDate(pkg.end_time ? pkg.end_time : null);
  },[pkg]);

  const handleChange = (event) => {
    if(!event.target.files[0]) {
      return;
    }
    setImg(URL.createObjectURL(event.target.files[0]));
  }

  const showstartDate = (e) => {
    var today = e._i;
    var data = e._d;
    // var da = setD(data);
    setStartDate(data);
  }

  const showendDate = (e) => {
    var today = e._i;
    var data = e._d;
    // var da = setD(data);
    setEndDate(data);
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

      <div className="row" >
        <div className="col-lg-6 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'pickup_location', required : true,
            defaultValue : pkg ? pkg.pickup_location : undefined
          }} 
          labelName="Pickup Location" iconProps={{className : 'fa icon icon-email'}}  /> 
        </div>
        <div className="col-lg-6 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'dropoff_location', required : true,
            defaultValue : pkg ? pkg.dropoff_location : undefined
          }} 
          labelName="Dropoff Location" iconProps={{className : 'fa icon icon-email'}}  /> 
        </div>
      </div>

      <div className="row" >
        <div className="col-lg-6 col-12">
          <div className="form-group select2">
            <label className="">Location</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti={false}
              placeholder="-- Please Select Location --"
              name="location"
              options={locations}
              value={selectData.location }
              onChange={ (e) => handleSelectChange('location',e) }
            /> 
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="form-group mb-4">
            <label>Start Time</label>
            <Datetime 
            dateFormat={false} 
            timeFormat={'HH:mm'}
            onChange={(e)=> {showstartDate(e)}}
            value={startDate ? startDate : ''}
            inputProps={{ name: 'start_time', required : true, autoComplete : 'off' }} />
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="form-group mb-4">
            <label>End Time</label>
            <Datetime 
            dateFormat={false} 
            timeFormat={'HH:mm'}
            onChange={(e)=> {showendDate(e)}}
            value={endDate ? endDate : ''}
            inputProps={{ name: 'end_time', required : true, autoComplete : 'off' }} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Description</label>
            <Editor name="description" height="200px" required data={pkg ? pkg.description : ''} />
          </div>
        </div>
      </div>


      

      {/* <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Highlight</label>
            <Editor name="highlight" height="200px" required data={pkg ? pkg.highlight : ''} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Itinerary</label>
            <Editor name="itinerary" height="200px" required data={pkg ? pkg.itinerary : ''} />
          </div>
        </div>
      </div> */}

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