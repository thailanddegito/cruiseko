import React,{memo} from 'react';

const EventShowData = memo((props) => {
  const {title,time_title,index,handleDelete,handleClickEdit} = props;

  return (
    <>
      <div className="row div-table">
        <div className="col-4">{title} </div>
        <div className="col-4">{time_title}</div>
        <div className="col-4">
          <div className="text-right">
            <button type="button" className="a-manage warning" onClick={()=> handleClickEdit(index)} >
              <i className="fa fa-fw fa-pencil">
              </i> <span>See more</span>
            </button>
            <button type="button" className="a-manage danger" onClick={()=> handleDelete(index)}>
              <i className="fa fa-fw fa-trash"></i> 
              <span>Delete</span>
            </button>            
          </div>
        </div>
      </div>
    </>
  )
})
export default EventShowData