import React,{memo} from 'react';

const EventShowData = memo((props) => {
  const {name} = props;

  return (
    <>
      <div className="row div-table">
        <div className="col-4">Title</div>
        <div className="col-4">Time Title</div>
        <div className="col-4">
          <div className="text-right">
            <button className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>See more</span></button>
            <button className="a-manage danger"><i className="fa fa-fw fa-trash"></i> <span>Delete</span></button>            
          </div>
        </div>
      </div>
    </>
  )
})
export default EventShowData