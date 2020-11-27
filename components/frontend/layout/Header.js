
import Link from 'next/link';
import React, {useContext, useState} from 'react';
import Loading from '../../widget/Loading' 
import UserContext from '../../../contexts/UserContext';
import AuthService from '../../../utils/AuthService';


const Header = (props) => {
  const {loading} = props;
  const { user, fetchUser } = useContext(UserContext);
  const [toggle, setToggle] = useState();

  const handleLogout = () => {
    AuthService.logout();
    window.location = "/";
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // console.log(user);
  return (
    <>
      <header className="header menu_fixed">
        {loading && <Loading loading={loading} />}
        <div className="d-none d-lg-block">
          <div className="menu-one">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="float-right">
                    <nav className="main-menu">
                      <ul>
                        <li><span><a href="/">Help</a></span></li>
                        {
                          !!!user && (
                            <li><span><a href="/partner/login">Patner Login</a></span></li>
                          ) 
                        }
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-two">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div id="logo">
                      <a href="/">
                        <img src="/icon/logo.svg" width="150" height="36" alt="" className="logo_normal" />
                        <img src="/icon/logo.svg" width="150" height="36" alt="" className="logo_sticky" />
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
                      {
                        user ? (
                          <li><span><a href="#0">{user.firstname} {user.lastname}</a></span>
                            <ul>
                              <li><a href="#" onClick={() => handleLogout()}>Logout</a></li>
                            </ul>
                          </li>
                        ): (
                          <li><span><a href="/login">Login</a></span></li>
                        ) 
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <div className="header-mobile">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="hamburger hamburger--3dx-r" onClick={() => setToggle(!toggle)}>
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>     
                  <div className="mobile-logo">
                    <img src="/icon/logo.svg" width="150" height="36" alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
            <div id="mySidenav" className="sidenav" style={{width : toggle ? `100%` : '0'}}>
              <a href="#" className="closebtn" onClick={() => setToggle(!toggle)}>&times;</a>
              <Link href="/login"><a>Login</a></Link>
              <Link href="/partner/login"><a>Patner Login</a></Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header