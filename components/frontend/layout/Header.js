
import Link from 'next/link';
import React, {useContext} from 'react';
import Loading from '../../widget/Loading' 
import UserContext from '../../../contexts/UserContext';
import AuthService from '../../../utils/AuthService';


const Header = (props) => {
  const {loading} = props;
  const { user, fetchUser } = useContext(UserContext);

  const handleLogout = () => {
    AuthService.logout();
    window.location = "/";
  }

  // console.log(user);
  return (
    <>
      <header className="header menu_fixed">
        {loading && <Loading loading={loading} />}
        <div className="menu-one">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="float-right">
                  <nav className="main-menu">
                    <ul>
                      <li><span><Link href="/"><a>Help</a></Link></span></li>
                      {
                        !!!user && (
                          <li><span><Link href="/partner/login"><a>Patner Login</a></Link></span></li>
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
                  <Link href="/">
                    <a>
                      <img src="/icon/logo.svg" width="150" height="36" alt="" className="logo_normal" />
                      <img src="/icon/logo.svg" width="150" height="36" alt="" className="logo_sticky" />
                    </a>
                  </Link>
                </div>
                <Link href="#menu">
                  <a className="btn_mobile">
                    <div className="hamburger hamburger--spin" id="hamburger">
                      <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                      </div>
                    </div>
                  </a>
                </Link>
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
                        <li><span><Link href="/login"><a>Login</a></Link></span></li>
                      ) 
                    }
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header