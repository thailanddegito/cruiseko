import Router, {useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import LicenseImage from '../../../../components/backend/user/LicenseImage';
import ModalApprove from '../../../../components/backend/user/ModalApprove';
import ModalProblem from '../../../../components/backend/user/ModalProblem';
import UserDetail from '../../../../components/backend/user/UserDetail';
import Button from '../../../../components/widget/Button';
import api from '../../../../utils/api-admin';

const UserManage = ({query}) => {
  const page_key = "users";
  const [modalApprove, setModalApprove] = useState(false);
  const [modalProblem, setModalProblem] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(false);
  const router = useRouter();
  const id = router.query.id;

  const fecthUsers = () => {
    api.getUsersOne(id, {with_around : 1})
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

  const handleClick = (id) => {
    Router.push('/backend/users/manage/[id]?id='+id, '/backend/users/manage/'+id);
  }

  console.log(users);


  return (
    <>
      <Layout title="Manage user" page_name="Users" sub_page="Manage" main_link="users" no_class={true}>
        {
          !!users ? (
            <>
              <div className="collapse-new">
                <div className={`d-flex text ${toggle ? 'toggle' : ''}`} id="main">
                  <div className="content w-100">
                    <div className="float-right">
                      <Button _type="button" _name="Previous" _class="btn-previous" _click={() => handleClick(users.prev_id)} _disabled={!users.prev_id} />
                      <Button _type="button" _name="Next" _class="btn-next ml-2" _click={() => handleClick(users.next_id)} _disabled={!users.next_id} />
                    </div>
                    <div className="container">
                      <UserDetail users={users} />
                      <div className="mobile-display">
                        <div className="mt-4">
                          <img src={users.image_license} className="w-100" />
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-12 mt-4">
                          <div className="text-center">
                            <Button _type="button" _name="Approve" _class="btn-primary ml-4" _click={() => setModalApprove(true)} />
                            <Button _type="button" _name="Problem" _class="btn-outline-primary ml-4" _click={() => setModalProblem(true)} />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className={`labtop-display nav-toggle ${toggle ? 'open' : 'close'}`} onClick={onToggle}></div>
                </div>
                <div id="mySidebar" className={`sidebar labtop-display ${toggle ? 'toggle' : ''}`}>
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
