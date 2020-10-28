
import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import Router from 'next/router';
  
const Sidenav = (props) => {
  const {loading, children, page_name, sub_page} = props;
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
    Router.push('/backend/login');
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
                  <span className="nav-link-text">Users Agents/Hotels</span>
                </a>
              </Link>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
              <Link href="/backend/admin">
                <a className="nav-link">
                  <i className="fa fa-fw fa-user"></i>
                  <span className="nav-link-text">Admin Users</span>
                </a>
              </Link>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
              <Link href="/backend/roles">
                <a className="nav-link">
                  <i className="fa fa-fw fa-user"></i>
                  <span className="nav-link-text">Admin Role</span>
                </a>
              </Link>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
              <Link href="/backend/permission">
                <a className="nav-link">
                  <i className="fa fa-fw fa-user"></i>
                  <span className="nav-link-text">Permission</span>
                </a>
              </Link>
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

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a href="javascript:void(0)" className="btn btn-primary" onClick={() => handleLogout()}>Logout</a>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            {(page_name) && (
              <li className={`breadcrumb-item ${!sub_page && 'active'}`}>
                {
                  sub_page ? (
                    <Link href="/backend/users">
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
          <div>
            {children}
          </div>
        </div>
      </div>

    </>
  )
}
export default Sidenav