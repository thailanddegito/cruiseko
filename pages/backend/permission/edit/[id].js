import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../../../components/backend/layout/Layout';
import InputLabel from '../../../../components/widget/InputLabel'
import Button from '../../../../components/widget/Button';
import Link from 'next/link';
import api from '../../../../utils/api-admin';

const EditPermission = ({query}) => {

  const [permission, setPermission] = useState()
  const router = useRouter();
  const id = router.query.id

  const fechPermissionOne = () => {
    api.getPermissioneOne(id)
    .then(res=>{
      const data = res.data;
      
      setPermission(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  useEffect(() => {
    fechPermissionOne();
  },[id]);


  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.updatePermission(data)
    .then(res=>{
      const data = res.data;
      
      alert('แก้ไขข้อมูลสำเร็จ');

      Router.push('/backend/permission');
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  console.log(permission);


  return (
    <>
      <Layout title="Edit Permission" page_name="Permission" sub_page="Edit" isLogin={true}>
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>แก้ไขสิทธิ์การใช้งานเมนูหน้าเว็บ</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave}>
          <input type="hidden" name="id" value={permission ?permission.id:''} />
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'name',
                defaultValue : permission ? permission.name: '',
                name : 'name', required : true
              }} 
              labelName="ชื่อเมนู : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="text-center">
                <Button _type="submit" _name="บันทึก" _class="btn-primary" />
                <Link href="/backend/permission">
                  <a>
                    <Button _type="button" _name="ยกเลิก" _class="btn-outline-primary ml-4" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </>
  )
}

EditPermission.getInitialProps = ({query}) => {
  return {query}; //has to be like an object
}
export default EditPermission
