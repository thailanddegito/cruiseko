
import React from 'react';
  
const UserDetail = (props) => {
  const {users} = props;
  if(!users) return null;
  console.log(users);
  var position_text;
  if(users.position == 1) {position_text = "Sale"}
  if(users.position == 2) {position_text = "Sales Agent"}
  if(users.position == 3) {position_text = "Sales & Operation"}
  if(users.position == 4) {position_text = "Tour Operation"}
  if(users.position == 5) {position_text = "Operations Executive"}
  if(users.position == 6) {position_text = "Operation Manager"}

  return (
    <>
      <div className="row align-items-center">
        <div className="col-lg-2 col-md-4 col-12">
          <div className="box-approve">
            <img src={users.image_logo ? users.image_logo : "/template/img/no-picture.png"} className="approve-logo" />
          </div>
        </div>
        <div className="col-lg-10 col-md-8 col-12">
          <div><h5>{users.company_name_en}</h5></div>
          <div><p className="mb-0">{users.company_name_th}</p></div>
        </div>
      </div>
      <div className="row align-items-center mt-4">
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">User ID :</span> {users.id}</p></div>
        </div>
      </div>
      <div className="row align-items-center mt-2">
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">Compay Type :</span> {users.company_type?.name}</p></div>
        </div>
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">License NO. :</span> {users.license_no}</p></div>
        </div>
      </div>
      <div className="row align-items-center mt-2">
        <div className="col-12">
          <div>
            <p className="mb-0">
              <span className="font-weight-bold">Address :</span> {users.address} {users.province} {users.amphoe} {users.district} {users.zipcode}
            </p>
          </div>
        </div>
      </div>
      <div className="row align-items-center mt-4">
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">Phone :</span> {users.company_phone}</p></div>
        </div>
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">Email :</span> {users.company_email}</p></div>
        </div>
      </div>
      <div className="row align-items-center my-4">
        <div className="col-12">
          <div className="text-center">
            <h5>User Information</h5>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">Full Name :</span> {users.firstname} {users.lastname}</p></div>
        </div>
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">Position :</span> {position_text}</p></div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">Phone :</span> {users.phone}</p></div>
        </div>
        <div className="col-md-6 col-12">
          <div><p className="mb-0"><span className="font-weight-bold">Email :</span> {users.email}</p></div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-12">
          <div><p className="mb-0"><span className="font-weight-bold">Line ID :</span> {users.line_id}</p></div>
        </div>
      </div>
    </>
  )
}
export default UserDetail