import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import { useRouter } from 'next/router';

const UserManage = ({query}) => {

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

  return (
    <>
      <Layout title="Users" page_name="Users" sub_page="Manage" isLogin={true}>
        
      </Layout>
    </>
  )
}

Order.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default UserManage
