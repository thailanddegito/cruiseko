import React from 'react';
import TourData from './TourData';

const NavHeader = (props) => {
  const {name, target, active} = props;

  return (
    <>
      <div className={`tab-pane ${active ? 'active' : 'fade'}`} id={`${target}`}>
        <TourData name="Adult's Price" btn={false} />
        <TourData name="Children's Price" btn={true} />
      </div>
    </>
  )
}
export default NavHeader