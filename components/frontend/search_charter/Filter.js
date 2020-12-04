
import React from 'react';


const FiLter = (props) => {
  const {data} = props;

  return (
    <>
      <div className="filters_listing version_3">
        <div className="container-fluid">
          <ul className="clearfix">
            <li>
              <div className="switch-field">
                <input type="radio" id="all" name="listing_filter" value="all" checked />
                <label htmlFor="all">All</label>
                <input type="radio" id="popular" name="listing_filter" value="popular" />
                <label htmlFor="popular">Popular</label>
                <input type="radio" id="latest" name="listing_filter" value="latest" />
                <label htmlFor="latest">Latest</label>
              </div>
            </li>
            <li><a className="btn_filt_map" data-toggle="collapse" href="#filters" aria-expanded="false" aria-controls="filters" data-text-swap="Less filters" data-text-original="More filters">More filters</a></li>
          </ul>
        </div>
      </div>
      <div className="collapse map_view" id="filters">
        <div className="container-fluid margin_30_5">
          <h6>Category</h6>
          <div className="row">
            <div className="col-md-6">
              <div className="filter_type">
                <ul>
                  <li>
                    <label className="container_check">All <small>(945)</small>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container_check">Museums <small>(45)</small>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container_check">Churches <small>(30)</small>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="filter_type">
                <ul>
                  <li>
                    <label className="container_check">Historic <small>(25)</small>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container_check">Walking <small>(56)</small>
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="add_bottom_30">
                <h6>Distance</h6>
                <div className="distance"> Radius around selected destination <span></span> km</div>
                <input type="range" min="10" max="100" step="10" value="30" data-orientation="horizontal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default FiLter