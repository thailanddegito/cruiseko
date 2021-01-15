
import React from 'react';
import ReviewRateBar from './ReviewRateBar'
import AddReview from './AddReview'
import CommentReview from './CommentReview'

const Review = (props) => {
  const {error} = props;

  return (
    <>
      <h2>Reviews</h2>
      <div>
        <ReviewRateBar />
      </div>

      <hr />

      <div className="reviews-container">
        <CommentReview />
      </div>
   
      
      {/* <AddReview /> */}
    </>
  )
}
export default Review