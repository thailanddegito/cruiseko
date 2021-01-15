
import React from 'react';

const ReviewRateBar = (props) => {
  const {reviews, packages} = props;
  var rateavg = { a1: 0, a2: 0, a3: 0, a4: 0, a5: 0 };

  reviews.review_detail.forEach(val => {
    if (val.rating == 5) {
      rateavg.a5 = (val.cnt / reviews.count) * 100;
    }
    if (val.rating == 4) {
      rateavg.a4 = (val.cnt / reviews.count) * 100;
    }
    if (val.rating == 3) {
      rateavg.a3 = (val.cnt / reviews.count) * 100;
    }
    if (val.rating == 2) {
      rateavg.a2 = (val.cnt / reviews.count) * 100;
    }
    if (val.rating == 1) {
      rateavg.a1 = (val.cnt / reviews.count) * 100;
    }


  return (
    <>
      <div className="reviews-container">
        <div className="row">
          <div className="col-lg-3">
            <div id="review_summary">
              <strong>{packages.rating ? parseFloat(packages.rating).toFixed(1) : '0.0'}</strong>
              <em>Superb</em>
              <small>Based on {reviews.count} reviews</small>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : `${rateavg.a5}%`}} aria-valuenow={rateavg.a5} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : `${rateavg.a4}%`}} aria-valuenow={rateavg.a4} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : `${rateavg.a3}%`}} aria-valuenow={rateavg.a3} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : `${rateavg.a2}%`}} aria-valuenow={rateavg.a2} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-9">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width : `${rateavg.a1}%`}} aria-valuenow={rateavg.a1} aria-valuemin="0" aria-valuemax="100"></div>
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