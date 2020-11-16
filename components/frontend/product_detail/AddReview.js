import React from 'react';

const AddReview = (props) => {
  const {error} = props;

  return (
    <>
      <div className="add-review">
        <h5>Leave a Review</h5>
        <form>
          <div className="row">
            <div className="form-group col-md-6">
              <label>Name and Lastname *</label>
              <input type="text" name="name_review" id="name_review" placeholder="" defaultValue="" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label>Email *</label>
              <input type="email" name="email_review" id="email_review" defaultValue="" className="form-control" />
            </div>
            {/* <div className="form-group col-md-6">
              <label>Rating </label>
              <div className="custom-select-form">
              <select name="rating_review" id="rating_review" defaultValue="1" className="wide">
                <option value="1">1 (lowest)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5" selected>5 (medium)</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 (highest)</option>
              </select>
              </div>
            </div> */}
            <div className="form-group col-md-12">
              <label>Your Review</label>
              <textarea name="review_text" id="review_text" className="form-control" style={{height : '130px'}}></textarea>
            </div>
            <div className="form-group col-md-12 add_top_20">
              <input type="submit" value="Submit" className="btn_1" id="submit-review" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default AddReview