
import React from 'react';
import Link from 'next/link'
import {toDateISO} from '../../../utils/tools'

const ColumsBody = (props) => {
  const {delData, roles} = props;

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
          <ul className="buttons manage">
            <li>
              <Link href="/backend/admin/edit/[id]" as={`/backend/admin/edit/${row.id}`}>
                <a className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Edit</span></a>
              </Link>
            </li>
            <li>
              <a className="a-manage danger" onClick={() => delData(row.id)}><i className="fa fa-fw fa-trash"></i> <span>Delete</span></a>
            </li>
          </ul>
        </span>
      )
    },
  ];

  return columns;

}



export default ColumsBody