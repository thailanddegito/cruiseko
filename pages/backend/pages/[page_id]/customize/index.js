import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../../../../../components/backend/layout/Layout';
import TablePage from '../../../../../components/backend/table/TablePage';
import ModalWidget from '../../../../../components/backend/page/ModalWidget'
import { useRouter } from 'next/router';

const Customize = (props) => {
  const [show, setShow] = useState(false);

  const router = useRouter();
  const page_id = router.query.page_id

  return (
    <>
      <Layout title="Pages" page_name="Pages" sub_page="Customize" main_link="pages">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Pages Widgets</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <button type="button" className="btn btn-primary" onClick={() => setShow(true)}>Create</button>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          {/* <TablePage /> */}
        </div>

        <ModalWidget show={show}
          size="lg" 
          page_id={page_id}
          onHide={() => setShow(false)} />
      </Layout>
    </>
  )
}
Customize.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default Customize
