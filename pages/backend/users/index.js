import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableUser from '../../../components/backend/table/TableUser';
import UserCard from '../../../components/backend/user/UserCard';

const Index = (props) => {

  return (
    <>
      <Layout title="ข้อมูลสมาชิก" page_name="ข้อมูลสมาชิก">
        
        <div>
          <UserCard />
        </div>
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>ข้อมูลสมาชิก</h4>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableUser />
        </div>
      </Layout>
    </>
  )
}


export default Index
