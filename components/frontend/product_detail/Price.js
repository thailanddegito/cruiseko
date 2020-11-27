
import React, {useEffect,useState} from 'react';

const Price = (props) => {
  const {error,state,setState} = props;
  // const [date,setDate] = useState()

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
    qtySum();
    $(".qtyButtons input").after('<div class="qtyInc"></div>');
    $(".qtyButtons input").before('<div class="qtyDec"></div>');
    $(".qtyDec, .qtyInc").on("click", function() {

     var $button = $(this);
     var oldValue = $button.parent().find("input").val();

     if ($button.hasClass('qtyInc')) {
      var newVal = parseFloat(oldValue) + 1;
     } else {
      // don't allow decrementing below zero
      if (oldValue > 0) {
       var newVal = parseFloat(oldValue) - 1;
      } else {
       newVal = 0;
      }
     }

     $button.parent().find("input").val(newVal);
     qtySum();
     $(".qtyTotal").addClass("rotate-x");

    });

    function removeAnimation() { $(".qtyTotal").removeClass("rotate-x"); }
    const counter = document.querySelector(".qtyTotal");
    counter.addEventListener("animationend", removeAnimation);
  }, [])

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
    $("#adults .qtyDec, #adults .qtyInc").on("click", function() {
      alert('adults');
    });
    $("#childrens .qtyDec, #childrens .qtyInc").on("click", function() {
      alert('childrens');
    });
  },[]);


  
  


  return (
    <>
      <div className="box_detail booking">
        <div className="price">
          <span>45$ <small>person</small></span>
          <div className="score"><span>Good<em>350 Reviews</em></span><strong>7.0</strong></div>
        </div>
        <div className="form-group input-dates">
          <input className="form-control" type="text" name="dates" placeholder="When.." />
          <i className="icon_calendar"></i>
        </div>
        <div className="panel-dropdown">
          <a>Guests <span className="qtyTotal">1</span></a>
          <div className="panel-dropdown-content right">
            <div className="qtyButtons" id="adults">
              <label>Adults</label>
              <input type="text" name="qtyInput" value="1" />
            </div>
            <div className="qtyButtons" id="childrens">
              <label>Childrens</label>
              <input type="text" name="qtyInput" value="0" />
            </div>
          </div>
        </div>
        <a href="cart-1.html" className="btn_1 full-width purchase">Purchase</a>
        {/* <a href="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart"></i> Add to wishlist</a> */}
        <div className="text-center"><small>No money charged in this step</small></div>
      </div>
      {/* <ul className="share-buttons">
        <li><a className="fb-share" href="#0"><i className="social_facebook"></i> Share</a></li>
        <li><a className="twitter-share" href="#0"><i className="social_twitter"></i> Tweet</a></li>
        <li><a className="gplus-share" href="#0"><i className="social_googleplus"></i> Share</a></li>
      </ul> */}
    </>
  )
}
export default Price