import React from 'react';
import dynamic from 'next/dynamic';
import InputLabel from '../../widget/InputLabel';
import DivLoad from '../../widget/DivLoad';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const MainWidget = (props) => {
  const {data} = props;

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            defaultValue : data ? data.widget_name: '',
            name : 'widget_name', required : true
          }} 
          labelName="Widget Name  " iconProps={{className : 'fa icon icon-home'}} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-12">
          <div className="form-group mb-4">
            <label>Content</label>
            <Editor name="content1" height="400px" required defaultValue={data ? data.content1: ''} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainWidget