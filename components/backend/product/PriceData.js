import React,{memo} from 'react';
import InputLabel from '../../widget/InputLabel';

const PriceData = memo((props) => {
  const {name, text} = props;

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-2 col-12">
          <div className="text-center">
            <p className="p-medium">{text}</p>
          </div>
        </div>
        <div className="col-lg-2 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="Price" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-2 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="% Deposit" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-2 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="Deposit" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-2 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="% Commission" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-2 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'name', required : true
          }} 
          labelName="Commission" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
      </div>

    </>
  )
})
export default PriceData