import React, { useEffect, useState } from 'react';
import Banner from '../components/frontend/blog/Banner';
import BlogLandscape from '../components/frontend/blog/BlogLandscape';
import BlogSearch from '../components/frontend/blog/BlogSearch';
import Layout from '../components/frontend/layout/Layout';
import api from '../utils/api';

const Blog = (props) => {
  const [loading, setLodding] = useState(false);
  const [blogs, setBlog] = useState();
  const [news, setNews] = useState();

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

  const fecthNews = () => {
    api.getBlog()
    .then(res=>{
      const data = res.data;
      setNews(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBlog();
    fecthNews();
  }, [])


  return (
    <Layout loading={loading} title="Home" page={'home'}>
      <aside className="main-content">
				<main>
					<div>
            <Banner data={true} />
					</div>

         
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-9">

                {
                  (blogs && blogs.count > 0) ? blogs.rows.map((val, index) => (
                    <BlogLandscape key={val.id} blogs={val} />
                  )) : null
                }

                <nav aria-label="...">
                  <ul className="pagination pagination-sm">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>

              <BlogSearch news={news} />
              
            </div>
          </div>


				</main>
			</aside>
      <div className="end-content"></div>
    </Layout>
  )
}
export default Blog

