import React, { useEffect, useState } from 'react';
import Layout from '../components/frontend/layout/Layout';
import ProductCard from '../components/frontend/product/ProductCard'
import api from '../utils/api'

const Home = (props) => {
  const [loading, setLodding] = useState(false);
  const [packages, setPackage] = useState();

  const fecthPackage = () => {
    setLodding(true);
    api.getPackage()
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
    <Layout loading={loading} title="Main Product">
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
    </Layout>
  )
}
export default Home

