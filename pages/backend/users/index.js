import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableUser from '../../../components/backend/table/TableUser';
import UserCard from '../../../components/backend/user/UserCard';
const Index = (props) => {

  return (
    <>
      <Layout title="Users" page_name="Users" page_key={"users"}>
        
        <div>
          <UserCard />
        </div>
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Users</h4>
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
