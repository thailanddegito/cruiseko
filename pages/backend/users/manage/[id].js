import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import { useRouter } from 'next/router';
import api from '../../../../utils/api-admin'

const UserManage = ({query}) => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(false);
  const router = useRouter();
  const id = router.query.id;

  const fecthUsers = () => {
    api.getUsersOne(id)
    .then(res=>{
      const data = res.data;
      setUsers(data);
      console.log(data);
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    })
  }

  useEffect(() => {
    if(!id) return;
    fecthUsers();
  },[id]);

  useEffect(() => {
    if(toggle) {
      document.getElementById("mySidebar").style.width = "25%";
      document.getElementById("main").style.marginRight = "25%";
    }else{
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
    }
  });
  
  const onToggle = () => {
    setToggle(!toggle);
  }



  return (
    <>
      <Layout title="Manage user" page_name="Users" sub_page="manage" main_link="users" no_class={true}>
        <div className="collapse-new">
          <div className="d-flex" id="main">
            <div className="content">
              <h2>Collapsed Sidebar</h2>
              <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
            </div>
            <div className="nav-toggle" onClick={onToggle}></div>
          </div>
          <div id="mySidebar" className="sidebar">
            <div>
              
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

UserManage.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default UserManage
