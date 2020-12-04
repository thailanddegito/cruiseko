
import React from 'react';
import SearchPackage from '../product/SearchPackage'


const ResultSearch = (props) => {
  const {packages, handleSubmit, setActive, active, setState, state, query, setDateShow, date_show, setType, charter} = props;

  return (
    <>
      <div id="results_map_view">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10">
            <h4><strong>{packages?.count}</strong> results</h4>
            </div>
            <div className="col-2">
              <a href="#0" className="search_map btn_search_map_view"></a> 
            </div>
          </div>
          <div className="search_map_wp">
            <SearchPackage handleSubmit={handleSubmit}
              setActive={setActive} active={active}
              setState={setState} state={state}
              query={query}
              setDateShow={setDateShow} date_show={date_show}
              setType={setType}
              charter={charter}
              boat_type={'charter'} />
          </div>
        </div>
      </div>
    </>
  )
}
export default ResultSearch