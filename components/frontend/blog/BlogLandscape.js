import React from 'react';

const BlogLandscape = (props) => {
  const {blogs} = props;
  if(!blogs) return;

  const date = new Date(blogs.publish_date);
  const month = date.toLocaleString('default', { month: 'short' });
  var day = ''+date.getDate();
  var year = date.getFullYear();
  if(day < 10) {
    day = '0'+day;
  }

  return (
    <>
      <article className="blog wow fadeIn">
        <div className="row no-gutters">
          <div className="col-lg-7">
            <figure>
              <a href="blog-post.html"><img src={blogs.picture ? blogs.picture : "/template/img/blog-1.jpg"} alt="" />
                <div className="preview"><span>Read more</span></div>
              </a>
            </figure>
          </div>
          <div className="col-lg-5">
            <div className="post_info">
              <small>{day} {month}. {year}</small>
              <h3><a href="blog-post.html">{blogs.name}</a></h3>
              <p className="blog-lan-short-description">{blogs.short_description ? blogs.short_description : null}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
export default BlogLandscape