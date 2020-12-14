import React, { useEffect, useState } from 'react';
import Layout from '../../components/backend/layout/Layout';
import Print from '../../components/backend/report/print'

const Index = ({ t }) => {

  return (
    <>
      <Layout title="Dashboard" page_name="Dashboard">
        <Print />
      </Layout>
    </>
  )
}


export default Index
