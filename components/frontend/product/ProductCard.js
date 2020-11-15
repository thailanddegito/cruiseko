
import React from 'react';
import Link from 'next/link';

const ProductCard = (props) => {
  const {error} = props;

  return (
    <>
     <div class="col-xl-4 col-lg-6 col-md-6">
      <div class="box_grid">
        <figure>
          <a href="#0" class="wish_bt"></a>
          <Link href="/product-details/[id]" as={`/product-details/1`}>
            <a>
              <img src="/template/img/tour_1.jpg" class="img-fluid" alt="" width="800" height="533"/>
              <div class="read_more"><span>Read more</span></div>
            </a>
          </Link>
          <small>Historic</small>
        </figure>
        <div class="wrapper">
          <h3>
          <Link href="/product-details/[id]" as={`/product-details/1`}>
            <a >Arc Triomphe</a>
          </Link>
          </h3>
          <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
          <span class="price">From <strong>$54</strong> /per person</span>
        </div>
        <ul>
          <li><i class="icon_clock_alt"></i> 1h 30min</li>
          <li><div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
        </ul>
      </div>
    </div>
      
    </>
  )
}
export default ProductCard