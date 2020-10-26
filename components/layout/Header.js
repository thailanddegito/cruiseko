
import React from 'react';
import Link from 'next/link'
  
const Header = (props) => {

  return (
    <>
      <header className="header menu_fixed">
        <div id="preloader"><div data-loader="circle-side"></div></div>
        <div id="logo">
          <a href="index.html">
            <img src="icon/logo.svg" width="150" height="36" alt="" className="logo_normal" />
            <img src="icon/logo.svg" width="150" height="36" alt="" className="logo_sticky" />
          </a>
        </div>
        <a href="#menu" className="btn_mobile">
          <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </a>
        <nav id="menu" className="main-menu">
          <ul>
            <li><span><Link href="/login"><a>Login</a></Link></span></li>
            <li><span><Link href="/register"><a>Register</a></Link></span></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default Header