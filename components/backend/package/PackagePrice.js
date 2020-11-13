import React, {useState, useEffect, memo} from 'react';
import InputLabel from '../../widget/InputLabel';
import PriceInfo from './PriceInfo';
import PackageTier from './PackageTier';
import Datetime from 'react-datetime';
import api from '../../../utils/api-admin'
import produce from 'immer'
import Button from '../../widget/Button';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


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


  var options = [{ value: '1', label: 'Tour'}, { value: '2', label: 'Tier'}];
  const [priceTypes, setPriceType] = useState('');
  const [addDataTier, setAddDataTier] = useState(false);
  const handleChange = (e) => {
    if(e) {
      setPriceType(e.value);
    }else{
      setPriceType('');
    }
  }

  const handleAddTier = () => {
    setAddDataTier(true);
  }
  // console.log('data',data)
  // console.log('editData',editData)

  return (
    <>
      <div className="row justify-content-center mb-4">
        <div className="col-lg-3 col-12">
          <div className="form-group">
            <label>Type</label>
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
        priceTypes ? (
          <div className="package-type pb-5">
            {
              priceTypes == 1 ? (
                <>
                  <div>
                    <PriceInfo name="Adult's Price" data={data.adult} type="adult" handlePriceChange={handlePriceChange} />
                    <PriceInfo name="Children's Price" data={data.children} type="children" handlePriceChange={handlePriceChange} />
                  </div>
                  <div className="text-center">
                    <Button _type="button" _name={editData ? "Save" : "Add"} _class="btn-primary" _click={() => editData? handlePriceSave(data,editData.index) : handleAdd(data)} />
                    <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" _click={onCancel} />
                  </div>
                </>
              ) : null
            }
            {
              priceTypes == 2 ? (
                <>
                  <PackageTier handleAddTier={handleAddTier} />
                  {
                    addDataTier ? (
                      <>
                        <div className="tier">
                          <div className="tier-header">Tier 1 - 2</div>
                          <div>
                            <PriceInfo name="Adult's Price" data={data.adult} type="adult" handlePriceChange={handlePriceChange} />
                            <PriceInfo name="Children's Price" data={data.children} type="children" handlePriceChange={handlePriceChange} />
                          </div>
                        </div>
                        <div className="text-center">
                          <Button _type="button" _name={'Save'} _class="btn-primary" />
                          <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" />
                        </div>
                      </>
                    ) : null
                  }
                </>
              ) : null
            }
           
          </div>
        ) : null
      }
     
    </>
  )
})
export default PackagePrice