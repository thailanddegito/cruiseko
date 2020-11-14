
import React from 'react';
import Link from 'next/link'
import {toDateISO} from '../../../utils/tools'

const ColumsBody = (props) => {
  const {delData} = props;

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Code',
      selector: 'code',
      sortable: true,
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
              <Link href="/backend/boat_category/edit/[id]" as={`/backend/boat_category/edit/${row.cate_id}`}>
                <a className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Edit</span></a>
              </Link>
            </li>
            <li>
              <a className="a-manage danger" onClick={() => delData(row.cate_id)}><i className="fa fa-fw fa-trash"></i> <span>Delete</span></a>
            </li>
          </ul>
        </span>
      )
    },
  ];

  return columns;

}



export default ColumsBody