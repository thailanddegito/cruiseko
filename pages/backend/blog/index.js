import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableBlog from '../../../components/backend/table/TableBlog';

const Index = (props) => {

  return (
    <>
      <Layout title="Blog" page_name="Blog">
        <div className="row justify-content-start">
          <div className="col-6">
            <h4>Blog</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/blog/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableBlog />
        </div>
      </Layout>
    </>
  )
}


export default Index
