
import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Router from 'next/router';
import Topnav from './Topnav'
import Modal from '../../widget/Modal'
import AdminAuthService from '../../../utils/AdminAuthService';

const Sidenav = (props) => {
  const {children, page_name, sub_page, main_link} = props;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // var body = document.body;
    if(toggle) {
      $('body').removeClass('fixed-nav sticky-footer');
      $('body').addClass('fixed-nav sticky-footer sidenav-toggled');
    }else{
      $('body').removeClass('fixed-nav sticky-footer sidenav-toggled');
      $('body').addClass('fixed-nav sticky-footer');
    }
    
  }, [toggle])

  const handleLogout = () => {
    AdminAuthService.logout();
    window.location = '/backend/login';
  }

  return (
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
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
              <Link href="/backend/users">
                <a className="nav-link">
                  <i className="fa fa-fw fa-user"></i>
                  <span className="nav-link-text">ข้อมูลสมาชิก</span>
                </a>
              </Link>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="AdminUsers">
              <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseAdminUsers" data-parent="#AdminUsers">
                <i className="fa fa-fw fa-user"></i>
                <span className="nav-link-text">ข้อมูลผู้ใช้งานระบบ</span>
              </a>
              <ul className="sidenav-second-level collapse" id="collapseAdminUsers">
                <li>
                  <Link href="/backend/admin">
                    <a href="charts.html">ผู้ใช้งานระบบ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/backend/roles">
                    <a href="tables.html">สิทธิ์เข้าใช้งานระบบ</a>
                  </Link>
                </li>
              </ul>
            </li>
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

      <Topnav children={children} page_name={page_name} sub_page={sub_page} main_link={main_link} />

      <Modal handleClick={() => handleLogout()} />

    </>
  )
}
export default Sidenav