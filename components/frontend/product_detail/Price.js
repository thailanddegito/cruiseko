
import Router from 'next/router';
import React, {useEffect,useState} from 'react';
import SelectAmount from '../../widget/SelectAmount'

const Price = (props) => {
  const {error,state,setState,checkout, is_boat} = props;
  const [active, setActive] = useState(false);
  // const [date,setDate] = useState()
  const {price,unit,boat_amt} = props.priceData; 
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
    $('input[name="dates"]').daterangepicker({
		  autoUpdateInput: true,
		  parentEl:'.scroll-fix',
		  singleDatePicker: true,
		  autoApply: true,
		  minDate:new Date(),
		  showCustomRangeLabel: false,
		  locale: {
	        format: 'MM-DD-YYYY'
	      }
      }, 
      function(start, end, label) {
        setState({...state,date : start.format('YYYY-MM-DD')})
		    // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('DD-MM-YYYY') + ' (predefined range: ' + label + ')');
		  });
  },[]);
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
    <>
      <div className="box_detail booking">
        <div className="price">
          {price !== -1 && <span> {price} ฿ <small>{unit}</small> </span>}
          <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
        </div>
        {boat_amt && <div> Boat amount : {boat_amt} </div> }
        
        <div className="form-group input-dates">
          <input className="form-control" type="text" name="dates" placeholder="When.." />
          <i className="icon_calendar"></i>
        </div>
        {/* {
          is_boat ? (
            <div className="form-group input-dates">
              <input className="form-control" type="text" name="dates" placeholder="When.." />
              <i className="icon_calendar"></i>
            </div>    
          ) : null
        } */}
        <div>
          <SelectAmount active={active} setActive={setActive} handleButton={handleButton} state={state} />
        </div>

        <button type="button" disabled={price === -1} className="btn_1 full-width purchase" onClick={checkout}>Purchase</button>
        <div className="text-center"><small>No money charged in this step</small></div>
      </div>
      
    </>
  )
}
export default Price