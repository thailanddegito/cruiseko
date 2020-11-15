
import React from 'react';

const Event = (props) => {
  const {error} = props;

  return (
    <>
      <li>
        <time className="cbp_tmtime" dateTime="09:30"><span>30 min.</span><span>09:30</span>
        </time>
        <div className="cbp_tmicon">
          1
        </div>
        <div className="cbp_tmlabel">
          <div className="hidden-xs">
            <img src="/template/img/tour_plan_1.jpg" alt="" className="rounded-circle thumb_visit"/>
          </div>
          <h4>Interior of the cathedral</h4>
          <p>
            Vero consequat cotidieque ad eam. Ea duis errem qui, impedit blandit sed eu. Ius diam vivendo ne.
          </p>
        </div>
      </li>
    </>
  )
}
export default Event