import React, {useEffect, useState} from 'react';
import SelectAmount from '../../widget/SelectAmount'

const Banner = (props) => {
  const {data} = props;
  const [active, setActive] = useState(false);

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
                    {/* <SelectAmount active={active} setActive={setActive} /> */}
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