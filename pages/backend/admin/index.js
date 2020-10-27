import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableUser from '../../../components/backend/user/Table';
import Link from 'next/link'

const Index = (props) => {

  return (
    <>
      <Layout title="Admin" page_name="Admin" isLogin={true}>
        <Link href="/backend/admin/create"><a className="btn btn-primary">Create</a></Link>
      </Layout>
    </>
  )
}


export default Index
