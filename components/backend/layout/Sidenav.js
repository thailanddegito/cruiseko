
import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Router from 'next/router';
import Topnav from './Topnav'
import Modal from '../../widget/Modal'
import AdminAuthService from '../../../utils/AdminAuthService';
import api from '../../../utils/api-admin';

const Sidenav = (props) => {
  const {children, page_name, sub_page, main_link, admin, no_class, headerScroll} = props;
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
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Bookings">
                      <Link href="/backend/booking">
                        <a className="nav-link">
                          <i className="fa fa-fw fa-calendar-check-o"></i>
                          <span className="nav-link-text">Bookings <span className="badge badge-pill badge-primary">6 New</span></span>
                        </a>
                      </Link>
                    </li>
                  )
                }
                {
                  (admin.role_id == 0 || checkMainMenu(2,3)) && (
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Package">
                      <a className={`nav-link nav-link-collapse ${(page_name == "Package" || page_name == "Package Category") ? '' : 'collapsed'}`} data-toggle="collapse" href="#collapseCategory" data-parent="#Category">
                        <i className="fa fa-fw fa-bug"></i>
                        <span className="nav-link-text">Package</span>
                      </a>
                      <ul className={`sidenav-second-level collapse ${(page_name == "Package" || page_name == "Package Category") ? 'show' : ''}`} id="collapseCategory">
                        {
                          (admin.role_id == 0 || checkMenu(2)) && (
                            <li>
                              <Link href="/backend/package">
                                <a>Package</a>
                              </Link>
                            </li>
                          )
                        }
                        {
                          (admin.role_id == 0 || checkMenu(3)) && (
                            <li>
                              <Link href="/backend/package_category">
                                <a>Package Category</a>
                              </Link>
                            </li>
                          )
                        }
                      </ul>
                    </li>
                  )
                }
                {
                  (admin.role_id == 0 || checkMainMenu(4,5)) && (
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Boat">
                      <a className={`nav-link nav-link-collapse ${(page_name == "Boat" || page_name == "Boat Category") ? '' : 'collapsed'}`} data-toggle="collapse" href="#collapseBoat" data-parent="#Boat">
                        <i className="fa fa-fw fa-ship"></i>
                        <span className="nav-link-text">Boat</span>
                      </a>
                      <ul className={`sidenav-second-level collapse ${(page_name == "Boat" || page_name == "Boat Category") ? 'show' : ''}`} id="collapseBoat">
                        {
                          (admin.role_id == 0 || checkMenu(4)) && (
                            <li>
                              <Link href="/backend/boat">
                                <a>Boat</a>
                              </Link>
                            </li>
                          )
                        }
                        {
                          (admin.role_id == 0 || checkMenu(5)) && (
                            <li>
                              <Link href="/backend/boat_category">
                                <a>Boat Category</a>
                              </Link>
                            </li>
                          )
                        }
                      </ul>
                    </li>
                  )
                }
                {
                  (admin.role_id == 0 || checkMainMenu(6,7)) && (
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
                      <a className={`nav-link nav-link-collapse ${(page_name == "Users" || page_name == "Company Type") ? '' : 'collapsed'}`} data-toggle="collapse" href="#collapseUsers" data-parent="#AdminUsers">
                        <i className="fa fa-fw fa-user"></i>
                        <span className="nav-link-text">Users</span>
                      </a>
                      <ul className={`sidenav-second-level collapse ${(page_name == "Users" || page_name == "Company Type") ? 'show' : ''}`} id="collapseUsers">
                        {
                          (admin.role_id == 0 || checkMenu(6)) && (
                            <li>
                              <Link href="/backend/users">
                                <a>Users</a>
                              </Link>
                            </li>
                          )
                        }
                        {
                          (admin.role_id == 0 || checkMenu(7)) && (
                            <li>
                              <Link href="/backend/company_type">
                                <a>Company Type</a>
                              </Link>
                            </li>
                          )
                        }
                      </ul>
                    </li>
                  )
                }
                {
                  (admin.role_id == 0 || checkMainMenu(8,9)) && (
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="AdminUsers">
                      <a className={`nav-link nav-link-collapse ${(page_name == "Admin" || page_name == "Admin Role") ? '' : 'collapsed'}`} data-toggle="collapse" href="#collapseAdminUsers" data-parent="#AdminUsers">
                        <i className="fa fa-fw fa-users"></i>
                        <span className="nav-link-text">Admins</span>
                      </a>
                      <ul className={`sidenav-second-level collapse ${(page_name == "Admin" || page_name == "Admin Role") ? 'show' : ''}`} id="collapseAdminUsers">
                        {
                          (admin.role_id == 0 || checkMenu(8)) && (
                            <li>
                              <Link href="/backend/admin">
                                <a>Admins</a>
                              </Link>
                            </li>
                          )
                        }
                        {
                          (admin.role_id == 0 || checkMenu(9)) && (
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

          <Topnav children={children} page_name={page_name} sub_page={sub_page} main_link={main_link} no_class={no_class} headerScroll={headerScroll} />
          <Modal handleClick={() => handleLogout()} />
        </>
      )
    }
    </>
  )
}
export default Sidenav