import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableUser from '../../../components/backend/table/TableUser';
import UserCard from '../../../components/backend/user/UserCard';

const Index = (props) => {

  return (
    <>
      <Layout title="Users" page_name="Users" isLogin={true}>
        <div>
          <UserCard />
        </div>
        <div>
          <TableUser />
        </div>
      </Layout>
    </>
  )
}


export default Index
