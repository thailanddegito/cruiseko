
import React from 'react';
  
const Loading = (props) => {
  const {loading} = props;

  return (
    <>
      {
        !!loading && (
          <div id="preloader">
            <div data-loader="circle-side"></div>
          </div>
        )
      }
    </>
  )
}
export default Loading