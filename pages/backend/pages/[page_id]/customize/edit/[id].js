import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Layout from '../../../../../../components/backend/layout/Layout';
import Button from '../../../../../../components/widget/Button';
import Router, { useRouter } from 'next/router';
import MainWidget from '../../../../../../components/backend/page/MainWidget'
import api from '../../../../../../utils/api-admin';
import SuccessDialog from '../../../../../../components/widget/ModalSuccessDialog';


const Create = ({query}) => {  
  const [modalSuccess, setModalSuccess] = useState(false);

  const router = useRouter();
  const id = router.query.id;

  const [widgets, setWidget] = useState();

  const fecthPageWidgetOne = () => {
    api.getPageWidgetOne(id)
    .then(res=>{
      const data = res.data;
      setWidget(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    if(!id) return
    fecthPageWidgetOne();
  },[id]);
 
  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.insertPageWidget(data)
    .then(res=>{
      const data = res.data;
      setModalSuccess(true);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const handleSublink = () => {
    Router.push('/backend/pages/[page_id]/customize', `/backend/pages/${widgets?.page_id}/customize`)
  }

  console.log(widgets);


  return (
    <>
      <Layout title="Create Pages" page_name="Pages" sub_page="Customize" main_link="pages" sub_link={handleSublink} chliden_page="Create">
        {
          !!widgets && (
            <>
              <div className="row justify-content-start">
                <div className="col-12">
                  <h5>
                    Create Page Widgets : 
                    {widgets.widget_type == 1 && ' Text'}
                    {widgets.widget_type == 2 && ' Text-Left & Image-Right'}
                    {widgets.widget_type == 3 && ' Image-Left & Text-Right'}
                    {widgets.widget_type == 4 && ' Text & Text'}
                    {widgets.widget_type == 5 && ' Image & Image'}
                    {widgets.widget_type == 6 && ' Image'}
                  </h5>
                </div>
              </div>
              <div className="divider"></div>
              <form onSubmit={handleSave} encType="multipart/form-data" >
                <input type="text" name="page_id" value={widgets.page_id} />
                <input type="text" name="widget_type" value={widgets.widget_type} />

                <MainWidget widget_type={widgets.widget_type} data={widgets} />

                <div className="row justify-content-center mt-4 mt-4">
                  <div className="col-6">
                    <div className="text-center">
                      <Button _type="submit" _name="Submit" _class="btn-primary" />
                      <Link href="/backend/pages/[page_id]/customize" as={`/backend/pages/${widgets.page_id}/customize`}>
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
            </>
          )
        }
        

      </Layout>
    </>
  )
}

Create.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default Create
