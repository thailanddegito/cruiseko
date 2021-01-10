import React from 'react';
import EditorData from '../product_detail/EditorData';

const MainWidget = (props) => {
  const {data} = props;

  return (
    <>
      <div className="row mb-5">
        <div className="col-12">
          <EditorData name={''} data={data.content1} />
        </div>
      </div>
    </>
  )
}

export default MainWidget