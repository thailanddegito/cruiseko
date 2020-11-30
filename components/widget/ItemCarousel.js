
import React from 'react';
  
const ItemCarousel = (props) => {

  return (
    <>
      <div className="item">
        <div className="box_grid">
          <figure>
            <a href="#0" className="wish_bt"></a>
            <a href="tour-detail.html"><img src="img/tour_1.jpg" className="img-fluid" alt="" width="800" height="533" /><div className="read_more"><span>Read more</span></div></a>
            <small>Historic</small>
          </figure>
          <div className="wrapper">
            <h3><a href="tour-detail.html">Arc Triomphe</a></h3>
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu.</p>
            <span className="price">From <strong>$54</strong> /per person</span>
          </div>
          <ul>
            <li><i className="icon_clock_alt"></i> 1h 30min</li>
            <li><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default ItemCarousel