import React from 'react';

const UserBooking = (props) => {
  const {data} = props;

  return (
    <div className="detail">
      <h5>User Booking</h5>
      <p className="mb-1"><span>User ID : </span> {data.user_id}</p>
      <p className="mb-1"><span>Name : </span> {data.user_firstname} {data.user_lastname}</p>
      <p className="mb-1"><span>Email : </span> {data.user_email}</p>
      <p className="mb-1"><span>Phone : </span> {data.user_phone}</p>

    </div>
  )
}

export default UserBooking