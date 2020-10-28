import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import Link from 'next/link'

const Index = (props) => {

  return (
    <>
      <Layout title="Permission" page_name="Permission" isLogin={true}>
        <Link href="/backend/permission/create"><a className="btn btn-primary">Create</a></Link>
      </Layout>
    </>
  )
}


export default Index
