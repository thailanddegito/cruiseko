
import React from 'react';
import Link from 'next/link'
import {toDateISO} from '../../../utils/tools'

const ColumsBody = (props) => {
  const {delData} = props;

  const columns = [
    {
      name: 'Widget Name',
      selector: 'widget_name',
      sortable: true,
    },
    {
      name: 'Type',
      sortable: true,
      cell : row => (
        <>
          {row.widget_type == 1 && ' Text'}
          {row.widget_type == 2 && ' Text-Left & Image-Right'}
          {row.widget_type == 3 && ' Image-Left & Text-Right'}
          {row.widget_type == 4 && ' Text & Text'}
          {row.widget_type == 5 && ' Image & Image'}
          {row.widget_type == 6 && ' Image'}
        </>
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
              <Link href="/backend/pages/[page_id]/customize/edit/[id]" as={`/backend/pages/${row.page_id}/customize/edit/${row.id}`}>
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