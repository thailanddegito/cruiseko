import React, {useState, useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import InputLabel from '../../widget/InputLabel';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import api from '../../../utils/api-admin'

const animatedComponents = makeAnimated();

const Dialog = (props) => {
  const {addUserType, user_list, setCountUser} = props
  const [companies, setCompany] = useState();
  const [selected,setSelected] = useState();

  const fechCompany = () => {
    api.getCompany()
    .then(res=>{
      const data = res.data;
      var temp = data.map(val => ({...val,value : val.id, label : val.name})  )
      setCompany(temp);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const handleChange = (e) =>{
    setSelected(e.value)
  }

  const onClickOK = () =>{
    // alert(selected)
    if(!selected) {
      alert('Please select the value')
      return;
    }
    addUserType && addUserType(companies.find(val => val.id === selected) )
    setSelected('');
    props.onHide()
  }
  
  useEffect(() => {
    fechCompany();
  },[]);
  


  const filteredList = companies ? companies.filter(val => !user_list.includes(val.id) ) : [];
  setCountUser(filteredList.length);
  // console.log(filteredList);
 
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
                    options={filteredList}
                    onChange={handleChange}
                  /> 
              </div>
            </div>
            {/* <div className="col-12 mt-3">
                <InputLabel inputProps={{ 
                className:'form-control mr-2', type : 'text',
                name : 'name', required : true,
                value : props.price,
                onChange : (e) => onChange(e,'price')
              }} 
              labelName="Start Tier" iconProps={{className : 'fa icon icon-email'}}  />
            </div> */}
            <div className="col-12 mt-5 mb-4">
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={onClickOK}>OK</button>
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