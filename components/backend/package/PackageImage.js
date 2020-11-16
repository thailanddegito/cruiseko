import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '../../widget/Button';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Dropzone from '../../widget/Dropzone'
import api from '../../../utils/api-admin'
import DivLoad from '../../widget/DivLoad';

// const Loading = <div className="position-relative"><DivLoad loading={true} /></div>;
// const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const PackageImage = (props) => {
  const {images =[]} = props
  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="form-group">
            <Dropzone />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-12">
          {
          images.map((val,index) =>  (
            <img  style={{width : 100,height:100}} key={index} src={val.image} />
          ))
          }
        </div>
      </div>
    </>
  )
}
export default PackageImage