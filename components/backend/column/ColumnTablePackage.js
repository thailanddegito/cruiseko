
import React from 'react';
import Link from 'next/link'
import {toDateISO} from '../../../utils/tools'
import Switch from '../../widget/Switch'

const ColumsBody = (props) => {
  const {delData, handleFunction} = props;

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
      cell : row => (
        (row.publish_status >= 0) ? (
          <Switch name="publish_status" id={`publish_status${row.id}`} checked={row.publish_status == 1 ? true : false} handleFunction={() => handleFunction(row.publish_status , row.id)} />
        ) : null
      )
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