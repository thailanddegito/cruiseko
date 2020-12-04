import React from 'react';
import { toDateISO } from '../../../utils/tools';
import Link from 'next/link'

const BlogCard = (props) => {
  const {col, blogs} = props;
  if(!blogs) return;

  const date = new Date(blogs.publish_date);
  const month = date.toLocaleString('default', { month: 'short' });
  var day = ''+date.getDate();
  if(day < 10) {
    day = '0'+day;
  }

  return (
    <>
      <div className={`${col}`}>
        <Link href={`/blog-details/[id]`} as={`/blog-details/${blogs.id}-${blogs.name}`}>
          <a className="box_news">
            <figure><img src={blogs.picture ? blogs.picture : "/template/img/news_home_1.jpg"} alt="" />
              <figcaption><strong>{day}</strong>{month}</figcaption>
            </figure>
            <ul>
              <li>{blogs.blog_category.name}</li>
              <li>{toDateISO(new Date(blogs.publish_date))}</li>
            </ul>
            <h4>{blogs.name}</h4>
            <p className="blog-short-description">{blogs.short_description ? blogs.short_description : null}</p>
          </a>
        </Link>
      </div>
    </>
  )
}

export default BlogCard