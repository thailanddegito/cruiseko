import React, { useEffect, useState } from 'react';
import Banner from '../components/frontend/blog/Banner';
import BlogLandscape from '../components/frontend/blog/BlogLandscape';
import BlogSearch from '../components/frontend/blog/BlogSearch';
import Layout from '../components/frontend/layout/Layout';
import api from '../utils/api';
import Router from 'next/router';
import Paginate from 'react-paginate';

const Blog = ({query}) => {
  const [loading, setLodding] = useState(false);
  const [blogs, setBlog] = useState();
  const [news, setNews] = useState();

  const [pageCount,setPageCount] = useState(1)
  const [pageNumber, setPagenumber] = useState(0);
  const LIMIT = 10;

  const fecthBlog = (params) => {
    params.page = params.page || 1;
    params.limit = params.limit || LIMIT;
    api.getBlog(params)
    .then(res=>{
      const data = res.data;
      setBlog(data);
      setPageCount(Math.ceil(data.count / LIMIT));
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const fecthNews = () => {
    api.getBlog({limit : 5})
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
    if(query.page) {
      params.page = query.page;
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

  const handlePageClick = (data) =>{
    let selected = data.selected;
    Router.push({
      pathname: '/blog',
      query : {...query,page :selected+1  }
    })
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

                {(blogs && blogs.count > LIMIT) &&  (
                  <div className="d-flex w-100 justify-content-start mt-4">
                    <div className="float-left">
                      <Paginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        forcePage={pageNumber}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                      />
                    </div>
                  </div> 
                )}  
              </div>

              <BlogSearch news={news} handleSearch={handleSearch} query={query} btn_reset={true} />
              
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

