
import React from 'react';

const Event = (props) => {
  const {number, data} = props;

  return (
    <>
      <li>
        <time className="cbp_tmtime" dateTime="09:30"><span>{data.time}</span><span>{data.time_title}</span>
        </time>
        <div className="cbp_tmicon">
          {number}
        </div>
        <div className="cbp_tmlabel">
          {
            data.image ? (
              <div className="hidden-xs">
                <img src={data.image ? data.image : "/template/img/tour_plan_1.jpg"} alt="" className="rounded-circle thumb_visit"/>
              </div>
            ) : null
          }
          <h4>{data.title}</h4>
          <p>
            {data.description}
          </p>
        </div>
      </li>
    </>
  )
}
export default Event