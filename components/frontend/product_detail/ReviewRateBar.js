
import React from 'react';

const ReviewRateBar = (props) => {
  const {error} = props;

  return (
    <>
      <div className="reviews-container">
        <div className="row">
          <div className="col-lg-3">
            <div id="review_summary">
              <strong>8.5</strong>
              <em>Superb</em>
              <small>Based on 4 reviews</small>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : '0'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ReviewRateBar