import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

const TableCompanyType = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [companies, setCompany] = useState();

  const fechCompany = () => {
    api.getCompany({deleted : 0})
    .then(res=>{
      const data = res.data;
      setCompany(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fechCompany();
  },[]);
  
  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delCompany(ref_id)
    .then(res=>{
      const data = res.data;
      fechCompany();
      setModalConfirm(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  // console.log(companies);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered" width="100%" cellSpacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Prefix</th>
              <th>Commission Rate</th>
              <th>Created date</th>
              <th className="text-center" style={{width: "25%"}}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              (companies && companies.length) ? companies.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.prefix}</td>
                  <td>{val.commission_rate}</td>
                  <td>{val.createdAt}</td>
                  <td className="text-center">
                    <ul className="buttons manage">
                      <li>
                        <Link href="/backend/company_type/edit/[id]" as={`/backend/company_type/edit/${val.id}`}>
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
export default TableCompanyType