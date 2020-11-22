import React,{memo} from 'react';
import PriceData from './PriceData';

const EventShow = memo((props) => {
  const {name} = props;

  return (
    <>
      <div className="row">
        <div className="col-12">
          show
        </div>
      </div>
    </>
  )
})
export default EventShow