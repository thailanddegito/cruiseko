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
              <th>ชื่อ - สกุล</th>
              <th>วันที่สร้าง</th>
              <th className="text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {
              users ? users.rows.map((val, index) => (
                <tr key={index}>
                  <td>{val.firstname} {val.lastname}</td>
                  <td>{val.createdAt}</td>
                  <td className="text-center">
                    <ul className="buttons manage">
                      <li>
                        <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/${val.id}`}>
                          <a><i className="fa fa-fw fa-pencil"></i> <span>แก้ไข</span></a>
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