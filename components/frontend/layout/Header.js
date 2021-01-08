import Link from 'next/link';
import React, {useContext, useState} from 'react';
import Loading from '../../widget/Loading' 
import UserContext from '../../../contexts/UserContext';
import AuthService from '../../../utils/AuthService';
import LoginModal from '../../../components/frontend/login/Modal';

const Header = (props) => {
  const {loading, banner = true} = props;
  const { user, fetchUser } = useContext(UserContext);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    AuthService.logout();
    window.location = "/";
  }

  return (
    <>
      <header className={`header menu_fixed ${banner ? '' : 'no-banner'}`}>
        {/* {loading && <Loading loading={loading} />} */}
        <div id="logo">
          <Link href="/">
            <a>
              <img src="/icon/logo.svg" width="150" height="36" alt="" className="logo_normal" />
              <img src="/icon/logo.svg" width="150" height="36" alt="" className="logo_sticky" />
              {/* <img src="/template/img/logo.svg" width="150" height="36" alt="" className="logo_normal" />
              <img src="/template/img/logo_sticky.svg" width="150" height="36" alt="" className="logo_sticky" /> */}
            </a>
          </Link>
        </div>
        <ul id="top_menu">
          {
            !user ? (
              <>
              {/* <li><a href="#" className="cart-menu-btn d-none" title="Cart"><strong>4</strong></a></li>
              <li><a href="#" className="login" title="Sign In" onClick={() => setShowLogin(true)}>Sign In</a></li> */}
              </>
            ) : null 
          }
        </ul>
        <a href="#menu" className="btn_mobile">
          <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </a>
        <nav id="menu" className="main-menu">
          <ul>
            <li className="d-block d-lg-none"><span><Link href="/"><a>Home</a></Link></span></li>
            {
              !!!user ? (
                <>
                  <li><span><Link href="/partner/login"><a>Pathner Login</a></Link></span></li>
                  <li><span><Link href="/login"><a>Login</a></Link></span></li>
                </>
              ) : (
                <li><span><a href="#0">{user.firstname} {user.lastname}</a></span>
                  <ul>
                    <li><a href="#" onClick={() => handleLogout()}>Logout</a></li>
                  </ul>
                </li>
              ) 
            }
           
          </ul>
        </nav>

        <LoginModal show={showLogin}
          size="md" onHide={() => setShowLogin(false)}/>
        
      </header>
    </>
  )
}
export default Header