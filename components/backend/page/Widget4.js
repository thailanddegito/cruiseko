import React from 'react';
import dynamic from 'next/dynamic';
import InputLabel from '../../widget/InputLabel';
import DivLoad from '../../widget/DivLoad';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const MainWidget = (props) => {

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'widget_name', required : true
          }} 
          labelName="Widget Name  " iconProps={{className : 'fa icon icon-home'}} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12">
          <div className="form-group mb-4">
            <label>Content Left</label>
            <Editor name="content1" height="400px" required />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="form-group mb-4">
            <label>Content Right</label>
            <Editor name="content2" height="400px" required />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainWidget