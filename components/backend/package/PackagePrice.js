import React, {useState, useEffect, memo} from 'react';
import InputLabel from '../../widget/InputLabel';
import PriceData from './PriceData';
import Datetime from 'react-datetime';
import api from '../../../utils/api-admin'
import produce from 'immer'
import Button from '../../widget/Button';

const PackagePrice = memo((props) => {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const [companies, setCompany] = useState();
  const {handleAdd,handleCancel,lasted ,editData ,handlePriceSave} = props
  const initState = {
    start_date:null,end_date : null,
    adult : [{company_type_id : 0,name : 'FIT',price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0} ],
    children : [{company_type_id : 0,name : 'FIT',price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0} ],
  }
  const [data,setData] = useState(editData || initState)

  const fechCompany = () => {
    if(companies || editData) return;
    console.log('fetch')
    api.getCompany()
    .then(res=>{
      const data = res.data;
      setCompany(data);
      return data
    })
    .then(companies => {
      // console.log(companies)
      var adult = companies.map( val => (
        {
          company_type_id : val.id,name : val.name,price :null,
          deposit_rate:null,deposit:null,commission:null,commission_rate: val.commission_rate
        }
      ))
      var children = companies.map( val => (
        {
          company_type_id : val.id,name : val.name,price :null,
          deposit_rate:null,deposit:null,commission:null,commission_rate: val.commission_rate
        }
      ))
      var temp = {...data , adult : [...data.adult,...adult] ,children: [...data.children,...children]}
      setData(temp)
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    fechCompany();
  },[]);

  useEffect(() => editData && setData(editData) ,[editData]  )


  const onCancel = ()=>{
    setData(initState)
    handleCancel && handleCancel()
  }

  const handlePriceChange =(type,index,key,val) =>{
    const nextState = produce(data, draftState => {
      draftState[type][index][key] = val
    })
    setData(nextState)
  }

  const showstartDate = (e) => {
    var date = e._d;
    // setStartDate(data);
    setData({...data,start_date : date})
  }

  const showendDate = (e) => {
    var date = e._d;
    // setEndDate(data);
    setData({...data,end_date : date})
  }

  const validStartDate = (current) => {
    // var getStart = startDate;
    return current.isAfter(lasted.end_date);
  }

  const validEndDate = (current) => {
    var getStart = data.start_date;
    return current.isSameOrAfter(getStart);
  }

  console.log('data',data)
  console.log('editData',editData)

  return (
    <>
      <div className="row justify-content-center mb-4">
        <div className="col-lg-3 col-12">
          <div className="form-group">
            <label>When does your schedule start?</label>
            <Datetime
            dateFormat="YYYY-MM-DD"
            timeFormat={false}
            onChange={(e) => { showstartDate(e) }}
            value={data.start_date}
            inputProps={{ name: 'start_date', required: true, autoComplete: 'off' }} 
            isValidDate={lasted? validStartDate : undefined}
             />
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <label>When does your schedule end?</label>
          <Datetime
          dateFormat="YYYY-MM-DD"
          timeFormat={false}
          onChange={(e) => { showendDate(e) }}
          value={data.end_date}
          inputProps={{ name: 'end_date', required: true, autoComplete: 'off' }}
          isValidDate={validEndDate} />
        </div>
      </div>

      <div className="adult">
        <div className="adult-head">
          <div className="row">
            <div className="col-12">
              <span>Adult's Price</span>
            </div>
          </div>
        </div>
        <div className="adult-body my-4">
          {
            data.adult.map((val, index) => (
              <PriceData key={val.company_type_id} 
              {...val}
              type="adult"
              index={index}
              handlePriceChange={handlePriceChange}
              />
            ))
          }
          
        </div>
      </div>
      <div className="children">
        <div className="children-head">
          <div className="row">
            <div className="col-12">
              <span>Children's Price</span>
            </div>
          </div>
        </div>
        <div className="children-body my-4">
          {
            data.children.map((val, index) => (
              <PriceData key={val.company_type_id} 
              type="children"
              handlePriceChange={handlePriceChange}
              index={index}
              {...val}
              />
            ))
          }
        </div>
      </div>
      <div className="text-center">
        <Button _type="button" _name={editData ? "Save" : "Add"} _class="btn-primary" _click={() => editData? handlePriceSave(data,editData.index) : handleAdd(data)} />
        <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={onCancel} />
      </div>
    </>
  )
})
export default PackagePrice