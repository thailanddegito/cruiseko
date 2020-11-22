import React, { useEffect, useState } from 'react';
import Button from '../../widget/Button';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Dropzone from '../../widget/Dropzone'
import api from '../../../utils/api-admin'
import Drag from '../../widget/Drag';
import {sortImages} from '../../../utils/packageHelper'

const PackageImage = (props) => {
  const {images =[],setImage, galleryOrder=[],setGalleryOrder, dropzone_header, input_name, index, pixel_text} = props

  var sortedImages = [...images]

  sortImages(sortedImages,galleryOrder)

  const handleGalleryOrderChange = (fromIndex,toIndex)=>{
    var data  = [...images];
    const item = data.splice(fromIndex, 1)[0];
    data.splice(toIndex, 0, item);
    let order_tmp = galleryOrder.filter(val => data.findIndex(d => d.id === val.id) === -1 )
    setGalleryOrder([...order_tmp,...data.map((val,index) => ({id : val.id,order:index+1}))])
  }

  const delImg = (id) => {
    if(!images) return;
    setImage(id)
   
    // console.log(tmp);
    // setPkg(tmp)
  }

  useEffect(() => {

  }, [])
  console.log('sortedImages',sortedImages)
  // console.log(galleryOrder)

  return (
    <>
      {index && index != 0 ? <div className="divider"></div> : null}
      <div className="row justify-content-start">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <h4>{dropzone_header}</h4>
            {pixel_text ? <span className="ml-3">({pixel_text})</span> : null}
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="form-group">
            <Dropzone name={input_name} />
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
                <div className="drag" key={index}>
                  <div>
                    <div className="drag-box">
                      <img className="mr-1" src={val.image} />
                    </div>
                    <div className="drag-text-del"><a className="drag-del" onClick={() => delImg(val.id)}>Del</a></div>
                  </div>
                </div>
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