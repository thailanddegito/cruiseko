
import React from 'react';
import Link from 'next/link';

const ProductCard = (props) => {
  const {packages} = props;

  return (
    packages ? (
      <>
        <div class="col-xl-4 col-lg-6 col-md-6 mt-4">
          <div class="box_grid">
            <figure>
              <a href="#0" class="wish_bt"></a>
              <Link href="/product-details/[id]" as={`/product-details/${packages.id}`}>
                <a>
                  <img src={packages.picture ? packages.picture : "/template/img/tour_1.jpg"} class="img-fluid" alt="" width="800" height="533"/>
                  <div class="read_more"><span>Read more</span></div>
                </a>
              </Link>
              <small>Historic</small>
            </figure>
            <div class="wrapper">
              <h3>
              <Link href="/product-details/[id]" as={`/product-details/1`}>
                <a className="show-color">{packages.name ? packages.name : null}</a>
              </Link>
              </h3>
              <p>{packages.short_description ? packages.short_description : null}</p>
              <span class="price">From <strong>$54</strong> /per person</span>
            </div>
            <ul>
              <li><i class="icon_clock_alt"></i> 1h 30min</li>
              <li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
            </ul>
          </div>
        </div>
      </>
    ) : null
  )
}
export default ProductCard