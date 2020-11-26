import React, { useState, useEffect } from 'react';
import Layout from '../components/frontend/layout/Layout';
import Banner from '../components/frontend/home/Banner'
import ProductCard from '../components/frontend/product/ProductCard'
import api from '../utils/api'

const Home = (props) => {
  const [loading, setLodding] = useState(false);
  const [packages, setPackage] = useState();

  const fecthPackage = () => {
    setLodding(true);
    api.getPackage({is_draft : 0 , publish_status : 1})
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
  
  useEffect(() => {
    fecthPackage();
  }, [])

  return (
    <Layout loading={loading} title="Home">
      <aside className="main-content">
				<main>
					<div>
            <Banner data={true} />
					</div>
					<div className="container">
            <div className="wrapper-grid">
              <div className="row">
                {
                  (packages && packages.rows) ? packages.rows.map((val, index) => (
                    <ProductCard key={val.id} packages={val} />
                  )) : null
                }
              </div>
            </div>
          </div>
				</main>
			</aside>
    </Layout>
  )
}
export default Home

