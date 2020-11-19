import React, { useEffect, useState } from 'react';
import Button from '../../widget/Button';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Dropzone from '../../widget/Dropzone'
import api from '../../../utils/api-admin'
import Drag from '../../widget/Drag';
import {sortImages} from '../../../utils/packageHelper'

const PackageImage = (props) => {
  const {images =[],galleryOrder,setGalleryOrder} = props

  var sortedImages = [...images]

  sortImages(sortedImages,galleryOrder)

  const handleGalleryOrderChange = (fromIndex,toIndex)=>{
    var data  = [...images];
    const item = data.splice(fromIndex, 1)[0];
    data.splice(toIndex, 0, item);
    setGalleryOrder(data.map((val,index) => ({id : val.id,order:index+1})))
  }

  // console.log('sortedImages',sortedImages)
  // console.log(galleryOrder)

  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="form-group">
            <Dropzone />
          </div>
        </div>
      </div>

      {sortedImages && sortedImages.length ? (
        <div className="row">
          <div className="col-lg-12 col-12">
            <h5>Current images </h5>
            <Drag handleOrderChange={handleGalleryOrderChange} items={sortedImages} >
              {
              sortedImages.map((val,index) =>  (
                <img className="drag mr-1" style={{width : 100,height:100}} key={index} src={val.image} />
              ))
              }
            </Drag>
            
          </div>
        </div>
      ) : null}
      
    </>
  )
}
export default PackageImage