import React from 'react';
import tools from '../../../utils/tools'

const ShowAddonData = (props) => {
  // const {val : {pricing_type,start_date, end_date},onClickEdit,onClickDelete} = props;

  return (
    <>
      <div className="row div-table">
        <div className="col-4">name</div>
        <div className="col-4">price</div>
        <div className="col-4">
          <div className="text-right">
            <button type="button" className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>See more</span></button>
            <button type="button" className="a-manage danger"><i className="fa fa-fw fa-trash"></i> <span>Delete</span></button>            
          </div>
        </div>
      </div>
    </>
  )
}
export default ShowAddonData