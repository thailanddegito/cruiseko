import React from 'react';
import { Modal } from 'react-bootstrap';

const Dialog = (props) => {

  return (
    <Modal className="modal-alert" centered show={props.show} onHide={props.onHide} size={props.size}>
      <Modal.Body>
        <form>
          <div className="row mt-4 justify-content-center">
            <div className="col-12">
              <div className="text-center">
                <img src="/icon/Attention.svg" />
              </div>
            </div>
            <div className="col-12 my-4">
              <div className="text-center">
                <h3>{props.text}</h3>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={props.onHide}>ตกลง</button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>  
  )
}

export default Dialog