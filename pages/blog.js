import React, { useEffect, useState } from 'react';
import Banner from '../components/frontend/blog/Banner';
import BlogLandscape from '../components/frontend/blog/BlogLandscape';
import BlogSearch from '../components/frontend/blog/BlogSearch';
import Layout from '../components/frontend/layout/Layout';
import api from '../utils/api';
import Router from 'next/router';

const Blog = ({query}) => {
  const [loading, setLodding] = useState(false);
  const [blogs, setBlog] = useState();
  const [news, setNews] = useState();

  const fecthBlog = (params) => {
    api.getBlog(params)
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
    var params = {};
    if(query.search) {
      params.search = query.search;
    }
    fecthBlog(params);
    fecthNews();
  }, [query]);


  const handleSearch = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    var search = data.get('search');
    Router.push('/blog?search='+search, '/blog?search='+search);
  }


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

              <BlogSearch news={news} handleSearch={handleSearch} query={query} />
              
            </div>
          </div>


				</main>
			</aside>
      <div className="end-content"></div>
    </Layout>
  )
}

Blog.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default Blog

