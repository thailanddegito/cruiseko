import React from 'react';
import { Modal } from 'react-bootstrap';
import Router from 'next/router';

const Dialog = (props) => {
  const {route, onHide} = props;
  const redirectPage = (e) => {
    if(route) {
      Router.push(route);
    }else{
      onHide();
    }
    
  }

  return (
    <Modal className="modal-alert" centered show={props.show} onHide={redirectPage} size={props.size}>
      <Modal.Body>
        <form>
          <div className="row mt-4 justify-content-center">
            <div className="col-12">
              <div className="text-center">
                <img src="/icon/success.svg" />
              </div>
            </div>
            <div className="col-12 my-4">
              <div className="text-center">
                <h3>{props.text}</h3>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={redirectPage}>OK</button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>  
  )
}

export default Dialog