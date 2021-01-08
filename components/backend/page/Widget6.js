import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import InputLabel from '../../widget/InputLabel';
import DivLoad from '../../widget/DivLoad';
import ImageBoxBackend from '../../widget/ImageBoxBackend';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const MainWidget = (props) => {
  const [chkImg, setChkimg]  = useState(false);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'widget_name', required : true
          }} 
          labelName="Widget Name  " iconProps={{className : 'fa icon icon-home'}} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="form-group">
            <label>Picture  </label>
            <ImageBoxBackend _text="Picture" _name="images1" _id="images1" chkImg={chkImg} required={true} classBox={'img-box-full'} />
          </div>
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'alt1', required : true
          }} 
          labelName="ALT  " iconProps={{className : 'fa icon icon-home'}} />
        </div>
      </div>
    </>
  )
}

export default MainWidget