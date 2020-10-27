import React from 'react';
import Layout from '../../../../components/backend/layout/Layout';

const EditAdmin = ({query}) => {

  return (
    <>
      <Layout title="Edit Admin" page_name="Admin" sub_page="Edit" isLogin={true}>
        
      </Layout>
    </>
  )
}

EditAdmin.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default EditAdmin
