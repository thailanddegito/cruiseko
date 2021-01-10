import React from 'react';
import EditorData from '../product_detail/EditorData';

const MainWidget = (props) => {
  const {data} = props;

  return (
    <>
      <div className="row mb-5">
        <div className="col-lg-6 col-12">
          <EditorData name={''} data={data.content1} />
        </div>
        <div className="col-lg-6 col-12 mt-lg-0 mt-4">
          {
            data.link1 ? (
              <a href={data.link1}>
                <img src={data.image1} className="img-fluid" alt={data.alt1 ? data.alt1 : "alt1"} />
              </a>
            ) : (
              <img src={data.image1} className="img-fluid" alt={data.alt1 ? data.alt1 : "alt1"} />    
            )
          }
        </div>
      </div>
    </>
  )
}

export default MainWidget