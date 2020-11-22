import React,{memo, useState,useEffect} from 'react';
import PriceData from './PriceData';
import InputLabel from '../../widget/InputLabel';
import Button from '../../widget/Button';


const init_state = {
  title : '',
  time_title : '',
  time : '',
  description : '',
  file : null,
  image : null,
}


const EventAdd = memo((props) => {
  const {editData,addEvent,handleClose,editEvent} = props;
  const [img, setImg] = useState("/template/img/tour_1.jpg");
  const [state,setState] = useState(editData || init_state)

  useEffect(() => {
    if(editData)
      setState(editData)
  }, [editData]);

  const handleImageChange = (event) => {
    if(!event.target.files[0]) {
      return;
    }
    const file = event.target.files[0];
    // setImg(URL.createObjectURL(file));
    setState({...state,file,image :  URL.createObjectURL(file) })
  }

  const handleChange = (e) =>{
    const {name,value} = e.target;
    const key = name.split(':')[1]
    if(!key) return;
    setState({...state,[key] : value  })
  }

  const onClickAdd = () =>{
    addEvent(state);
    handleClose && handleClose();
  }
  const onClickEdit = ()=>{
    editEvent(state);
    handleClose && handleClose();
  }

  const onClickClose =()=>{
    setState(init_state);
    handleClose && handleClose();
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
            name : 'event:title', required : true,
            value : state.title,onChange : handleChange
          }} 
          labelName="Title" iconProps={{className : 'fa icon icon-email'}}  /> 
        </div>
        <div className="col-lg-6 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'event:time_title', required : true,
            value : state.time_title,onChange : handleChange
          }} 
          labelName="Time Title" iconProps={{className : 'fa icon icon-email'}}  /> 
        </div>
        <div className="col-lg-6 col-12">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'text',
            name : 'event:time', required : true,
            value : state.time,onChange : handleChange
          }} 
          labelName="Time" iconProps={{className : 'fa icon icon-email'}}  /> 
        </div>
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Description</label>
            <textarea className="form-control" 
            onChange={handleChange}
            name="event:description" value={state.description} required >

            </textarea>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="form-group">
            <label>Thumbnail</label>
            <div className="default-picture">
              <div>
                <img src={state.image || "/template/img/tour_1.jpg"} className="mw-100" />
              </div>
              <input type="file" name="image" id="image" className="form-control"  onChange={handleImageChange} accept="image/png, image/jpeg, image/gif, image/jpg, image/svg"  />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Button _type="button" _name={editData ?"Save" : "Add"} _class="btn-primary" _click={editData? onClickEdit : onClickAdd} />
          <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={onClickClose} />
        </div>
      </div>
    </>
  )
})
export default EventAdd