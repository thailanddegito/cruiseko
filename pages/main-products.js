import React, { useEffect, useState } from 'react';
import Layout from '../components/frontend/layout/Layout';
import api from '../utils/api'
import Banner from '../components/frontend/product/Banner'
import ProductFilter from '../components/frontend/product/ProductFilter'
import ProductCard from '../components/frontend/product/ProductCard'
import ProductCardLandscape from '../components/frontend/product/ProductCardLandscape'

const Home = (props) => {
  const [loading, setLodding] = useState(false);
  const [packages, setPackage] = useState();
  const [showGrid, setShowGrid] = useState(1);

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


  // console.log(packages);

  return (
    <Layout loading={loading} title="Main Product" page={'main_product'}>
      <aside className="main-content">
				<main>
					<div>
            <Banner data={true} />
					</div>
          <div>
            <ProductFilter setShowGrid={setShowGrid} showGrid={showGrid} />
					</div>
					<div className="container">
            {
              showGrid == 1 ? (
                <div className="wrapper-grid">
                  <div className="row">
                    {
                      (packages && packages.rows) ? packages.rows.map((val, index) => (
                        <ProductCard key={val.id} packages={val} />
                      )) : null
                    }
                  </div>
                </div>
              ) : (
                <div className="isotope-wrapper">
                  {
                    (packages && packages.rows) ? packages.rows.map((val, index) => (
                      <ProductCardLandscape key={val.id} packages={val} />
                    )) : null
                  }
                </div>
              )
            }
          </div>
				</main>
			</aside>
    </Layout>
  )
}
export default Home

