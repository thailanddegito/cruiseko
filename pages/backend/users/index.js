import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableUser from '../../../components/backend/User/Table';
import UserCard from '../../../components/backend/User/UserCard';

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
