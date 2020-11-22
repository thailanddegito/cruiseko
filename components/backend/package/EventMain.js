import dynamic from 'next/dynamic';
import React, {memo, useState} from 'react';
import DivLoad from '../../widget/DivLoad';
import Button from '../../widget/Button';
import EventAdd from './EventAdd';
import EventShow from './EventShow';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const EventMain = memo((props) => {
  const {pkg} = props;
  const [show, setShow] = useState(false);
  const [events, setEvent] = useState(false);

  if(!pkg) return null;

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
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
              events ? (
                <EventShow />
              ) : null
            }  
          </>
        ) : (
          <>
            <EventAdd />
            <div className="row">
              <div className="col-12">
                <Button _type="button" _name="Add" _class="btn-primary" _click={() => handleClose()} />
                <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={() => handleClose()} />
              </div>
            </div>
          </>
        )
      }
      
    </>
  )
})
export default EventMain