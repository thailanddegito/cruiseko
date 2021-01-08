
import React from 'react';
import Link from 'next/link'
import {toDateISO} from '../../../utils/tools'

const ColumsBody = (props) => {
  const {delData} = props;

  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Path',
      selector: 'path',
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
              <Link href="/backend/pages/[page_id]/customize" as={`/backend/pages/${row.id}/customize`}>
                <button className="a-manage info w-100px"><i className="fa fa-fw fa-pencil"></i> <span>Customize</span></button>
              </Link>
            </li>
            <li>
              <Link href="/backend/pages/edit/[id]" as={`/backend/pages/edit/${row.id}`}>
                <button className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Edit</span></button>
              </Link>
            </li>
            {/* <li>
              <button className="a-manage danger" onClick={() => delData(row.id)}><i className="fa fa-fw fa-trash"></i> <span>Delete</span></button>
            </li> */}
          </ul>
        </span>
      )
    },
  ];

  return columns;

}



export default ColumsBody