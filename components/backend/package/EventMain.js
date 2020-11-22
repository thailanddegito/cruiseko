import dynamic from 'next/dynamic';
import React, {memo, useState} from 'react';
import DivLoad from '../../widget/DivLoad';
import Button from '../../widget/Button';
import EventAdd from './EventAdd';
import EventShow from './EventShow';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const EventMain = memo((props) => {
  const {pkg,events,setEvents} = props;
  const [show, setShow] = useState(false);
  const [editData,setEditData] = useState();
  // const [events, setEvent] = useState(false);

  // if(!pkg) return null;

  const handleShow = () => {
    setShow(true);
    if(editData) setEditData(null);
  }

  const handleClose = () => {
    setShow(false);
  }

  const addEvent = (item) =>{
    setEvents([...events,item]);
  }

  const editEvent = (item) =>{
    var tmp = [...events];
    tmp[item.index] = item;
    setEvents(tmp);
  }

  const handleDelete =(index) =>{
    var tmp = [...events];
    tmp.splice(index,1)
    setEvents(tmp)
  }

  const handleClickEdit = (index) =>{
    setEditData({...events[index],index})
    setShow(true);
  }

 

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Events Description</label>
            <Editor name="event_description" height="200px" required data={pkg ? pkg.event_description : ''}  />
          </div>
        </div>
      </div>
      {
        !show ? (
          <>
            <div className="row">
              <div className="col-12">
                {!show ?<Button _type="button" _name="Add" _class="btn-primary" _click={() => handleShow()} /> :null}
              </div>
            </div>  
            {
              events?.length ? (
                <EventShow events={events} handleDelete={handleDelete} handleClickEdit={handleClickEdit} />
              ) : null
            }  
          </>
        ) : (
          <>
            <EventAdd handleClose={handleClose} addEvent={addEvent} editEvent={editEvent} editData={editData} />
            {/* <div className="row">
              <div className="col-12">
                <Button _type="button" _name="Add" _class="btn-primary" _click={() => handleClose()} />
                <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={() => handleClose()} />
              </div>
            </div> */}
          </>
        )
      }
      
    </>
  )
})
export default EventMain