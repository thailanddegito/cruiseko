import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'

const Table = (props) => {
  const [users, setUsers] = useState(false);

  const fecthUsers = () => {
    api.getUsers({user_type : 'partner'})
    .then(res=>{
      const data = res.data;
      setUsers(data);
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    })
  }

  useEffect(() => {
    fecthUsers();
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
                  <th>Name</th>
                  <th>Created date</th>
                  <th className="text-center">Manage</th>
                </tr>
              </thead>
              <tbody>
                {
                  users ? users.rows.map((val, index) => (
                    <tr key={index}>
                      <td>{val.firstname} {val.lastname}</td>
                      <td>{val.position}</td>
                      <td>2011/04/25</td>
                      <td className="text-center">
                        <ul className="buttons manage">
                          <li>
                            <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/1`}>
                              <a className="btn_1 gray manage"><i className="fa fa-fw fa-check-circle-o"></i> Manage</a>
                            </Link>
                          </li>
                          <li><a href="#0" className="btn_1 gray delete"><i className="fa fa-fw fa-times-circle-o"></i> Delete</a></li>
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