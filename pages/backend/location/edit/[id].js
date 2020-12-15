import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import Button from '../../../../components/widget/Button';
import InputLabel from '../../../../components/widget/InputLabel';
import SuccessDialog from '../../../../components/widget/ModalSuccessDialog';
import WarningDialog from '../../../../components/widget/ModalWarningDialog';
import SelectLabel from '../../../../components/widget/SelectLabel';
import api from '../../../../utils/api-admin';

const EditLocation = ({query}) => {
  const [modalWarning, setModalWarning] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [locations, setLocation] = useState();

  const router = useRouter();
  const id = router.query.id



  const fechLocationOne = () => {
    api.getLocationOne(id)
    .then(res=>{
      const data = res.data;
      setLocation(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    if(!id) return
    fechLocationOne();
  },[id]);


  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.updateLocation(data, id)
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
      <Layout title="Edit Location" page_name="Location" sub_page="Edit" main_link="location">
      <div className="row justify-content-start">
          <div className="col-12">
            <h4>Edit Location</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave} >
          <input type="hidden" name="id" value={locations ? locations.id:''} />
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                defaultValue : locations ? locations.name: '',
                name : 'name', required : true
              }} 
              labelName="Location name " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                defaultValue : locations ? locations.lat: '',
                name : 'lat', required : true
              }} 
              labelName="Latitude " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'text',
                defaultValue : locations ? locations.long: '',
                name : 'long', required : true
              }} 
              labelName="Longitude " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>


          <div className="row justify-content-center mt-4">
            <div className="col-6">
              <div className="text-center">
                <Button _type="submit" _name="Save" _class="btn-primary" />
                <Link href="/backend/location">
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
          route={"/backend/location"} />
        
        <WarningDialog show={modalWarning}
          text="Please select at least 1 permission !!!"
          size="md" onHide={() => setModalWarning(false)} />
      </Layout>
    </>
  )
}

EditLocation.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default EditLocation
