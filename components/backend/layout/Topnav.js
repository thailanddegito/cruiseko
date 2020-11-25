
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

const Topnav = (props) => {
  const {children, page_name, sub_page, main_link, no_class, headerScroll } = props;
  const [scroll, setScroll] = useState(0);


  

  useEffect(() => {
    if(!headerScroll) return;
    const onScroll = () => {
      const navbar = document.getElementById('scroll-package')
      setScroll(document.documentElement.scrollTop);
      if (scroll > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled")
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scroll, headerScroll])

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
          {headerScroll ? headerScroll : null}
        </div>
      </div>
    </>
  )
}
export default Topnav