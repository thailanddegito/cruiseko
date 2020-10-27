
import React from 'react';
import ImageBoxCircle from '../../widget/ImageBoxCircle';
import InputLabel from '../../widget/InputLabel';
import InputFileLabel from '../../widget/InputFileLabel';
import SelectLabel from '../../widget/SelectLabel';
import Button from '../../widget/Button';

const Company = (props) => {
  const {show, setShow, chkImg, setChkimg, index, setIndex,inputData,handleChange} = props;
 
  const saveStep1 = (event) => {
    event.preventDefault();
    setShow(2);
  }

  const optionCompanyType = [{val : 'agent', name : 'Agents'}, {val : 'hotel', name : 'Hotels'}];
  const optionProvince = [{val : '10', name : 'กรุงเทพมหานคร'}];
  const optionAmphoe = [{val : 'คลองสาน', name : 'คลองสาน'}];
  const optionDistrict = [{val : 'คลองต้นไทร', name : 'คลองต้นไทร'}];

  return (
    <>
     
      <div className={`${show ? 'd-block' : 'd-none'}`}>
        <form onSubmit={saveStep1} id="form-company" >
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <ImageBoxCircle _text="Logo : รูปภาพบริษัท" _name="image_logo" _id="image_logo" chkImg={chkImg} required={true} />
            </div>
            <div className="col-lg-6 col-12 px-0">
              <div className="row mx-0">
                <div className="col-12">
                  <SelectLabel 
                  inputProps={{ 
                    className:'form-control select', 
                    name : 'company_type', required : true,
                    value :inputData.company_type ,
                    onChange:handleChange
                  }} 
                  labelName="Company Type" iconProps={{className : 'fa icon icon-home'}} options={optionCompanyType} />
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-12">
                  <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_name_en', required : true}} 
                  labelName="Company Name Eng : ชื่อธุรกิจนำเที่ยวภาษาอังกฤษ" iconProps={{className : 'fa icon icon-home'}}  />
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-12">
                  <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_name_th', required : true}} 
                  labelName="Company Name Thai : ชื่อธุรกิจนำเที่ยวภาษาไทย" iconProps={{className : 'fa icon icon-home'}}  />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'license_no', required : true}} 
              labelName="License No : ใบอนุญาตเลขที่" iconProps={{className : 'fa icon icon-newspaper'}}  />
            </div>
            <div className="col-lg-6 col-12">
              <InputFileLabel 
              inputProps={{ className:'form-control', type : 'text',name : 'image_license_text', required : true, readOnly : true}} 
              fileProps={{ className:'form-control', type : 'file',name : 'image_license', required : true, accept : "image/*"}} 
              labelName="License Pic : ภาพใบอนุญาต"
              file_id={'upload'}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'address', required : true}} 
              labelName="Address : ที่อยู่" iconProps={{className : 'fa icon icon-home'}}  />
            </div>
          </div>
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
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'zipcode', required : true}} 
              labelName="รหัสไปรษณีย์" iconProps={{className : 'fa icon icon-home'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_phone', required : true}} 
              labelName="Tel : เบอร์โทรศัพท์" iconProps={{className : 'fa icon icon-phone'}}  />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'email',name : 'company_email', required : true}} 
              labelName="Email : อีเมล์" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col-12">
              <div className="form-group">
                <Button _type="submit" _name="ขั้นตอนถัดไป" _class="btn-primary" />
              </div>
            </div>
          </div>
        </form>
      </div>
     
    </>
  )
}
export default Company