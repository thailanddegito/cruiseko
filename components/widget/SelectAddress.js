
import React from 'react';
import SelectLabel from './SelectLabel';
import InputLabel from './InputLabel';

const SelectAddress = (props) => {
  const {name} = props;

  const optionProvince = [{val : '10', name : 'กรุงเทพมหานคร'}];
  const optionAmphoe = [{val : 'คลองสาน', name : 'คลองสาน'}];
  const optionDistrict = [{val : 'คลองต้นไทร', name : 'คลองต้นไทร'}];
  const optionPost = [{val : '10600', name : '10600'}];

  return (
    <>
     <div className="row justify-content-center">
        <div className="col-lg-3 col-12">
          <SelectLabel inputProps={{ className:'form-control select', name : 'province', required : true}} 
          labelName="จังหวัด" iconProps={{className : 'fa icon icon-home'}} options={optionProvince}  />
        </div>
        <div className="col-lg-3 col-12">
          <SelectLabel inputProps={{ className:'form-control select', name : 'amphoe', required : true}} 
          labelName="อำเภอ" iconProps={{className : 'fa icon icon-home'}} options={optionAmphoe}  />
        </div>
        <div className="col-lg-3 col-12">
          <SelectLabel inputProps={{ className:'form-control select', name : 'district', required : true}} 
          labelName="ตำบล" iconProps={{className : 'fa icon icon-home'}} options={optionDistrict}  />
        </div>
        <div className="col-lg-3 col-12">
          <SelectLabel inputProps={{ className:'form-control select', name : 'zipcode', required : true}} 
          labelName="รหัสไปรษณีย์" iconProps={{className : 'fa icon icon-home'}} options={optionPost}  />
        </div>
      </div>
    </>
  )
}
export default SelectAddress