import React, { useState, useEffect } from 'react';
import Layout from '../components/frontend/layout/Layout';
import Banner from '../components/frontend/home/Banner'
import ProductCard from '../components/frontend/product/ProductCard'
import api from '../utils/api'
import BlogCard from '../components/frontend/blog/BlogCard'
import Link from 'next/link'

const Home = (props) => {
  const [loading, setLodding] = useState(false);
  const [packages, setPackage] = useState();
  const [blogs, setBlog] = useState();

  const fecthPackage = () => {
    setLodding(true);
    api.getPackage({active : 1})
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

  const fecthBlog = () => {
    api.getBlog()
    .then(res=>{
      const data = res.data;
      setBlog(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthPackage();
    fecthBlog();
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

          {
            (blogs && blogs.count > 0) ? (
              <div className="bg_color_1">
                <div className="container margin_80_55">
                  <div className="main_title_2">
                    <span><em></em></span>
                    <h3>News and Events</h3>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                  </div>
                  <div className="row">
                    {
                      (blogs && blogs.count > 0) ? blogs.rows.map((val, index) => (
                        <BlogCard col="col-lg-6" key={val.id} blogs={val} />
                      )) : null
                    }
                  </div>
                  <p className="btn_home_align"><Link href="/blog"><a className="btn_1 rounded">View all news</a></Link></p>
                </div>
              </div>      
            ) : null
          }
         


				</main>
			</aside>
      <div className="end-content"></div>
    </Layout>
  )
}
export default Home

