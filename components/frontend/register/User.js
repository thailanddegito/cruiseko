
import React,{useState} from 'react';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Button from '../../widget/Button';
import api from '../../../utils/api'
const User = (props) => {
  const {show, setShow,inputData={},handleChange,setInputData} = props;
  const [emailError,setEmailError] = useState()
  const saveStep2 = async (event) => {
    event.preventDefault();
    // console.log(inputData)
    try{
      var res = await api.checkEmail({email : inputData.email})
      if(res.data.duplicated){
        setEmailError('This email is already exists')
        return
      }

      if(inputData.company_type === 'agent' || inputData.company_type === 'hotel'){
        res = await api.genUserId({type : inputData.company_type })
        if(res.data.id){
          setInputData && setInputData({...inputData,id :res.data.id })
          setShow(3);
        }
      }
      else{
        setShow(3);
      }

    }
    catch(err){
      console.log(err.response)
      alert('Error !')
    }

    
  }

  const optionPosition = [
    {val : '1', name : 'Sale'},{val : '2', name : 'Sales Agent'},{val : '3', name : 'Sales & Operation'},
    {val : '4', name : 'Tour Operation'},{val : '5', name : 'Operations Executive'},{val : '6', name : 'Operation Manager '}
  ];

  return (
    <>
      <div className={`${show ? 'd-block' : 'd-none'}`}>
        <form onSubmit={saveStep2} id="form-user" >
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control icon', type : 'text',name : 'firstname', required : true}} 
              labelName="Firstname" iconProps={{className : 'fa icon icon-user'}}  />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control icon', type : 'text',name : 'lastname', required : true}} 
              labelName="Lastname " iconProps={{className : 'fa icon icon-user'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <SelectLabel inputProps={{ className:'form-control', name : 'position', required : true}} 
              labelName="Position" options={optionPosition} />
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control icon', type : 'text',name : 'phone'}} 
              labelName="Tel " iconProps={{className : 'fa icon icon-phone'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control icon', type : 'email',
                name : 'email', required : true,
                value:inputData.email,onChange:handleChange
              }} 
              labelName="Email" iconProps={{className : 'fa icon icon-email'}}  />

              {emailError && <div className="text-danger">{emailError} </div>}
            </div>
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ className:'form-control icon', type : 'text',name : 'line_id'}} 
              labelName="Line ID (Not required)" iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-start">
            <div className="col-12">
              <div className="form-group">
                <Button _type="submit" _name="Next" _class="btn-primary" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default User