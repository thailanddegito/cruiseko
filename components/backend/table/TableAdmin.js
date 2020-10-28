import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

const TableAdmin = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [users, setUsers] = useState();
  const [roles, setRole] = useState();
 
  const fechRole = () => {
    api.getRole()
    .then(res=>{
      const data = res.data;
      
      setRole(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const fechUsers = () => {
    api.getAdminUsers()
    .then(res=>{
      const data = res.data;
      setUsers(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  

  useEffect(() => {
    fechUsers();
    fechRole();
  },[]);


  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delAdminUsers(ref_id)
    .then(res=>{
      const data = res.data;
      fechUsers();
      setModalConfirm(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  // console.log(users);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered" width="100%" cellSpacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อ</th>
              <th>อีเมล์</th>
              <th>สิทธิ์</th>
              <th>วันที่สร้าง</th>
              <th className="text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {
              users ? users.rows.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>
                    {
                      roles ? roles.map((val2, index2) => (
                        val.role_id == val2.id ? (
                          val2.name
                        ) : ''
                      )) : ''
                    }
                    
                  </td>
                  <td>{val.createdAt}</td>
                  <td className="text-center">
                    <ul className="buttons manage">
                      <li>
                        <Link href="/backend/admin/edit/[id]" as={`/backend/admin/edit/${val.id}`}>
                          <a className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>แก้ไข</span></a>
                        </Link>
                      </li>
                      <li>
                        <a className="a-manage danger" onClick={() => delData(val.id)}><i className="fa fa-fw fa-trash"></i> <span>ลบ</span></a>
                      </li>
                    </ul>
                  </td>
                </tr>
              )) : <tr><td colSpan="100%">Data Not found!!!</td></tr>
            }
            
          </tbody>
        </table>
      </div>
      <ModalConfirmDialog show={modalConfirm}
          text={`ยืนยันการลบข้อมูลนี้ หรือไม่?`}
          size="md" 
          cancel_btn={true}
          onConfirm={() => onConfirm()}
          ref_id={ref_id}
          onHide={() => setModalConfirm(false)} />
    </>
  )
}
export default TableAdmin