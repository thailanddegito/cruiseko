
import React, { useEffect } from 'react';
import scriptLoader from 'react-async-script-loader'

const Map = (props) => {
  const {data} = props;

  useEffect(() => {

  }, [])

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
    'http://maps.googleapis.com/maps/api/js',
    '/template/js/markerclusterer.js',
    '/template/js/map_tours_half_screen.js',
    '/template/js/infobox.js'
  ],
 
)(Map)
