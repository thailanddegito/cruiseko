import React, {useState, useEffect, memo} from 'react';
import PriceInfo from './PriceInfo';
import TourInfo from '../package_tour/TourInfo';
import TierInfo from '../package_tier/TierInfo';
import Datetime from 'react-datetime';
import api from '../../../utils/api-admin'
import produce from 'immer'
import Button from '../../widget/Button';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

// const initPrice = {
//   adult : {price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0},
//   children : {price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0}
// }
const price_list = [
  {customer_type :'adult',name : "Adult's Price", price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0},
  {customer_type :'children',name : "Children's Price", price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0}
]

const initStateTypeNormal = {
    start_date:null,end_date : null,
    pricing_type : 'normal',
    user_type : [ {name : 'FIT',company_type_id : 0  ,price_list }  ]
}

const initFirstTier = {number : 2,price :null,deposit_rate:0,commission_rate: 0,deposit:0,commission:0}

const initStateTypeTier = {
    start_date:null,end_date : null,
    pricing_type : 'tier',
    user_type : [ {name : 'FIT',company_type_id : 0 , tier_start : 1 , tiers : [initFirstTier] }  ]
  
}

const PackagePrice = memo((props) => {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const [companies, setCompany] = useState();
  const {handleAdd,handleCancel,lasted ,editData ,handlePriceSave} = props

  const [data,setData] = useState(editData || initStateTypeNormal)

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
    setData(initStateTypeNormal)
    handleCancel && handleCancel()
  }

  const handlePriceChangeNormal =(user_type_name,customer_type,key,value) =>{
    const nextState = produce(data, draftState => {
      var price_data = draftState.user_type.find(val => val.name === user_type_name)
      .price_list.find(val => val.customer_type === customer_type)
      price_data[key] = value;

      if(!value) return;
      if(key === 'deposit_rate'){
        if(parseInt(value) !== NaN && price_data.price){
          var cal = parseFloat(price_data.price)  * parseFloat(value)  / 100
          price_data.deposit = cal
        }
      }
      else if(key === 'price'){
        if(parseInt(price_data.deposit_rate) ){
          var cal = parseFloat(price_data.price)  * parseFloat(price_data.deposit_rate)  / 100
          price_data.deposit = cal
        }
        if(parseInt(price_data.commission_rate)  ){
          var cal = parseFloat(price_data.price)  * parseFloat(price_data.commission_rate)  / 100
          cal = parseFloat(price_data.price) - parseInt(cal)
          cal = cal % 10 !== 0 ? cal - (cal % 10) + 10 : cal
          price_data.commission = cal
        }
      }
    })
    setData(nextState)
  }

  const handlePriceChangeTier = (user_type_name,tier_index,key,value) =>{
    // console.log(user_type_name,tier_index,key,value)
    const nextState = produce(data, draftState => {
      var price_data = draftState.user_type.find(val => val.name === user_type_name).tiers[tier_index];
      price_data[key] = value


      if(!value) return;
      if(key === 'deposit_rate'){
        if(parseInt(value) !== NaN && price_data.price){
          var cal = parseFloat(price_data.price)  * parseFloat(value)  / 100
          price_data.deposit = cal
        }
      }
      else if(key === 'price'){
        if(parseInt(price_data.deposit_rate) ){
          var cal = parseFloat(price_data.price)  * parseFloat(price_data.deposit_rate)  / 100
          price_data.deposit = cal
        }
        if(parseInt(price_data.commission_rate)  ){
          var cal = parseFloat(price_data.price)  * parseFloat(price_data.commission_rate)  / 100
          cal = parseFloat(price_data.price) - parseInt(cal)
          cal = cal % 10 !== 0 ? cal - (cal % 10) + 10 : cal
          price_data.commission = cal
        }
      }
    })
    setData(nextState)
  }

  const addUserTypeNormal = (user) =>{
    const nextState = produce(data, draftState => {
      var _price_list = price_list.map(val =>  (
        {...val,commission_rate : user.commission_rate}
      ) )
      var user_data = {...user,company_type_id : user.id,price_list : _price_list}
      
      draftState.user_type.push(user_data)
    })
    setData(nextState)
  }
  const addUserTypeTier = (user) =>{
    const nextState = produce(data, draftState => {
      var _tiers = [ {...initFirstTier,commission_rate : user.commission_rate} ]
      var user_data = {...user,company_type_id : user.id,tier_start : 1,tiers : _tiers}
      draftState.user_type.push(user_data)
    })
    setData(nextState)
  }

  const handleTierStartChange = (user_type_name,value) =>{
    // console.log(user_type_name,value)
    const nextState = produce(data, draftState => {
      draftState.user_type.find(val => val.name === user_type_name)
      .tier_start = value
    })
    setData(nextState)
  }

  const handleAddTier = (user_type_name,tier_index) =>{
    const nextState = produce(data, draftState => {
      var user = draftState.user_type.find(val => val.name === user_type_name)
      var tiers = user.tiers
      var prep = {...tiers[tier_index],number :null  }
      tiers.splice(tier_index+1,0,prep)
    })
    setData(nextState)
  }

  const showstartDate = (e) => {
    var date = e._d;
    setData({...data,start_date : date})
  }

  const showendDate = (e) => {
    var date = e._d;
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


  var options = [{ value: 'normal', label: 'Tour'}, { value: 'tier', label: 'Private Tour'}];
  // const [priceTypes, setPriceType] = useState('');
  const [addDataTier, setAddDataTier] = useState(false);
  const handleChange = (e) => {
    // setPriceType(e.value);
    var init = e.value === 'normal' ? initStateTypeNormal : initStateTypeTier
    setData(init)
  }

  // const handleAddTier = () => {
  //   setAddDataTier(true);
  // }
  console.log('data',data)
  // console.log('editData',editData)

  return (
    <>
      <div className="row justify-content-center mb-4">
        <div className="col-lg-3 col-12">
          <div className="form-group select2">
            <label>Type</label>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti={false}
                placeholder="-- Please Select Type --"
                name={"pricing_type"}
                options={options}
                onChange={(e) => handleChange(e)}
              /> 
          </div>
        </div>
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

            {
              data.pricing_type === 'normal' ? (
                <div className="pb-5">
                  <div>
                    <TourInfo  
                    data={data.user_type}
                    handlePriceChange={handlePriceChangeNormal}
                    addUserType={addUserTypeNormal} />
                  </div>
                </div>
              ) : null
            }
                  
          
            {
              data.pricing_type === 'tier' ? (
                <div className="pb-5">
                  <div>
                    <TierInfo 
                    data={data.user_type}
                    handlePriceChange={handlePriceChangeTier}
                    handleTierStartChange={handleTierStartChange}
                    handleAddTier={handleAddTier}
                    addUserType={addUserTypeTier} />
                  </div>
                </div>
              ) : null
            }
            <div className="text-center">
                <Button _type="button" _name={!editData ? "Add" : "Save"} _class="btn-primary" _click={() => !editData ? handleAdd(data) : handlePriceSave(data,editData.index)} />
                <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={onCancel} />
            </div>

            {/* {
              data.pricing_type === 'old' ? (
                <div className="package-type pb-5">
                  <div>
                    <PriceInfo name="Adult's Price" data={data.adult} type="adult" handlePriceChange={handlePriceChange} />
                    <PriceInfo name="Children's Price" data={data.children} type="children" handlePriceChange={handlePriceChange} />
                  </div>
                  <div className="text-center">
                    <Button _type="button" _name={editData ? "Save" : "Add"} _class="btn-primary" _click={() => editData? handlePriceSave(data,editData.index) : handleAdd(data)} />
                    <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={onCancel} />
                  </div>
                </div>
              ) : null
            }      */}
         
    
    </>
  )
})
export default PackagePrice