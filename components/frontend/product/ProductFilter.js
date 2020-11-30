
import React from 'react';
import Link from 'next/link';

const ProductFilter = (props) => {
  const {setShowGrid, showGrid} = props;

  return (
  <>
    <div className="filters_listing sticky_horizontal">
      <div className="container">
        <ul className="clearfix">
          <li>
            {/* <div className="switch-field">
              <input type="radio" id="all" name="listing_filter" value="all" checked data-filter="*" className="selected" />
              <label for="all">All</label>
              <input type="radio" id="popular" name="listing_filter" value="popular" data-filter=".popular" />
              <label for="popular">Popular</label>
              <input type="radio" id="latest" name="listing_filter" value="latest" data-filter=".latest" />
              <label for="latest">Latest</label>
            </div> */}
          </li>
          <li>
            <div className="layout_view">
              <a href="#" className={showGrid == 1 ? 'active' : ''} onClick={(e) => { e.preventDefault();setShowGrid(1); }}><i className="icon-th"></i></a>
              <a href="#" className={showGrid == 2 ? 'active' : ''} onClick={(e) => { e.preventDefault();setShowGrid(2); }}><i className="icon-th-list"></i></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}
export default ProductFilter