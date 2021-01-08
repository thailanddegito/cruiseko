import React from 'react';
import tools from '../../../utils/tools'

const ShowAddonData = (props) => {
  const {index,val : {name,price},handleClickEdit,handleDelete} = props;

  return (
    <>
      <div className="row div-table">
        <div className="col-4">{name}</div>
        <div className="col-4">{price}</div>
        <div className="col-4">
          <div className="text-right">
            <button type="button" onClick={() => handleClickEdit(index)} className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Edit</span></button>
            <button type="button" onClick={() => handleDelete(index)} className="a-manage danger"><i className="fa fa-fw fa-trash"></i> <span>Delete</span></button>            
          </div>
        </div>
      </div>
    </>
  )
}
export default ShowAddonData