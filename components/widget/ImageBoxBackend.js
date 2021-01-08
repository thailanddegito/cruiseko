import classNames from 'classnames';
import React, { useState } from 'react';
  
const ImageBoxCircle = (props) => {
  const {show, _name, _text, _id, _img, index, setIndex, idx, chkImg,handleFile,adder,required, classBox = ""} = props
  const {onDelete} = props
  const [img, setImg] = useState(_img || null);


  const [type, setType] = useState(null);
  const [fileType, setFiletype] = useState(null);
  

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
          <div className="box-img">
            <label htmlFor={_id} className={classNames("img-box mb-0", chkImg && 'img-required', classBox)}>
              <i className="fa fa-fw fa-plus-square middle font-24"></i>
            </label>
            <input id={_id} name={_name} type="file" onChange={handleChange} accept={`image/*`} className="input-require" required={required} />
          </div>
        ) : (
          <div className="box-img">
            <label htmlFor={_id} className={`img-box show mb-0, ${classBox}`}>
          
              <img src={img} className="middle" />
             
              <div className="dropbox"></div>
              <div className="middle-absolute"><i className="fas fa-pen-square"></i></div>
            </label>
            <input id={_id} name={_name} type="file" onChange={handleChange} accept={`image/*`} />
          </div>
        )
      }
      
      
    </>
  )
}

export default ImageBoxCircle