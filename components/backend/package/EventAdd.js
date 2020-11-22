import React,{memo, useState} from 'react';
import PriceData from './PriceData';
import InputLabel from '../../widget/InputLabel';

const EventAdd = memo((props) => {
  const {name} = props;
  const [img, setImg] = useState("/template/img/tour_1.jpg");

  const handleChange = (event) => {
    if(!event.target.files[0]) {
      return;
    }
    setImg(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h5>Add Events</h5>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'title', required : true,
          }} 
          labelName="Title" iconProps={{className : 'fa icon icon-email'}}  /> 
        </div>
        <div className="col-lg-6 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'time_title', required : true,
          }} 
          labelName="Time Title" iconProps={{className : 'fa icon icon-email'}}  /> 
        </div>
        <div className="col-lg-6 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'time', required : true,
          }} 
          labelName="Time" iconProps={{className : 'fa icon icon-email'}}  /> 
        </div>
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Description</label>
            <textarea className="form-control" name="description" required ></textarea>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="form-group">
            <label>Thumbnail</label>
            <div className="default-picture">
              <div>
                <img src={img} className="mw-100" />
              </div>
              <input type="file" name="image" id="image" className="form-control"  onChange={handleChange} accept="image/png, image/jpeg, image/gif, image/jpg, image/svg"  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
export default EventAdd