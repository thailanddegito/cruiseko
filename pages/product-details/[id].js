import React, { useEffect, useState } from 'react';
import Layout from '../../components/frontend/layout/Layout';
import Banner from '../../components/frontend/product_detail/Banner';
import MainDetail from '../../components/frontend/product_detail/MainDetail';


const Login = ({ t }) => {
  const [loading, setLodding] = useState(false);


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
    $(window).on('load', function() {
			"use strict";
			$.instagramFeed({
				'username': 'thelouvremuseum',
				'container': "#instagram-feed",
				'display_profile': false,
				'display_biography': false,
				'display_gallery': true,
				'get_raw_json': false,
				'callback': null,
				'styling': true,
				'items': 12,
				'items_per_row': 6,
				'margin': 1
			});
		});
	},[]);
	
	
  
  return (
    <Layout loading={loading} title="Product Details">
			<aside className="main-content">
				<main>
					<div>
						<Banner />
					</div>
					<div>
						<MainDetail/>
					</div>
				</main>
			</aside>
    </Layout>
  )
}


export default Login
