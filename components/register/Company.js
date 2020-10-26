
import React from 'react';
import InputLabel from '../widget/InputLabel'
import ImageBoxCircle from '../widget/ImageBoxCircle';

const Company = (props) => {
  const {show, setShow, chkImg, setChkimg, index, setIndex} = props;
 
  const saveStep1 = () => {
    setShow(2);
  }

  return (
    <>
      <div className={`${show ? 'd-block' : 'd-none'}`}>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <ImageBoxCircle _text="Logo : รูปภาพบริษัท" _name="image_logo" _id="image_logo" chkImg={chkImg} />
            </div>
            <div className="col-lg-6 col-12 px-0">
              <div className="row mx-0">
                <div className="col-12">
                  <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_type'}} 
                  labelName="Company Type" iconProps={{className : 'icon_lock_alt'}}  />
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-12">
                  <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_name_en'}} 
                  labelName="Company Name Eng : ชื่อธุรกิจนำเที่ยวภาษาอังกฤษ" iconProps={{className : 'icon_lock_alt'}}  />
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-12">
                  <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_name_th'}} 
                  labelName="Company Name Thai : ชื่อธุรกิจนำเที่ยวภาษาไทย" iconProps={{className : 'icon_lock_alt'}}  />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'license_no'}} 
              labelName="License No : ใบอนุญาตเลขที่" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'file',name : 'image_license'}} 
              labelName="License Pic : ภาพใบอนุญาต" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'address'}} 
              labelName="Address : ที่อยู่" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'province'}} 
              labelName="จังหวัด" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
            <div className="col-lg-3 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'amphoe'}} 
              labelName="อำเภอ" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
            <div className="col-lg-3 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'district'}} 
              labelName="ตำบล" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
            <div className="col-lg-3 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'zipcode'}} 
              labelName="รหัสไปรษณีย์" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_phone'}} 
              labelName="Tel : เบอร์โทรศัพท์" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_email'}} 
              labelName="Email : อีเมล์" iconProps={{className : 'icon_lock_alt'}}  />
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col-12">
              <div className="form-group">
               <button type="button" className="btn btn-primary" onClick={() => saveStep1()}>ขั้นตอนถัดไป</button>
              </div>
            </div>
          </div>


      
      </div>
    </>
  )
}
export default Company