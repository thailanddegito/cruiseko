import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import Button from '../../../../components/widget/Button';
import InputLabel from '../../../../components/widget/InputLabel';
import SelectLabel from '../../../../components/widget/SelectLabel';
import SuccessDialog from '../../../../components/widget/ModalSuccessDialog';
import WarningDialog from '../../../../components/widget/ModalWarningDialog';
import api from '../../../../utils/api-admin';
import ImageBoxBackend from '../../../../components/widget/ImageBoxBackend';


const EditRole = ({query}) => {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [pages, setPage] = useState();
  const [chkImg, setChkimg]  = useState(false);

  const router = useRouter();
  const id = router.query.id



  const fecthPage = () => {
    api.getPageOne(id)
    .then(res=>{
      const data = res.data;
      setPage(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    if(!id) return
    fecthPage();
  },[id]);


  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.updatePage(id, data)
    .then(res=>{
      const data = res.data;
      setModalSuccess(true);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  console.log(pages);

  return (
    <>
      <Layout title="Edit Pages" page_name="Page" sub_page="Edit" main_link="pages">
      <div className="row justify-content-start">
          <div className="col-12">
            <h4>Edit Pages</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave} encType="multipart/form-data" >

          <div className="row justify-content-center mx-0">
            <div className="col-lg-8 col-12 pl-0">
              <div className="row">
                <div className="col-12">
                  <InputLabel inputProps={{ 
                    className:'form-control', type : 'text',
                    defaultValue : pages ? pages.title: '',
                    name : 'title', required : true
                  }} 
                  labelName="Title  " iconProps={{className : 'fa icon icon-home'}} />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-4">
                    <label>Description</label>
                    <textarea className="form-control" name="description" required defaultValue={pages ? pages.description: ''}></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-4">
                    <label>Keyword</label>
                    <textarea className="form-control" name="keyword" required defaultValue={pages ? pages.keyword: ''}></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 pr-0">
              <div className="row">
                <div className="col-12">
                  <InputLabel inputProps={{ 
                    className:'form-control', type : 'text',
                    defaultValue : pages ? pages.path: '',
                    name : 'path', required : true,
                    readOnly : true
                  }} 
                  labelName="Path  " iconProps={{className : 'fa icon icon-home'}} />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label>Picture  </label>
                    <ImageBoxBackend _text="Picture" _img={pages?.image} _name="image" _id="image" chkImg={chkImg}  />
                  </div>
                </div>
              </div>
            </div>
          </div>  


          <div className="row justify-content-center mt-4">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="Save" _class="btn-primary" />
                <Link href="/backend/pages">
                  <a>
                    <Button _type="button" _name="Cancel" _class="btn-outline-primary ml-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </form>

        <SuccessDialog show={modalSuccess}
          text="Successfully saved data !!!"
          size="md" onHide={() => setModalSuccess(false)}
          route={"/backend/pages"} />
      
      </Layout>
    </>
  )
}

// EditRole.getInitialProps = ({query}) => {
//   return {query}; //has to be like an object
// }
export default EditRole
