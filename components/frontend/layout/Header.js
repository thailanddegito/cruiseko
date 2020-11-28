import Link from 'next/link';
import React, {useContext, useState} from 'react';
import Loading from '../../widget/Loading' 
import UserContext from '../../../contexts/UserContext';
import AuthService from '../../../utils/AuthService';
import LoginModal from '../../../components/frontend/login/LoginModal';

const Header = (props) => {
  const {loading} = props;
  const { user, fetchUser } = useContext(UserContext);

  const handleLogout = () => {
    AuthService.logout();
    window.location = "/";
  }

  return (
    <>
      <header class="header menu_fixed">
        {/* {loading && <Loading loading={loading} />} */}
        <div id="logo">
          <Link href="/">
            <a>
              <img src="/icon/logo.svg" width="150" height="36" alt="" className="logo_normal" />
              <img src="/icon/logo.svg" width="150" height="36" alt="" className="logo_sticky" />
              {/* <img src="/template/img/logo.svg" width="150" height="36" alt="" class="logo_normal" />
              <img src="/template/img/logo_sticky.svg" width="150" height="36" alt="" class="logo_sticky" /> */}
            </a>
          </Link>
        </div>
        <ul id="top_menu">
          {
            user ? (
              <li><span><a href="#0">{user.firstname} {user.lastname}</a></span>
                <ul>
                  <li><a href="#" onClick={() => handleLogout()}>Logout</a></li>
                </ul>
              </li>
            ): (
              <li><Link href="/partner/login"><a class="login" title="Sign In">Sign In</a></Link></li>
            ) 
          }
        </ul>
        <a href="#menu" class="btn_mobile">
          <div class="hamburger hamburger--spin" id="hamburger">
            <div class="hamburger-box">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </a>
        <nav id="menu" class="main-menu">
          <ul>
            {
              !!!user && (
                <li><span><Link href="/partner/login"><a>Pathner Login</a></Link></span></li>
              ) 
            }
          </ul>
        </nav>

        <LoginModal />
        
      </header>
    </>
  )
}
export default Header