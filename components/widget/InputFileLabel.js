
import React, {useState} from 'react';
  
const InputFileLabel = (props) => {
  const {labelName,inputProps={}, fileProps={}, file_id} = props;

  const [fileName, setFileName] = useState();

  const handleChange = (event) => {
    if(!event.target.files[0]) {
      return;
    }
    setFileName(event.target.files[0].name);
  }

  return (

      <div className="form-group input-file">
        <label>{labelName}</label>
        <div className="input-group">
          <input value={fileName} {...inputProps} />
            <label htmlFor={file_id} className="custom-file-upload mb-0">
              Insert
            </label>
          <input {...fileProps} id={file_id} onChange={handleChange} />
        </div>
      </div>

  )
}
export default InputFileLabel