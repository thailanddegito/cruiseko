import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'

const Table = (props) => {
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

  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> Table Permission
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Created date</th>
                  <th className="text-center" style={{width: "25%"}}>Manage</th>
                </tr>
              </thead>
              <tbody>
                {
                  roles ? roles.map((val, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.createdAt}</td>
                      <td className="text-center">
                        <ul className="buttons manage">
                          <li>
                            <Link href="/backend/roles/edit/[id]" as={`/backend/roles/edit/${val.id}`}>
                              <a className="btn_1 gray manage"><i className="fa fa-fw fa-check-circle-o"></i> Manage</a>
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  )) : <tr><td colSpan="100%">Data Not found!!!</td></tr>
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default Table