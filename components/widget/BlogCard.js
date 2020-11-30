import React from 'react';
  
const BlogCard = (props) => {
  const {col} = props;

  return (
    <>
      <div className={`${col}`}>
        <a className="box_news" href="#0">
          <figure><img src="/template/img/news_home_1.jpg" alt="" />
            <figcaption><strong>28</strong>Dec</figcaption>
          </figure>
          <ul>
            <li>Mark Twain</li>
            <li>20.11.2017</li>
          </ul>
          <h4>Pri oportere scribentur eu</h4>
          <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
        </a>
      </div>
    </>
  )
}

export default BlogCard