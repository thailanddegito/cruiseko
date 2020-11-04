
import React from 'react';
  
const LicenseImage = (props) => {
  const {users, closeLightbox} = props;
  if(!users) return null;
  return (
    <>
      <div className="image-info middle">
        <img src={users.image_license} className="middle w-100 cursor-pointer" onClick={() => closeLightbox(users.image_license)} />
      </div>
    </>
  )
}
export default LicenseImage