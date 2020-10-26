
import React from 'react';
import InputLabel from '../widget/InputLabel'
  
const Company = (props) => {
  const {show, setShow} = props;

  const saveStep1 = () => {
    setShow(2);
  }

  return (
    <>
      <div className={`${show ? 'd-block' : 'd-none'}`}>
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'file' ,name : 'image_logo'}} 
              labelName="Logo : รูปภาพบริษัท" />
            </div>
          </div>


          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_type'}} 
              labelName="Company Type" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_name_en'}} 
              labelName="Company Name Eng : ชื่อธุรกิจนำเที่ยวภาษาอังกฤษ" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_name_th'}} 
              labelName="Company Name Thai : ชื่อธุรกิจนำเที่ยวภาษาไทย" />
            </div>
          </div>


          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'license_no'}} 
              labelName="License No : ใบอนุญาตเลขที่" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'file',name : 'image_license'}} 
              labelName="License Pic : ภาพใบอนุญาต" />
            </div>
          </div>


          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'address'}} 
              labelName="Address : ที่อยู่" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'province'}} 
              labelName="จังหวัด" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'amphoe'}} 
              labelName="อำเภอ" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'district'}} 
              labelName="ตำบล" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'zipcode'}} 
              labelName="รหัสไปรษณีย์" />
            </div>
          </div>


          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_phone'}} 
              labelName="Tel : เบอร์โทรศัพท์" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_email'}} 
              labelName="Email : อีเมล์" />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6">
              <div className="form-group">
               <button type="button" className="btn btn-primary" onClick={() => saveStep1()}>ขั้นตอนถัดไป</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
export default Company