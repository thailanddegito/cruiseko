import React, { useEffect, useState } from 'react';
import Layout from '../../../components/backend/layout/Layout';
import InputLabel from '../../../components/widget/InputLabel'
import Button from '../../../components/widget/Button';
import Link from 'next/link';
import api from '../../../utils/api-admin';
import SuccessDialog from '../../../components/widget/ModalSuccessDialog';

const Create = (props) => {
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleSave = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    api.insertPermission(data)
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
      <Layout title="สร้างสิทธิ์การใช้งานเมนูหน้าเว็บ" page_name="สิทธิ์การใช้งานเมนูหน้าเว็บ" sub_page="สร้าง">
        <div className="row justify-content-start">
          <div className="col-12">
            <h4>สร้างสิทธิ์การใช้งานเมนูหน้าเว็บ</h4>
          </div>
        </div>
        <div className="divider"></div>
        <form onSubmit={handleSave} >
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <InputLabel inputProps={{ 
                className:'form-control', type : 'name',
                name : 'name', required : true
              }} 
              labelName="ชื่อเมนู : " iconProps={{className : 'fa icon icon-email'}}  />
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-6">
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

        <SuccessDialog show={modalSuccess}
          text="บันทึกข้อมูลสำเร็จ !!!"
          size="md" onHide={() => setModalSuccess(false)}
          route={"/backend/permission"} />

      </Layout>
    </>
  )
}


export default Create
