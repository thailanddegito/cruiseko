
import React from 'react';
import Link from 'next/link'
  
const Header = (props) => {

  return (
    <>
      <header class="header menu_fixed">
        <div id="preloader"><div data-loader="circle-side"></div></div>
        <div id="logo">
          <a href="index.html">
            <img src="icon/logo.svg" width="150" height="36" alt="" class="logo_normal" />
            <img src="icon/logo.svg" width="150" height="36" alt="" class="logo_sticky" />
          </a>
        </div>
        <a href="#menu" class="btn_mobile">
          <div class="hamburger hamburger--spin" id="hamburger">
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </a>
        <nav id="menu" class="main-menu">
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