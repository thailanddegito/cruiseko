import React from 'react';
import BlogSearch from '../blog/BlogSearch'
import EditorData from '../product_detail/EditorData';

const Maindetail = (props) => {
  const {blogs, news} = props;

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
            <BlogSearch news={news} />
          </div>
        </div>
      </>
    ) : null
  )
}
export default Maindetail