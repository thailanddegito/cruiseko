
import React from 'react';
import Link from 'next/link'

const Topnav = (props) => {
  const {page_name, sub_page, children} = props;

  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            {(page_name) && (
              <li className={`breadcrumb-item ${!sub_page && 'active'}`}>
                {
                  sub_page ? (
                    <Link href="/backend/users">
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
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
export default Topnav