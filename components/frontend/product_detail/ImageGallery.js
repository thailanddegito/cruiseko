
import React from 'react';

const ImageGallery = (props) => {
  const {error} = props;

  return (
    <>
      <h3>Instagram photos feed</h3>
      <div id="instagram-feed" className="clearfix"></div>
      <hr />
    </>
  )
}
export default ImageGallery