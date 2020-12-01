import React from 'react';
import { toDateISO } from '../../../utils/tools';
import Link from 'next/link'

const BlogSearch = (props) => {
  const {news} = props;

  return (
    <>
      <aside className="col-lg-3">
        <div className="widget">
          <form>
            <div className="form-group">
              <input type="text" name="search" id="search" className="form-control" placeholder="Search..." />
            </div>
            <button type="submit" id="submit" className="btn_1 rounded"> Search</button>
          </form>
        </div>
        <div className="widget">
          <div className="widget-title">
            <h4>Recent Posts</h4>
          </div>
          <ul className="comments-list">
            {
              (news && news.count > 0) ? news.rows.map((val, index) => (
                <li key={index}>
                  <div className="alignleft">
                    <Link href={`/blog-details/[id]`} as={`/blog-details/${val.id}-${val.name}`}><a><img src={val.picture ? val.picture : "/template/img/blog-5.jpg"} alt="" /></a></Link>
                  </div>
                  <small>{toDateISO(new Date(val.publish_date))}</small>
                  <h3><Link href={`/blog-details/[id]`} as={`/blog-details/${val.id}-${val.name}`}><a title="">{val.name}</a></Link></h3>
                </li>
              )) : null
            }
          </ul>
        </div>
        {/* <div className="widget">
          <div className="widget-title">
            <h4>Blog Categories</h4>
          </div>
          <ul className="cats">
            <li><a href="#">Admissions <span>(12)</span></a></li>
            <li><a href="#">News <span>(21)</span></a></li>
            <li><a href="#">Events <span>(44)</span></a></li>
            <li><a href="#">Focus in the lab <span>(31)</span></a></li>
          </ul>
        </div> */}
      </aside>
    </>
  )
}
export default BlogSearch