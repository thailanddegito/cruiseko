import React from 'react';
import TierData from './TierData';
import InputLabel from '../../widget/InputLabel';

const NavHeader = (props) => {
  const {name, target, active,handleTierStartChange,data,handlePriceChange,handleAddTier} = props;

  const onChange = (e) =>{
    handleTierStartChange && handleTierStartChange(name,e.target.value)
  }
  return (
    <>
      <div className={`tab-pane ${active ? 'active' : 'fade'}`} id={`${target}`}>
        <div className="row justify-content-start">
          <div className="col-lg-2 col-12">
            <InputLabel inputProps={{ 
              className:'form-control mr-2', type : 'text',
              name : 'name', required : true,
              value : data.tier_start,
              onChange 
            }} 
            labelName="Start tier" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
       </div>
        {data.tiers.map((val,index) =>  (
          <TierData btn={index === data.tiers.length-1} 
          name={name}
          key={index}
          prev_tier={index !== 0 ? data.tiers[index-1]  :  {number : data.tier_start-1 } }
          next_tier={data[index+1]}
          {...val}
          index={index}
          handleAddTier={handleAddTier}
          handlePriceChange={handlePriceChange}
          />
        ))}
        
      </div>
    </>
  )
}
export default NavHeader