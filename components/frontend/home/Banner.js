import Router from 'next/router';
import React, { useState } from 'react';
import { toDateISO } from '../../../utils/tools';
import SearchPackage from '../product/SearchPackage';

const Banner = (props) => {
  const {data} = props;
  const [active, setActive] = useState(false);
  const [state, setState] = useState({
    date : toDateISO(new Date()),
    adult : 1,
    children : 0
  })
  
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    var activities = data.get('activities');
    var dates = data.get('dates');
    var adult = state.adult;
    var children = state.children;
    Router.push(`/search-package?activities=${activities}&dates=${dates}&adult=${adult}&children=${children}`);
  }

 
  return (
    data ? (
      <>
        <section class="hero_single version_2">
          <div class="wrapper">
            <div class="container">
              <h3>Book unique experiences</h3>
              <p>Expolore top rated tours, hotels and restaurants around the world</p>
              <SearchPackage handleSubmit={handleSubmit}
              setActive={setActive} active={active}
              setState={setState} state={state} />
            </div>
          </div>
        </section>
      </>
    ) : null
  )
}
export default Banner