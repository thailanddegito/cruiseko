import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../../../../../components/backend/layout/Layout';
import Button from '../../../../../components/widget/Button';
import Router, { useRouter } from 'next/router';
import MainWidget from '../../../../../components/backend/page/MainWidget'
import api from '../../../../../utils/api-admin';
import SuccessDialog from '../../../../../components/widget/ModalSuccessDialog';


const Create = ({query}) => {  
  const [modalSuccess, setModalSuccess] = useState(false);

  const router = useRouter();
  const page_id = router.query.page_id
  const widget_type = router.query.type

 
  const handleSave = () => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.insertPage(data)
    .then(res=>{
      const data = res.data;
      setModalSuccess(true);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const handleSublink = () => {
    Router.push('/backend/pages/[page_id]/customize', `/backend/pages/${page_id}/customize`)
  }


  return (
    <>
      <Layout title="Create Pages" page_name="Pages" sub_page="Customize" main_link="pages" sub_link={handleSublink} chliden_page="Create">
        <div className="row justify-content-start">
          <div className="col-12">
            <h5>
              Create Page Widgets : 
              {widget_type == 1 && ' Text'}
              {widget_type == 2 && ' Text-Left & Image-Right'}
              {widget_type == 3 && ' Image-Left & Text-Right'}
              {widget_type == 4 && ' Text & Text'}
              {widget_type == 5 && ' Image & Image'}
              {widget_type == 6 && ' Image'}
            </h5>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave} encType="multipart/form-data" >
          <input type="hidden" name="widget_type" value={widget_type} />

          <MainWidget widget_type={widget_type} />

          <div className="row justify-content-center mt-4 mt-4">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="Submit" _class="btn-primary" />
                <Link href="/backend/pages/[page_id]/customize" as={`/backend/pages/${page_id}/customize`}>
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
          clickRoute={handleSublink} />

      </Layout>
    </>
  )
}

Create.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default Create
