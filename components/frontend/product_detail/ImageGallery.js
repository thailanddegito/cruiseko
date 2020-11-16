
import React, {useEffect} from 'react';

const ImageGallery = (props) => {
  const {error} = props;

  useEffect(() => {
    $(window).on('load', function() {
			"use strict";
			$.instagramFeed({
				'username': 'thelouvremuseum',
				'container': "#instagram-feed",
				'display_profile': false,
				'display_biography': false,
				'display_gallery': true,
				'get_raw_json': false,
				'callback': null,
				'styling': true,
				'items': 12,
				'items_per_row': 6,
				'margin': 1
			});
		});
	},[]);

  return (
    <>
      <h3>Instagram photos feed</h3>
      <div id="instagram-feed" className="clearfix"></div>
      <hr />
    </>
  )
}
export default ImageGallery