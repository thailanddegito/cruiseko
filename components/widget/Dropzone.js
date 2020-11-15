import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
  maxWidth: '100%',
  objectFit : 'contain',
  margin : '0 auto'
};

const Dropzone = (props) => {
  const {handleUpload,onUploadDone, id} = props;
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  const onSave = async ()=>{
    //event.preventDefault();
    if(!files.length){
      return;
    }

    if(handleUpload){
      let task = [];
      files.forEach(val => {
        
        let formData = new FormData()
        formData.append('image',val)
        if(id) {
          task.push(handleUpload(id, formData))
        }else{
          task.push(handleUpload(formData))
        }
        
      })
      await Promise.all(task);
    }
    if(onUploadDone) onUploadDone();
    onCancel();
  }
  const onCancel = ()=>{
    setFiles([])
  }
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div >
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} name="images" />
        <p className="mb-0 text-center">เลือกไฟล์ หรือ ลากไฟล์</p>
      </div>
      <div style={thumbsContainer}>
        {thumbs}
      </div>
      {/* <div style={{display:'none'}}>
        {files.map((val,index) => <input key={index} defaultValue={val} name="images" /> )}
      </div> */}
    </div>
  );
}

export default Dropzone