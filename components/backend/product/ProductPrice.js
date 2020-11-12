import React, {useState, useEffect, memo} from 'react';
import InputLabel from '../../widget/InputLabel';
import PriceData from '../product/PriceData';
import Datetime from 'react-datetime';
import api from '../../../utils/api-admin'

const ProductPrice = memo((props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [companies, setCompany] = useState();

  const fechCompany = () => {
    api.getCompany()
    .then(res=>{
      const data = res.data;
      setCompany(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    fechCompany();
  },[]);

  const showstartDate = (e) => {
    var today = e._i;
    var data = e._d;
    setStartDate(data);
  }

  const showendDate = (e) => {
    var today = e._i;
    var data = e._d;
    setEndDate(data);
  }

  const validStartDate = (current) => {
    // var getStart = startDate;
    return current.isSameOrBefore(new Date());
  }

  const validEndDate = (current) => {
    var getStart = startDate;
    return current.isSameOrAfter(getStart) && current.isSameOrBefore(new Date());
  }

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
            value={startDate ? startDate : ''}
            inputProps={{ name: 'start_date', required: true, autoComplete: 'off' }} 
            isValidDate={validStartDate} />
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <label>When does your schedule end?</label>
          <Datetime
          dateFormat="YYYY-MM-DD"
          timeFormat={false}
          onChange={(e) => { showendDate(e) }}
          value={endDate ? endDate : ''}
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
          <PriceData name="fit" text="FIT" />
          {
            companies && companies.map((val, index) => (
              <PriceData name={val.id} text={val.name} key={index} />
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
          <PriceData name="fit" text="FIT" />
          <PriceData name="agent" text="Agent" />
        </div>
      </div>
    </>
  )
})
export default ProductPrice