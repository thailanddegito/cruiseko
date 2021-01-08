import React from 'react';
import tools from '../../../utils/tools'
import ShowPriceData from './ShowPriceData'
import ShowAddonData from './ShowAddonData'


const ShowAddons = (props) => {
  const {data,onClickEdit,onClickDelete} = props;

  return (
    <>
      {
        data && data.length ? (
          <>
            <div className="row my-4">
              <div className="col-4"><p className="p-medium">Name</p></div>
              <div className="col-4"><p className="p-medium">Pricing</p></div>
              <div className="col-4"><div className="text-right"></div></div>
            </div>
            <div>
              <ShowAddonData />
            </div>
          </>
        ) : null
      }
    </>
  )
}
export default ShowAddons