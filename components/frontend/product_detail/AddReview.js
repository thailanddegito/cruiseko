import React from 'react';
import SelectLabel from '../../widget/SelectLabel';

const AddReview = (props) => {
  const {data, handleSave} = props;

  const options = [{val : '1', name : '1 (lowest)'}, {val : '2', name : '2'}, {val : '3', name : '3'}, {val : '4', name : '4'}, {val : '5', name : '5 (medium)'}
  , {val : '6', name : '6'}, {val : '7', name : '7'}, {val : '8', name : '8'}, {val : '9', name : '9'}, {val : '10', name : '10 (highest)'}];


  return (
    <>
      <div className="add-review">
        <h5>Leave a Review</h5>
        <form onSubmit={handleSave}>
          <input type="hidden" name="booking_id" defaultValue={data.booking_details[0]?.booking_id} />
          <div className="row">
            <div className="col-md-6">
              <SelectLabel 
                inputProps={{ 
                  className:'form-control', 
                  name : 'rating', required : true,
                }} 
                labelName="Rating" icon={false} options={options} />
              {/* <label>Rating </label>
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
              </div> */}
            </div>
            <div className="form-group col-md-12">
              <label>Your Review</label>
              <textarea name="description" id="description" className="form-control" style={{height : '130px'}}></textarea>
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