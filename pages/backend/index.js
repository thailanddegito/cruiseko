import React, { useEffect, useState } from 'react';
import Layout from '../../components/backend/layout/Layout';
import Slick from '../../components/backend/user/SlickTest'

const Index = ({ t }) => {

  return (
    <>
      <Layout title="Dashboard" page_name="Dashboard">
        <Slick />
      </Layout>
    </>
  )
}


export default Index
