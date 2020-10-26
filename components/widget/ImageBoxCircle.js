import classNames from 'classnames';
import React, { useState } from 'react';
  
const ImageBoxCircle = (props) => {
  const {show, _name, _text, _id, _img, index, setIndex, idx, chkImg,handleFile,adder,required, accept_video, mimeType} = props
  const {onDelete} = props
  const [img, setImg] = useState(_img || null);

  var dataType = '';
  if(mimeType) {
    let file_type = mimeType.split('/');
    dataType = file_type[0];
  }

  const [type, setType] = useState(dataType || null);
  const [fileType, setFiletype] = useState(mimeType || null);
  
  console.log('mimeType', mimeType);

  const handleChange = (event) => {
    if(!event.target.files[0]) {
      return;
    }
    if(index){
      var tmp = index;
      console.log(tmp);
      if(!tmp.includes(idx)){
        tmp.push(idx);
        setIndex(tmp);
      }
    }
    
    let file = event.target.files[0];
    let file_type = file.type.split('/');
    setFiletype(file.type);
    setType(file_type[0]);
    let urlObj = URL.createObjectURL(file);
    if(handleFile) handleFile(urlObj,file,idx)
    if(!adder)
      setImg(URL.createObjectURL(file));
    else{
      event.target.value = ''
      // document.getElementById(_id).value = '';
    }
  }


  return (
    <>
      {
        !img ? (
          <div className="box-img text-center">
            <label htmlFor={_id} className={classNames("img-box mb-0", chkImg && 'img-required')}>
              <i className="fas fa-plus-square"></i>
            </label>
            <p className={classNames(chkImg && 'text-required')}>{_text} {_text == "ภาพปก"||required  ? <span className="text-danger">*</span> : ''}</p>
            <input id={_id} name={_name} type="file" onChange={handleChange} accept={`image/* ${accept_video ? ',video/*' : ''}`} />
          </div>
        ) : (
          <div className="box-img text-center">
            <label htmlFor={_id} className="img-box show mb-0">
          
              <img src={img} className="middle" />
             
              <div className="dropbox"></div>
              <div className="middle-absolute"><i className="fas fa-pen-square"></i></div>
            </label>
            <p>{_text}</p>
            <input id={_id} name={_name} type="file" onChange={handleChange} accept={`image/* ${accept_video ? ',video/*' : ''}`} />
          </div>
        )
      }
      
      
    </>
  )
}

export default ImageBoxCircle