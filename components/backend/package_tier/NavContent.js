import React from 'react';
import TierData from './TierData';
import InputLabel from '../../widget/InputLabel';

const NavHeader = (props) => {
  const {name, target, active} = props;

  return (
    <>
      <div className={`tab-pane ${active ? 'active' : 'fade'}`} id={`${target}`}>
        <div className="row justify-content-start">
          <div className="col-lg-2 col-12">
            <InputLabel inputProps={{ 
              className:'form-control mr-2', type : 'text',
              name : 'name', required : true,
              value : props.price,
              onChange : (e) => onChange(e,'price')
            }} 
            labelName="Start tier" iconProps={{className : 'fa icon icon-email'}}  />
        </div>
       </div>
        <TierData btn={false} />
        <TierData btn={true} />
      </div>
    </>
  )
}
export default NavHeader