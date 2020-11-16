
import React from 'react';
import Link from 'next/link'
import {toDateISO} from '../../../utils/tools'

const ColumsBody = (props) => {
  const {delData, roles, admin} = props;
  if(!admin) return null;
  if(!admin.data) return;
  const users = admin.data;

  const checkLevel = (role_id) => {
    return roles && roles.find((val) => role_id == val.id).level;
  }


  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Role',
      sortable: true,
      cell : row => (
        roles ? roles.map((val2, index2) => (
          row.role_id == val2.id ? (
            val2.name
          ) : ''
        )) : ''
      )
    },
    {
      name: 'Created date',
      selector: 'createdAt',
      sortable: true,
    },
    {
      name: '',
      sortable: true,
      width : '200px',
      right : true,
      cell : row => (
        <span>
           {
            users.role_id == 0 || ((users.role && users.role.level) < checkLevel(row.role_id)) ? (
              <ul className="buttons manage">
                <li>
                  <Link href="/backend/admin/edit/[id]" as={`/backend/admin/edit/${row.id}`}>
                    <button className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Edit</span></button>
                  </Link>
                </li>
                <li>
                  <button className="a-manage danger" onClick={() => delData(row.id)}><i className="fa fa-fw fa-trash"></i> <span>Delete</span></button>
                </li>
              </ul>
            ) : null
          }
        </span>
      )
    },
  ];

  return columns;

}



export default ColumsBody