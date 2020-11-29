import React, { useState, useEffect } from 'react';
import Layout from '../components/frontend/layout/Layout';
import Banner from '../components/frontend/home/Banner'
import ProductCard from '../components/frontend/product/ProductCard'
import api from '../utils/api'
import BlogCard from '../components/widget/BlogCard'
import ItemCarousel from '../components/widget/ItemCarousel'

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
    <Layout loading={loading} title="Home" page={'home'}>
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

          {/* <div className="container container-custom margin_80_0">
            <div className="main_title_2">
              <span><em></em></span>
              <h2>Our Popular Tours</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div id="reccomended" className="owl-carousel owl-theme">
              <ItemCarousel />
            </div>
            <p className="btn_home_align"><a href="tours-grid-isotope.html" className="btn_1 rounded">View all Tours</a></p>
            <hr className="large" />
          </div>      
 */}

          {/* <div className="bg_color_1">
            <div className="container margin_80_55">
              <div className="main_title_2">
                <span><em></em></span>
                <h3>News and Events</h3>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              <div className="row">
                <BlogCard col="col-lg-6" />
                <BlogCard col="col-lg-6" />
                <BlogCard col="col-lg-6" />
                <BlogCard col="col-lg-6" />
              </div>
              <p className="btn_home_align"><a className="btn_1 rounded">View all news</a></p>
            </div>
          </div>       */}


				</main>
			</aside>
      <div className="end-content"></div>
    </Layout>
  )
}
export default Home

