
import React from 'react';
import Link from 'next/link'

const Topnav = (props) => {
  const {children, page_name, sub_page, main_link, no_class } = props;

  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            {(page_name) && (
              <li className={`breadcrumb-item ${!sub_page && 'active'}`}>
                {
                  sub_page ? (
                    <Link href={`/backend/${main_link}`}>
                      <a>{page_name}</a>
                    </Link>
                  ) : <a>{page_name}</a>
                }
                
              </li>
            )}
            {sub_page && (
              <li className={`breadcrumb-item ${sub_page && 'active'}`}>{sub_page}</li>
            )}
          </ol>
          <div className={`${!no_class ? 'content' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
export default Topnav