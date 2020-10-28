import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import api from '../../../utils/api-admin'
import Router, { useRouter } from 'next/router';
import Datetime from 'react-datetime';

const Dialog = ({show, onHide, size, user_id}) => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target)
    data.append('status', 1);
    api.updateUsers(user_id, data)
    .then(res=>{
      const data = res.data;
      onHide();
      Router.push('/backend/users');
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    })
  }

  const showstartDate = (e) => {
    var today = e._i;
    var data = e._d;
    // var da = setD(data);
    setStartDate(data);
  }

  return (
    <Modal className="modal-alert" centered show={show} onHide={onHide} size={size}>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="row mt-4 justify-content-center">
            <div className="col-12">
              <div className="form-group">
                <label></label>
                <Datetime 
                dateFormat="YYYY-MM-DD" 
                timeFormat={false}
                onChange={(e)=> {showstartDate(e)}}
                value={startDate ? startDate : ''}
                inputProps={{ name: 'license_expired_date', required : true, autoComplete : 'off' }} />
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="text-center">
                <button type="submit" className="btn btn-primary">ยืนยัน</button>
                <button type="button" className="btn btn-outline-primary ml-4" onClick={onHide}>ยกเลิก</button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>  
  )
}

export default Dialog