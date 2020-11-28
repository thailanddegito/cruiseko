import React, {useEffect, useState} from 'react';
import SelectAmount from '../../widget/SelectAmount'
import {toDateISO} from '../../../utils/tools'
import SelectStyle from '../../widget/SelectStyle'
import api from '../../../utils/api'
import Router from 'next/router';

const Banner = (props) => {
  const {data} = props;
  const [active, setActive] = useState(false);
  const [state,setState] = useState({
    date : toDateISO(new Date()),
    adult : 1,
    children : 0
  })

  

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
      var temp = data.map(val => ({...val,value : val.cate_id})  )
      setActivities(temp);
      if(data) {
        setTextOption(data[0].name);
        setOptionVal(data[0].cate_id);
      }
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBoatCate();
  },[]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    var activities = data.get('activities');
    var dates = data.get('dates');
    var adult = state.adult;
    var children = state.children;
    Router.push(`/search-package?activities=${activities}&dates=${dates}&adult=${adult}&children=${children}`);
  }

 
  return (
    data ? (
      <>
        <section class="hero_single version_2">
          <div class="wrapper">
            <div class="container">
              <h3>Book unique experiences</h3>
              <p>Expolore top rated tours, hotels and restaurants around the world</p>
              <form onSubmit={handleSubmit}>
                <div class="row no-gutters custom-search-input-2">
                  <SelectStyle name="activities" col="col-lg-4" 
                  textOptions={textOptions} setTextOption={setTextOption}
                  options={activities}
                  setOptionVal={setOptionVal} option_val={option_val}
                  setOpen={setOpen} open={open} />
                  {/* <div class="col-lg-4">
                    <div class="form-group">
                      <input class="form-control" type="text" placeholder="Hotel, City..." required />
                      <i class="icon_pin_alt"></i>
                    </div>
                  </div> */}
                  <div class="col-lg-3">
                    <div class="form-group">
                      <input class="form-control" type="text" name="dates" placeholder="When.." autoComplete="off" required />
                      <i class="icon_calendar"></i>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <SelectAmount active={active} setActive={setActive} handleButton={handleButton} state={state} />
                  </div>
                  <div class="col-lg-2">
                    <input type="submit" class="btn_search" value="Search" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    ) : null
  )
}
export default Banner