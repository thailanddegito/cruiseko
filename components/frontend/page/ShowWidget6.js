import React from 'react';
import EditorData from '../product_detail/EditorData';

const MainWidget = (props) => {
  const {data} = props;

  return (
    <>
      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex justify-content-center">
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
      </div>
    </>
  )
}

export default MainWidget