
import React from 'react';
import ReviewRateBar from './ReviewRateBar'
import AddReview from './AddReview'
import CommentReview from './CommentReview'

const Review = (props) => {
  const {reviews, packages} = props;
  console.log('reviews', reviews);

  return (
    reviews && (
      <>
      <h2>Reviews</h2>
        <div>
          <ReviewRateBar reviews={reviews} packages={packages} />
        </div>

        <hr />

        <div className="reviews-container">
          {
            reviews.rows.map((val, index) => (
              <CommentReview key={index} data={val} />
            ))
          }
        </div>
      </>
    )
    
  )
}
export default Review