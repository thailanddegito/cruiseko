import React,{memo} from 'react';
import InputLabel from '../../widget/InputLabel';
import Button from '../../widget/Button';

const AddAddons = memo((props) => {
  const {handleAddonSave, onCancel} = props;

  const onChange =(e,key) =>{
    var {value} = e.target;
    handlePriceChange(type,index,key,value)
  }
  return (
    <>
      <div className="row justify-content-center align-items-center">
        
        <div className="col-lg-2 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true,
            value : props.price,
            onChange : (e) => onChange(e,'name')
          }} 
          labelName="Name" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-2 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'price', required : true,
            value : props.deposit_rate, readOnly:name === 'FIT',
            onChange : (e) => onChange(e,'price')
          }} 
          labelName="Price" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
      </div>
      <div className="text-center">
        <Button _type="button" _name={"Save"} _class="btn-primary" _click={() => handleAddonSave()} />
        <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={onCancel} />
      </div>
    </>
  )
})
export default AddAddons