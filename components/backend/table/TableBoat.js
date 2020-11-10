import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

const TableBoat = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [types, setType] = useState();

  const fecthBoat = () => {
    api.getBoat()
    .then(res=>{
      const data = res.data;
      setType(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBoat();
  },[]);
  
  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delBoat(ref_id)
    .then(res=>{
      const data = res.data;
      fecthBoat();
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
              <th>Name</th>
              <th>Code</th>
              <th>Company</th>
              <th>Amount</th>
              <th>Capacity</th>
              <th>Created date</th>
              <th className="text-center" style={{width: "25%"}}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              (types && types.length) ? types.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.code}</td>
                  <td>{val.company}</td>
                  <td>{val.amount}</td>
                  <td>{val.capacity}</td>
                  <td>{val.createdAt}</td>
                  <td className="text-center">
                    <ul className="buttons manage">
                      <li>
                        <Link href="/backend/boat/edit/[id]" as={`/backend/boat/edit/${val.boat_id}`}>
                          <a className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Edit</span></a>
                        </Link>
                      </li>
                      <li>
                        <a className="a-manage danger" onClick={() => delData(val.boat_id)}><i className="fa fa-fw fa-trash"></i> <span>Delete</span></a>
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
export default TableBoat