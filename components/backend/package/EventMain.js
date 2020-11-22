import dynamic from 'next/dynamic';
import React, {memo} from 'react';
import DivLoad from '../../widget/DivLoad';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const EventMain = memo((props) => {
  const {pkg} = props;

  if(!pkg) return null;

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
    </>
  )
})
export default EventMain