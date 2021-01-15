import React from 'react';
import tools from '../../../utils/tools'

const AddReview = (props) => {
  const {data} = props;
  if(!data) return;

  var star = [];
  for (var i = 1; i <= data.rating; i++) {
    star.push(<i className="icon_star voted"></i>);
  }


  return (
    <>
      <div className="review-box clearfix pl-0">
        {/* <figure className="rev-thumb"><img src="/template/img/avatar1.jpg" alt=""/>
        </figure> */}
        <div className="rev-content">
          <div className="rating">
            {star}
          </div>
          <div className="rev-info">
            {data.user.firstname}  {data.user.lastname} – {data.createdAt ? tools.formatDate(data.createdAt,false,false) : null}:
          </div>
          <div className="rev-text">
            <p>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddReview