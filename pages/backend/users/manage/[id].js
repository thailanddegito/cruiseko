import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import { useRouter } from 'next/router';
import api from '../../../../utils/api-admin'
import Button from '../../../../components/widget/Button';
import Link from 'next/link';
import ModalApprove from '../../../../components/backend/user/ModalApprove';
import ModalProblem from '../../../../components/backend/user/ModalProblem';
import UserDetail from '../../../../components/backend/user/UserDetail';
import LicenseImage from '../../../../components/backend/user/LicenseImage';

const UserManage = ({query}) => {
  const [modalApprove, setModalApprove] = useState(false);
  const [modalProblem, setModalProblem] = useState(false);
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

  
  const onToggle = () => {
    setToggle(!toggle);
  }



  return (
    <>
      <Layout title="Manage user" page_name="Users" sub_page="Manage" main_link="users" no_class={true}>
        {
          !!users ? (
            <>
              <div className="collapse-new">
                <div className="d-flex" id="main" style={toggle ? {marginRight : "25%"} : {marginRight : "0"}}>
                  <div className="content w-100">
                    <div className="container">
                      <UserDetail users={users} />
                      <div className="row justify-content-center">
                        <div className="col-12 mt-4">
                          <div className="text-center">
                            <Button _type="button" _name="อนุมัติ" _class="btn-primary ml-4" _click={() => setModalApprove(true)} />
                            <Button _type="button" _name="พบปัญหา" _class="btn-outline-primary ml-4" _click={() => setModalProblem(true)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`nav-toggle ${toggle ? 'open' : 'close'}`} onClick={onToggle}></div>
                </div>
                <div id="mySidebar" className="sidebar" style={toggle ? {width : "25%"} : {width : "0"}}>
                  <div>
                    <LicenseImage users={users} />
                  </div>
                </div>
              </div>
              <ModalApprove show={modalApprove}
              size="md" onHide={() => setModalApprove(false)}
              user_id={id} />

              <ModalProblem show={modalProblem}
              size="md" onHide={() => setModalProblem(false)}
              user_id={id} />
            </>
          ) : null
        }
      </Layout>
    </>
  )
}

UserManage.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default UserManage
