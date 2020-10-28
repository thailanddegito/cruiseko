import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'

const Table = (props) => {
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

  console.log(users);

  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> Table Users
        </div>
        <div className="card-body">
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