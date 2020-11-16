import React from 'react';
import TourData from './TourData';

const NavHeader = (props) => {
  const {name, target, active,price_list,handlePriceChange} = props;

  return (
    <>
      <div className={`tab-pane ${active ? 'active' : 'fade'}`} id={`${target}`}>
        {price_list.map((val,index) =>  (
          <TourData key={index}
          name={val.name} btn={false} 
          handlePriceChange={handlePriceChange}
          {...val}
          user_type_name={name}  customer_type={val.customer_type} />
        ))}
        {/* <TourData name="Adult's Price" btn={false} user_type_name={name}  customer_type="adult" />
        <TourData name="Children's Price" btn={true} user_type_name={name} customer_type="children" /> */}
      </div>
    </>
  )
}
export default NavHeader