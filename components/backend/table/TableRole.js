import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

const TableRole = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
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
  
  useEffect(() => {
    fechRole();
  },[]);
  
  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delRole(ref_id)
    .then(res=>{
      const data = res.data;
      fechRole();
      setModalConfirm(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered" width="100%" cellSpacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>Role name</th>
              <th>Access level</th>
              <th>Created date</th>
              <th className="text-center" style={{width: "25%"}}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              (roles && roles.length) ? roles.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.level}</td>
                  <td>{val.createdAt}</td>
                  <td className="text-center">
                    <ul className="buttons manage">
                      <li>
                        <Link href="/backend/roles/edit/[id]" as={`/backend/roles/edit/${val.id}`}>
                          <a className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Edit</span></a>
                        </Link>
                      </li>
                      <li>
                        <a className="a-manage danger" onClick={() => delData(val.id)}><i className="fa fa-fw fa-trash"></i> <span>Delete</span></a>
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
          text={`Do you confirm to delete this ?`}
          size="md" 
          cancel_btn={true}
          onConfirm={() => onConfirm()}
          ref_id={ref_id}
          onHide={() => setModalConfirm(false)} />
    </>
  )
}
export default TableRole