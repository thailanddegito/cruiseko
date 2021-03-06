
import React, {useEffect, useState} from 'react';
import api from '../../../utils/api';
import SelectAmount from '../../widget/SelectAmount';
import SelectStyle from '../../widget/SelectStyle';

const SearchPackage = (props) => {
  const {handleSubmit, setActive, active, state, setState, query, date_show, home = false, boat_type, setType, type, charter = false} = props;

  const qtySum = () => {
    var arr = document.getElementsByName('qtyInput');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }

    var cardQty = document.querySelector(".qtyTotal");
    cardQty.innerHTML = tot;
  } 
  
  useEffect(() => {
    'use strict';
	  $('input[name="dates"]').daterangepicker({
		  autoUpdateInput: false,
		  minDate:new Date(),
		  locale: {
			  cancelLabel: 'Clear'
		  }
	  });
	  $('input[name="dates"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM-DD-YY') + '>' + picker.endDate.format('MM-DD-YY'));
      setState({...state,
        start_date : picker.startDate.format('YYYY-MM-DD'),
        end_date : picker.endDate.format('YYYY-MM-DD'),
      })
	  });
	  $('input[name="dates"]').on('cancel.daterangepicker', function(ev, picker) {
		  $(this).val('');
	  });
  }, [])

  useEffect(() => {
    qtySum();
    function removeAnimation() { $(".qtyTotal").removeClass("rotate-x"); }
    const counter = document.querySelector(".qtyTotal");
    counter.addEventListener("animationend", removeAnimation);
  },[state.adult, state.children]);


  const handleButton = (key, btn) => {
    $(".qtyTotal").addClass("rotate-x");
    var oldValue = state[key];
    // alert(btn)
    if (btn == 'plus') {
      var newVal = parseInt(oldValue) + 1;
    } 
    else {
      if (oldValue > 0) {
        var newVal = parseInt(oldValue) - 1;
      } 
      else {
        newVal = 0;
      }
    }
    if(key === 'adult' && newVal === 0)
      newVal = 1;
    if(key === 'children' && newVal === 0)
      newVal = 0;
    setState({...state,[key] :newVal })
  }

  const [open, setOpen] = useState(false);
  const [activities, setActivities] = useState();
  const [textOptions, setTextOption] = useState("All Activities");
  const [option_val, setOptionVal] = useState();

  const fecthBoatCate = () => {
    api.getActivities()
    .then(res=>{
      const data = res.data;
      setType(data && data[0]?.type);
      if(home) {
        var temp = data.map(val => ({...val,value : val.cate_id}))
      }else{
        var temp = data.filter((item) => item.type == boat_type).map(val => ({...val,value : val.cate_id}))
      }
      setActivities(temp);
      if(query) {
        var text = data && data.find((val) => val.cate_id == query?.activities).name;
        setTextOption(text);
        setOptionVal(query?.activities);
      }else{
        setTextOption(data[0]?.name);
        setOptionVal(data[0]?.cate_id);
      }
      
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    })
  }

  useEffect(() => {
    fecthBoatCate();
  }, [])


  // console.log(true);

  return (
  <>
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="type" value={type} />
      <div className={`row no-gutters custom-search-input-2 ${charter ? 'bg-tranparent': ''}`}>
        <SelectStyle name="activities" col={charter ? "col-lg-12 col-select": "col-lg-3"} 
        textOptions={textOptions} setTextOption={setTextOption}
        options={activities}
        setOptionVal={setOptionVal} option_val={option_val}
        setOpen={setOpen} open={open}
        setType={setType} />
        <div className={`mb-lg-0 mb-3 ${charter ? "col-lg-12 col-select": "col-lg-3"}`}>
          <div className="form-group mb-0">
            <input className="form-control mb-0" type="text" name="dates" defaultValue={date_show} placeholder="When.." autoComplete="off" required />
            <i className="icon_calendar"></i>
          </div>
        </div>
        <div className={`mb-lg-0 mb-3 ${charter ? "col-lg-12 col-select": "col-lg-3"}`}>
          <SelectAmount active={active} setActive={setActive} handleButton={handleButton} state={state} />
        </div>
        <div className={charter ? "col-lg-12": "col-lg-3"}>
          <input type="submit" className="btn_search" value="Search" />
        </div>
      </div>
    </form>
  </>
  )
}
export default SearchPackage