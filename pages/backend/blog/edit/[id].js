import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import Button from '../../../../components/widget/Button';
import InputLabel from '../../../../components/widget/InputLabel';
import SelectLabel from '../../../../components/widget/SelectLabel';
import SuccessDialog from '../../../../components/widget/ModalSuccessDialog';
import api from '../../../../utils/api-admin';
import ImageBoxBackend from '../../../../components/widget/ImageBoxBackend';

import dynamic from 'next/dynamic';
import DivLoad from '../../../../components/widget/DivLoad';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../../../components/widget/Editor'),{ ssr: false, loading: () => Loading })

const EditRole = ({query}) => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [types, setType] = useState();
  const [blogs, setBlog] = useState();

  const router = useRouter();
  const id = router.query.id

  const fecthBlogCate = () => {
    api.getBlogCate()
    .then(res=>{
      const data = res.data;
      var temp = data.map(val => ({...val,val : val.cate_id})  )
      setType(temp);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBlogCate();
  },[]);

  const fecthBlog = () => {
    api.getBlogOne(id)
    .then(res=>{
      const data = res.data;
      setBlog(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    if(!id) return
    fecthBlog();
  },[id]);


  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.updateBlog(id, data)
    .then(res=>{
      const data = res.data;
      setModalSuccess(true);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  
 


  return (
    <>
      <Layout title="Edit Blog" page_name="Blog" sub_page="Edit" main_link="blog">
      <div className="row justify-content-start">
          <div className="col-12">
            <h4>Edit Blog</h4>
          </div>
        </div>
        <div className="divider"></div>

        {
          !!blogs ? (
            <form onSubmit={handleSave} encType="multipart/form-data">
              <div className="row justify-content-center">
                  <div className="col-lg-8 col-12">
                    <InputLabel inputProps={{ 
                      className:'form-control', type : 'text',
                      name : 'name', required : true,
                      defaultValue : blogs.name
                    }} 
                    labelName="Name  " iconProps={{className : 'fa icon icon-home'}} />
                  </div>
                  <div className="col-lg-4 col-12">
                    <SelectLabel 
                    inputProps={{ 
                      className:'form-control select', 
                      name : 'cate_id', required : true, 
                      defaultValue : blogs.cate_id
                    }} 
                    labelName="Blog Category" iconProps={{className : 'fa icon icon-home'}} options={types} />
                  </div>
                </div>

                <div className="row"> 
                  <div className="col-12">
                    <div className="form-group mb-4">
                      <label>Short Description</label>
                      <textarea className="form-control" name="short_description" required defaultValue={blogs.short_description}></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="form-group mb-4">
                      <label>Description</label>
                      <Editor name="description" height="200px" required data={blogs.description} />
                    </div>
                  </div>
                </div>

                <div className="row justify-content-start">
                  <div className="col-lg-6 col-12">
                    <div className="form-group">
                      <label>Picture : </label>
                      <ImageBoxBackend _text="Picture" _img={blogs.picture} _name="picture" _id="picture" required={true} />
                    </div>
                  </div>
                </div>   


                <div className="row justify-content-center mt-4">
                  <div className="col-6">
                    <div className="text-center">
                      <Button _type="submit" _name="Save" _class="btn-primary" />
                      <Link href="/backend/blog">
                        <a>
                          <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
          ) : null
        }
        

        <SuccessDialog show={modalSuccess}
          text="Successfully saved data !!!"
          size="md" onHide={() => setModalSuccess(false)}
          route={"/backend/blog"} />
      
      </Layout>
    </>
  )
}

EditRole.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default EditRole
