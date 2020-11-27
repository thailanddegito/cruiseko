import React, {useEffect} from 'react';

const Banner = (props) => {
  const {data} = props;

  useEffect(() => {

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


  const qtySum = () =>{
    var arr = document.getElementsByName('qtyInput');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }

    var cardQty = document.querySelector(".qtyTotal");
    cardQty.innerHTML = tot;
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
                      <input class="form-control" type="text" name="dates" placeholder="When.." />
                      <i class="icon_calendar"></i>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="panel-dropdown">
                      <a href="#">Guests <span class="qtyTotal">1</span></a>
                      <div class="panel-dropdown-content">
                        <div class="qtyButtons">
                          <label>Adults</label>
                          <input type="text" name="qtyInput" value="1" />
                        </div>
                        <div class="qtyButtons">
                          <label>Childrens</label>
                          <input type="text" name="qtyInput" value="0" />
                        </div>
                      </div>
                    </div>
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