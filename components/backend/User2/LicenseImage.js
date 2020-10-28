
import React from 'react';
  
const LicenseImage = (props) => {
  const {users} = props;
  if(!users) return null;
  return (
    <>
      <div className="image-info middle">
        <img src={users.image_license} className="middle w-100" />
      </div>
    </>
  )
}
export default LicenseImage