
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
    // {
    //   name: 'Code',
    //   selector: 'code',
    //   sortable: true,
    // },
    {
      name: 'Publish status',
      selector: 'publish_status',
    },
    {
      name: 'Draft status',
      selector: 'equal_draft',
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
              <Link href="/backend/package/edit/[id]" as={`/backend/package/edit/${row.id}`}>
                <button className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Edit</span></button>
              </Link>
            </li>
            <li>
              <button className="a-manage danger" onClick={() => delData(row.id)}><i className="fa fa-fw fa-trash"></i> <span>Delete</span></button>
            </li>
          </ul>
        </span>
      )
    },
  ];

  return columns;

}



export default ColumsBody