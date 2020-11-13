import React from 'react';
import TierData from './TierData';

const NavHeader = (props) => {
  const {name, target, active} = props;

  return (
    <>
      <div className={`tab-pane ${active ? 'active' : 'fade'}`} id={`${target}`}>
        <TierData />
      </div>
    </>
  )
}
export default NavHeader