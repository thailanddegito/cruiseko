import React,{memo} from 'react';
import InputLabel from '../../widget/InputLabel';

const PriceData = memo((props) => {
  const {name,handlePriceChange,type,index, btn,handleAddTier,prev_tier,next_tier} = props;

  const onChange =(e,key) =>{
    var {value} = e.target;
    handlePriceChange(name,index,key,value)
  }
  return (
    <>
      <div className="row justify-content-center align-items-center">
        <div className="col-11 px-0">
          <div className="row mx-0">
            <div className="col-lg-2 col-12">
              <InputLabel inputProps={{ 
                className:'form-control mr-2', type : 'text',
                value : props.number,
                onChange : (e) => onChange(e,'number')
              }} 
              labelName={`Tier ${parseInt(prev_tier.number)+1  || '?'} - ${props.number || '?'} `} iconProps={{className : 'fa icon icon-email'}}  />
            </div>
            <div className="col-lg-2 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                value : props.price,
                onChange : (e) => onChange(e,'price')
              }} 
              labelName="Price" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
            <div className="col-lg-2 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                value : props.deposit_rate, readOnly:name === 'FIT',
                onChange : (e) => onChange(e,'deposit_rate')
              }} 
              labelName="% Deposit" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
            <div className="col-lg-2 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                value : props.deposit, readOnly:name === 'FIT',
                onChange : (e) => onChange(e,'deposit')
              }} 
              labelName="Deposit" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
            <div className="col-lg-2 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                value : props.commission_rate , readOnly : true
              }} 
              labelName="% Commission" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
            <div className="col-lg-2 col-12">
              <InputLabel inputProps={{ 
                  className:'form-control', type : 'text',
                  value : props.commission,
                  onChange : (e) => onChange(e,'commission')
                }} 
                labelName={name === 'FIT' ? `Promotion Price` : "Net Price"} iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
        </div>
        <div className="col-1">
          <div className="row">
            <div className="col-12">
              <div className="div-btn-add-tier">
              {
                btn ? (
                  <button className="btn-add-tier" onClick={() => handleAddTier(name,index)} >+</button>
                ) : null
              }
              </div>
            </div>
          </div>
        </div>
        
        
      </div>

    </>
  )
})
export default PriceData