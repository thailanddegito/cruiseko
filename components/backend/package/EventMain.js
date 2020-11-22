import dynamic from 'next/dynamic';
import React from 'react';
import DivLoad from '../../widget/DivLoad';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const EventMain = ((props) => {
  const {pkg} = props;

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="form-group mb-4">
            <label>Events Description</label>
            <Editor name="description" height="200px" required data={pkg?.event_description}  />
          </div>
        </div>
      </div>
    </>
  )
})
export default EventMain