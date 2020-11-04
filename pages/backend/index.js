import React, { useEffect, useState } from 'react';
import Layout from '../../components/backend/layout/Layout';
import TableTest from '../../components/backend/table/TableTest';

const Index = ({ t }) => {

  useEffect(() => {
    $('#dataTable').DataTable();
    console.log('sss')
  },[])
 
  return (
    <>
      <Layout title="Dashboard" page_name="Dashboard">
        <TableTest />
      </Layout>
    </>
  )
}


export default Index
