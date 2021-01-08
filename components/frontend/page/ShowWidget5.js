import React from 'react';
import EditorData from '../product_detail/EditorData';

const MainWidget = (props) => {
  const {data} = props;

  return (
    <>
      <div className="row mb-5">
        <div className="col-lg-6 col-12">
          <img src={data.image1} className="img-fluid" alt={data.alt1 ? data.alt1 : "alt1"} />
        </div>
        <div className="col-lg-6 col-12 mt-lg-0 mt-4">
          <img src={data.image2} className="img-fluid" alt={data.alt2 ? data.alt2 : "alt2"} />
        </div>
      </div>
    </>
  )
}

export default MainWidget