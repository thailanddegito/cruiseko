import React,{memo} from 'react';
import EventShowData from './EventShowData';

const EventShow = memo((props) => {
  const {events,handleDelete,handleClickEdit} = props;

  return (
    <>
      <div className="row my-4">
        <div className="col-4"><p className="p-medium">Events Title</p></div>
        <div className="col-4"><p className="p-medium">Time Title</p></div>
        <div className="col-4"><div className="text-right"></div></div>
      </div>
      <div>
        {events.map((val,index) => (
          <EventShowData {...val} index={index} handleDelete={handleDelete} handleClickEdit={handleClickEdit} />
        ) )}
      </div>
    </>
  )
})
export default EventShow