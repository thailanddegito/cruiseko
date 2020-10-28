import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import Link from 'next/link'

const Index = (props) => {

  return (
    <>
      <Layout title="Role" page_name="Role" isLogin={true}>
        <Link href="/backend/role/create"><a className="btn btn-primary">Create</a></Link>
      </Layout>
    </>
  )
}


export default Index
