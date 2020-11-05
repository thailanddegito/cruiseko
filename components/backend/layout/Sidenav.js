
import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Router from 'next/router';
import Topnav from './Topnav'
import Modal from '../../widget/Modal'
import AdminAuthService from '../../../utils/AdminAuthService';
import api from '../../../utils/api-admin';

const Sidenav = (props) => {
  const {children, page_name, sub_page, main_link, admin, no_class} = props;
  const [toggle, setToggle] = useState(false);
  const [counts, setCounts] = useState(false);

  useEffect(() => {
    if(toggle) {
      $('body').removeClass('fixed-nav sticky-footer');
      $('body').addClass('fixed-nav sticky-footer sidenav-toggled');
    }else{
      $('body').removeClass('fixed-nav sticky-footer sidenav-toggled');
      $('body').addClass('fixed-nav sticky-footer');
    }
  }, [toggle]);

  const fechCount = () => {
    api.getCountUsers()
    .then(res=>{
      const data = res.data;
      setCounts(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fechCount();
  },[]);

  
  const handleLogout = () => {
    AdminAuthService.logout();
    window.location = '/backend/login';
  }

  const checkMainMenu = (con1, con2) => {
    if(!admin && !admin.role) return
    if(admin.role.role_has_permissions){
      for(con1; con1 <= con2; con1++) {
        const check = admin.role.role_has_permissions.filter((val)=> val.permission_id == con1)
        // console.log('check', check)
        if (check.length) {
          return true
        }
      }
    }
  }

  const checkMenu = (id)=>{
    if(!admin && !admin.role) return;
    if(admin.role.role_has_permissions){
      console.log('role_has_permissions', admin.role.role_has_permissions);
      const check = admin.role.role_has_permissions.filter((val)=> val.permission_id == id)
      if (check.length) {
        return true
      }
    }
  }
  // console.log('counts', counts);

  return (
    <>
    {
      admin && (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-default fixed-top" id="mainNav">
            <Link href="/backend">
              <a className="navbar-brand">
                <img src="/icon/logo.svg" data-retina="true" alt="" width="150" height="36"/>
              </a>
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                {
                  (admin.role_id == 0 || checkMenu(1)) && (
                    <>
                      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
                        <Link href="/backend/users">
                          <a className="nav-link d-flex justify-content-between align-items-center">
                            <div>
                              <i className="fa fa-fw fa-user"></i>
                              <span className="nav-link-text">Users</span>
                            </div>
                            {
                              counts && counts.partner_pending ? (
                                <span className="nav-link-text badge badge-pill badge-danger">{counts.partner_pending} New</span>
                              ) : null
                            }
                          </a>
                        </Link>
                      </li>
                    </>
                  )
                }
                {
                  (admin.role_id == 0 || checkMainMenu(2,3)) && (
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="AdminUsers">
                      <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseAdminUsers" data-parent="#AdminUsers">
                        <i className="fa fa-fw fa-users"></i>
                        <span className="nav-link-text">Admins</span>
                      </a>
                      <ul className="sidenav-second-level collapse" id="collapseAdminUsers">
                        {
                          (admin.role_id == 0 || checkMenu(2)) && (
                            <li>
                              <Link href="/backend/admin">
                                <a>Admins</a>
                              </Link>
                            </li>
                          )
                        }
                        {
                          (admin.role_id == 0 || checkMenu(3)) && (
                            <li>
                              <Link href="/backend/roles">
                                <a>Admin roles</a>
                              </Link>
                            </li>
                          )
                        }
                      </ul>
                    </li>
                  )
                }
              </ul>
              <ul className="navbar-nav sidenav-toggler">
                <li className="nav-item">
                  <a className="nav-link text-center" id="sidenavToggler" onClick={() => setToggle(!toggle)}>
                    <i className="fa fa-fw fa-angle-left"></i>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-fw fa-sign-out"></i>Logout</a>
                </li>
              </ul>
            </div>
          </nav>

          <Topnav children={children} page_name={page_name} sub_page={sub_page} main_link={main_link} no_class={no_class} />
          <Modal handleClick={() => handleLogout()} />
        </>
      )
    }
    </>
  )
}
export default Sidenav