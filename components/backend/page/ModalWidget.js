import React from 'react';
import { Modal } from 'react-bootstrap';
import Link from 'next/link'

const Dialog = ({show, onHide, size, page_id}) => {

  return (
    <Modal className="modal-alert" centered show={show} onHide={onHide} size={size}>
      <Modal.Body>
        <form>
          <div className="row mt-3 justify-content-center">
            <div className="col-12">
              <h4>Create Widgets</h4>
            </div>
          </div>


          <div className="row justify-content-center">
            <div className="col-4 my-3">
              <div className="text-center">
                <Link href="/backend/pages/[page_id]/customize/create?type=1" as={`/backend/pages/${page_id}/customize/create?type=1`}>
                  <button type="button" className="btn btn-primary mw-200px">Text</button>
                </Link>
              </div>
            </div>
            <div className="col-4 my-3">
              <div className="text-center">
                <Link href="/backend/pages/[page_id]/customize/create?type=2" as={`/backend/pages/${page_id}/customize/create?type=2`}>
                  <button type="button" className="btn btn-primary mw-200px">Text-Left & Image-Right</button>
                </Link>
              </div>
            </div>
            <div className="col-4 my-3">
              <div className="text-center">
                <Link href="/backend/pages/[page_id]/customize/create?type=3" as={`/backend/pages/${page_id}/customize/create?type=3`}>
                  <button type="button" className="btn btn-primary mw-200px">Image-Left & Text-Right</button>
                </Link>
              </div>
            </div>
          </div> 

          <div className="row justify-content-center">
            <div className="col-4 my-3">
              <div className="text-center">
                <Link href="/backend/pages/[page_id]/customize/create?type=4" as={`/backend/pages/${page_id}/customize/create?type=4`}>
                  <button type="button" className="btn btn-primary mw-200px">Text & Text</button>
                </Link>
              </div>
            </div>
            <div className="col-4 my-3">
              <div className="text-center">
                <Link href="/backend/pages/[page_id]/customize/create?type=5" as={`/backend/pages/${page_id}/customize/create?type=5`}>
                  <button type="button" className="btn btn-primary mw-200px">Image & Image</button>
                </Link>
              </div>
            </div>
            <div className="col-4 my-3">
              <div className="text-center">
                <Link href="/backend/pages/[page_id]/customize/create?type=6" as={`/backend/pages/${page_id}/customize/create?type=`}>
                  <button type="button" className="btn btn-primary mw-200px">Image</button>
                </Link>
              </div>
            </div>
          </div>


          <div className="row mt-4 justify-content-center">
            <div className="col-12 mb-3">
              <div className="text-right">
                <button type="button" className="btn btn-outline-primary mr-4" onClick={onHide}>Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>  
  )
}

export default Dialog