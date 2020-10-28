
import React, { useEffect, useState } from 'react';
import myData from '../../public/json/raw_database.json';

const SelectAddress = (props) => {
  const {name} = props;

  const [province, setProvince] = useState();
  const [amphoe, setAmphoe] = useState();
  const [district, setDistrict] = useState();
  const [zipcode, setZipcode] = useState();

  useEffect(() => {
    getOptionAddress(myData)
  },[]);

  const getOptionAddress = (obj , index = 'กรุงเทพมหานคร')=>{
    var prov = groupBy(obj,'province');
    var amp = groupBy(prov[index],'amphoe')
    var district = groupBy(amp[Object.keys(amp)[0]],'district')
    setProvince(prov)
    setAmphoe(amp)
    setDistrict(district)
    setZipcode(groupBy(district[Object.keys(district)[0]],'zipcode'))
  }
  // console.log(province);
  const onChangeProv = (e) => {
    getOptionAddress(myData,e.target.options[e.target.selectedIndex].text)
  }

  const getOptionAmphoe = (index = 0)=>{
    var district = groupBy(amphoe[index],'district')
    setDistrict(district)
    setZipcode(groupBy(district[Object.keys(district)[0]],'zipcode'))
    // console.log(groupBy(amphoe[index],'zipcode'));
  }

  const onChangeAmphoe = (e) => {
    getOptionAmphoe(e.target.options[e.target.selectedIndex].text)
  }

  const getOptionDistrict = (index = 0)=>{
    setZipcode(groupBy(district[index],'zipcode'))
  }

  const onChangeDistrict = (e) => {
    getOptionDistrict(e.target.options[e.target.selectedIndex].text)
  }

  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };


  return (
    <>
     <div className="row justify-content-center">
        <div className="col-lg-3 col-12">
          <div className="form-group">
            <label>Province</label>
            <select className="form-control" name={`province`} onChange={onChangeProv}>
              {
                province ? Object.keys(province).map((prov,index)=>(
                  <option value={province[prov][0].province_code} key={prov}>{prov}</option>
                )) : ''
              }
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="form-group">
            <label>Amphoe</label>
            <select className="form-control" name={`amphoe`} onChange={onChangeAmphoe}>
              {
                amphoe ? Object.keys(amphoe).map((amp,index)=>(
                  <option value={amp} key={amp}>{amp}</option>
                )) : ''
              }
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="form-group">
            <label>District</label>
            <select className="form-control" name={`district`} onChange={onChangeDistrict}>
              {
                district ? Object.keys(district).map((dis,index)=>(
                  <option value={dis} key={dis}>{dis}</option>
                )) : ''
              }
            </select>
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <div className="form-group">
            <label>Zipcode</label>
            <select className="form-control" name={`zipcode`} onChange={onChangeDistrict}>
              {
                zipcode ? Object.keys(zipcode).map((zip)=>(
                  <option value={zip} key={zip}>{zip}</option>
                )) : ''
              }
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
export default SelectAddress