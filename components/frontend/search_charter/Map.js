
import React, { useEffect } from 'react';
import scriptLoader from 'react-async-script-loader'

const Map = (props) => {
  const {packages,isScriptLoaded,isScriptLoadSucceed} = props;

  useEffect(() => {
    console.log('props',props)
    if (isScriptLoaded && isScriptLoadSucceed && packages) {
      		// type_point: 'Historic',
      		// name: 'Open Bus',
      		// location_latitude: 48.865633, 
      		// location_longitude: 2.321236,
      		// map_image_url: 'img/thumb_map_single_tour.jpg',
      		// rate: 'Superb | 7.5',
      		// name_point: 'Open Bus',
      		// get_directions_start_address: '',
      		// phone: '+3934245255',
      		// url_point: 'tour-detail.html'
      // window.initMap([
      //   { 		
      //     type_point: 'Historic',
      // 		name: 'Open Bus',
      // 		location_latitude: 48.865633, 
      // 		location_longitude: 2.321236,
      // 		map_image_url: '/template/img/thumb_map_single_tour.jpg',
      // 		rate: 'Superb | 7.5',
      // 		name_point: 'Open Bus',
      // 		get_directions_start_address: '',
      // 		phone: '+3934245255',
      // 		url_point: 'tour-detail.html'
      //   },
      //   {
      //     type_point: 'Historic',
      //     name: 'Madeleine',
      //     location_latitude: 48.865633, 
      //     location_longitude: 4.321236,
      //     map_image_url: 'img/thumb_map_single_tour.jpg',
      //     rate: 'Superb | 7.5',
      //     name_point: 'Madeleine',
      //     get_directions_start_address: '',
      //     phone: '+3934245255',
      //     url_point: 'tour-detail.html'
      //   }
      // ]);
    }
  })

  return (
    <>
      <div className="col-lg-7 map-right">
        <div id="map"></div>
      </div>
    </>
  )
}
export default scriptLoader(
  [
    'http://maps.googleapis.com/maps/api/js'  
  ],
  '/template/js/markerclusterer.js',
  '/template/js/map_tours_half_screen.js',
  '/template/js/infobox.js'
 
)(Map)
