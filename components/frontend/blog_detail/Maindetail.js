import React from 'react';
import BlogSearch from '../blog/BlogSearch'
import EditorData from '../product_detail/EditorData';
import Router from 'next/router';

const Maindetail = (props) => {
  const {blogs, news} = props;

  const handleSearch = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    var search = data.get('search');
    Router.push('/blog?search='+search, '/blog?search='+search);
  }

  return (
    blogs ? (
      <>
        <div className="container margin_60_35">
			    <div className="row">
				    <div className="col-lg-9">
              <div className="bloglist singlepost">
                <EditorData name={blogs?.name} data={blogs?.description} />
              </div>
            </div>
            <BlogSearch news={news} handleSearch={handleSearch} />
          </div>
        </div>
      </>
    ) : null
  )
}
export default Maindetail