
import React from 'react';
import ImageBoxCircle from '../../widget/ImageBoxCircle';
import InputLabel from '../../widget/InputLabel';
import InputFileLabel from '../../widget/InputFileLabel';
import SelectLabel from '../../widget/SelectLabel';
import Button from '../../widget/Button';
import SelectAddress from '../../widget/SelectAddress';

const Company = (props) => {
  const {show, setShow, chkImg, setChkimg, index, setIndex,inputData,handleChange} = props;
 
  const saveStep1 = (event) => {
    event.preventDefault();
    setShow(2);
  }

  const optionCompanyType = [{val : 'agent', name : 'Agents'}, {val : 'hotel', name : 'Hotels'}];

  return (
    <>
     
      <div className={`${show ? 'd-block' : 'd-none'}`}>
        <form onSubmit={saveStep1} id="form-company" >
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <ImageBoxCircle _text="Logo : Company logo" _name="image_logo" _id="image_logo" chkImg={chkImg} required={true} />
            </div>
            <div className="col-lg-6 col-12 px-0">
              <div className="row mx-0">
                <div className="col-12">
                  <SelectLabel 
                  inputProps={{ 
                    className:'form-control', 
                    name : 'company_type', required : true,
                    value :inputData.company_type ,
                    onChange:handleChange
                  }} 
                  labelName="Company Type" options={optionCompanyType} />
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-12">
                  <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_name_en', required : true}} 
                  labelName="Company Name English"  />
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-12">
                  <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_name_th', required : true}} 
                  labelName="Company Name Thai"  />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'license_no', required : true}} 
              labelName="License No" />
            </div>
            <div className="col-lg-6 col-12">
              <InputFileLabel 
              inputProps={{ className:'form-control', type : 'text',name : 'image_license_text', required : true, readOnly : true}} 
              fileProps={{ className:'form-control', type : 'file',name : 'image_license', required : true, accept : "image/*"}} 
              labelName="License Pic"
              file_id={'upload'}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'address', required : true}} 
              labelName="Address"  />
            </div>
          </div>

          <SelectAddress />
          

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'text',name : 'company_phone', required : true}} 
              labelName="Tel " />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control', type : 'email',name : 'company_email', required : true}} 
              labelName="Email"  />
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col-12">
              <div className="form-group">
                <Button _type="submit" _name="Next" _class="btn-primary" />
              </div>
            </div>
          </div>
        </form>
      </div>
     
    </>
  )
}
export default Company