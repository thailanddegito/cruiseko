import React from 'react';
import { Modal } from 'react-bootstrap';
import InputLabel from '../../widget/InputLabel';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Dialog = (props) => {

  var options = [{ value: '1', label: 'Tour'}, { value: '2', label: 'Tier'}];

 
  return (
    <Modal className="modal-alert" centered show={props.show} onHide={props.onHide} size={props.size}>
      <Modal.Body>
        <form>
          <div className="row mt-4 justify-content-center">
            <div className="col-12">
              <div className="form-group select2">
                <label>Company Type</label>
                <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti={false}
                    placeholder="-- Please Select Type --"
                    name={"price_types"}
                    options={options}
                    onChange={(e) => handleChange(e)}
                  /> 
              </div>
            </div>
            <div className="col-12 mt-3">
                <InputLabel inputProps={{ 
                className:'form-control mr-2', type : 'text',
                name : 'name', required : true,
                value : props.price,
                onChange : (e) => onChange(e,'price')
              }} 
              labelName="Start Tier" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
            <div className="col-12 mb-4">
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={props.onHide}>OK</button>
                <button type="button" className="btn btn-outline-primary ml-4" onClick={props.onHide}>Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>  
  )
}

export default Dialog