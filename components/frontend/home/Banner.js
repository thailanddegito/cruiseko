import React, {useEffect, useState} from 'react';
import SelectAmount from '../../widget/SelectAmount'
import {toDateISO} from '../../../utils/tools'

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
		  $(this).val(picker.startDate.format('MM-DD-YY') + ' > ' + picker.endDate.format('MM-DD-YY'));
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

 
  return (
    data ? (
      <>
        <section class="hero_single version_2">
          <div class="wrapper">
            <div class="container">
              <h3>Book unique experiences</h3>
              <p>Expolore top rated tours, hotels and restaurants around the world</p>
              <form>
                <div class="row no-gutters custom-search-input-2">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <input class="form-control" type="text" placeholder="Hotel, City..." />
                      <i class="icon_pin_alt"></i>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-group">
                      <input class="form-control" type="text" name="dates" placeholder="When.." autoComplete="off" />
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