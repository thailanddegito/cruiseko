
import React, {useEffect} from 'react';

const Price = (props) => {
  const {error} = props;


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
      autoUpdateInput: false,
      parentEl:'.scroll-fix',
      minDate:new Date(),
      opens: 'left',
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
            <div className="qtyButtons">
              <label>Adults</label>
              <input type="text" name="qtyInput" value="1" />
            </div>
            <div className="qtyButtons">
              <label>Childrens</label>
              <input type="text" name="qtyInput" value="0" />
            </div>
          </div>
        </div>
        <a href="cart-1.html" className="btn_1 full-width purchase">Purchase</a>
        <a href="wishlist.html" className="btn_1 full-width outline wishlist"><i className="icon_heart"></i> Add to wishlist</a>
        <div className="text-center"><small>No money charged in this step</small></div>
      </div>
      <ul className="share-buttons">
        <li><a className="fb-share" href="#0"><i className="social_facebook"></i> Share</a></li>
        <li><a className="twitter-share" href="#0"><i className="social_twitter"></i> Tweet</a></li>
        <li><a className="gplus-share" href="#0"><i className="social_googleplus"></i> Share</a></li>
      </ul>
    </>
  )
}
export default Price