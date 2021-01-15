
import React from 'react';
import Link from 'next/link'
import {toDateISO} from '../../../utils/tools'
import Switch from '../../widget/Switch'

const ColumsBody = (props) => {
  const {delData, handleFunction, duplicateData} = props;

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
      name: 'Drafting',
      sortable: false,
      selector: 'equal_draft',
      cell : row => (
        row.equal_draft == 1 ? 'No' : 'Yes'
      )
    },
    {
      name: 'Today Pricing Type',
      cell : row => {
        if(row.price_dates[0]) {
          if(row.price_dates[0].pricing_type == 'normal') {
            return 'Tour';
          }else if(row.price_dates[0].pricing_type == 'tier') {
            return 'Private Tour';
          }else{
            return 'Charter'
          }
        }else{
          return 'No Data';
        }
      }
    },
    {
      name: 'Publish status',
      cell : row => (
        (row.publish_status >= 0) ? (
          <Switch name="publish_status" id={`publish_status${row.id}`} checked={row.publish_status == 1 ? true : false} handleFunction={() => handleFunction(row.publish_status , row.id)} />
        ) : null
      )
    },
    {
      name: 'Created date',
      selector: 'createdAt',
      sortable: true,
    },
    {
      name: '',
      sortable: false,
      width : '300px',
      right : true,
      cell : row => (
        <span>
          <ul className="buttons manage">
            <li>
              <button className="a-manage info w-100px" onClick={() => duplicateData(row.id)}><i className="fa fa-fw fa-copy"></i> <span>Duplicate</span></button>
            </li>
            <li>
              <Link href="/backend/package/edit/[id]" as={`/backend/package/edit/${row.id}`}>
                <button className="a-manage warning w-100px"><i className="fa fa-fw fa-pencil"></i> <span>Manage</span></button>
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