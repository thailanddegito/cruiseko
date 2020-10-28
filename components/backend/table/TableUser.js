import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'

const TableUser = (props) => {
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
      <div className="table-responsive">
        <table className="table table-bordered" width="100%" cellSpacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>Full name</th>
              <th>Status</th>
              <th>Created date</th>
              <th className="text-center">Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              users ? users.rows.map((val, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.firstname} {val.lastname}</td>
                  <td>
                    {val.approve_status == 0 && <span className="a-manage warning">Pending</span>}
                    {val.approve_status == 1 && <span className="a-manage success">Approve</span>}
                    {val.approve_status == 2 && <span className="a-manage danger">Problem</span>}
                  </td>
                  <td>{val.createdAt}</td>
                  <td className="text-center">
                    <ul className="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/${val.id}`}>
                          <a className="a-manage warning"><i className="fa fa-fw fa-cog"></i> <span>Approve</span></a>
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
    </>
  )
}
export default TableUser