import React, { useEffect, useState } from 'react';
import Layout from '../components/frontend/layout/Layout';
import Router, {useRouter } from 'next/router';
import { toDateISO } from '../utils/tools';
import api from '../utils/api'
import ResultSearch from '../components/frontend/search_charter/ResultSearch'
import Filter from '../components/frontend/search_charter/Filter'
import Card from '../components/frontend/search_charter/Card';
import Map from '../components/frontend/search_charter/Map';

const SearchCharter = ({query}) => {
  const [loading, setLodding] = useState(false);
  const [packages, setPackage] = useState();
  const [state, setState] = useState({
    start_date : toDateISO(new Date()),
    end_date : toDateISO(new Date()),
    adult : 1,
    children : 0
  })

  // console.log(query);
  
  const fecthPackage = (params) => {
    setLodding(true);
    api.getPackage({...params, is_draft : 0 , publish_status : 1})
    .then(res=>{
      const data = res.data;
      setPackage(data);
      setLodding(false);
    })
    .catch(err => {
      setLodding(false);
      console.log(err.response);
    })
  }

  const [date_show , setDateShow] = useState(null);
  useEffect(() => {
    var params = {};
    if(query.activities) params.cate_id = query.activities;
    if(query.dates) {
      console.log(query.dates);
      var date = query.dates.split('>');
      params.price_start_date = date[0];
      params.price_end_date = date[1];

      var start = date[0].split('-');
      var start_day = start[2];
      var start_month = start[1];
      var start_year = (new Date(date[0]).getFullYear().toString().substr(-2));
      var setdate = start_month+'-'+start_day+'-'+start_year;

      var end = date[1].split('-');
      var end_day = end[2];
      var end_month = end[1];
      var end_year = (new Date(date[1]).getFullYear().toString().substr(-2));
      var setend = end_month+'-'+end_day+'-'+end_year;
      setDateShow(setdate+'>'+setend)
    }
    if(query.adult && query.children) {
      setState({...query, adult : query.adult, children : query.children})
    }
    fecthPackage(params);
  }, [query])


  const [active, setActive] = useState(false);
  const [type, setType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    var activities = data.get('activities');
    var dates = state.start_date+'>'+state.end_date;
    var adult = state.adult;
    var children = state.children;
    Router.push(`/search-charter?activities=${activities}&dates=${dates}&adult=${adult}&children=${children}`);
  }

  
  return (
    <Layout loading={loading} title="Search Charter" page={'search_charter'} banner={false}>
      <main>
        <div className="container-fluid full-height mt-3">
          <div className="row row-height">
            <div className="col-lg-5 content-left order-md-last order-sm-last order-last">

            <ResultSearch packages={packages} handleSubmit={handleSubmit} 
              setActive={setActive} active={active}
              setState={setState} state={state}
              query={query} charter={true}
              setDateShow={setDateShow} date_show={date_show}
              setType={setType} />

            {/* <Filter /> */}


            {
              (packages && packages.rows) ? packages.rows.map((val, index) => (
                <Card key={val.id} packages={val} />
              )) : null
            }
            
            <p className="text-center add_top_30"><a href="#0" className="btn_1 rounded"><strong>Load more</strong></a></p>
            </div>

            <Map />
           


          </div>
        </div>
      </main>
    </Layout>
  )
}

SearchCharter.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default SearchCharter