import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/backend/layout/Layout';
import TableBlogCategory from '../../../components/backend/table/TableBlogCategory';

const Index = (props) => {

  return (
    <>
      <Layout title="Blog Category" page_name="Blog Category">
      <div className="row justify-content-start">
          <div className="col-6">
            <h4>Blog Category</h4>
          </div>
          <div className="col-6">
            <div className="text-right">
              <Link href="/backend/blog_category/create">
                <a className="btn btn-primary">Create</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <TableBlogCategory />
        </div>
      </Layout>
    </>
  )
}


export default Index
