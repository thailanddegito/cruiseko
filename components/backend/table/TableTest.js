import React, { useEffect, useState } from 'react';
import api from '../../../utils/api-admin'
import DataTable from 'react-data-table-component'
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
];

const data = [
  {title : 'Title1',director : 'Director1',year : 2020},
  {title : 'Title2',director : 'Director2',year : 2019},
  {title : 'Title3',director : 'Director3',year : 2020},
  {title : 'Title4',director : 'Director4',year : 2020},
  {title : 'Title5',director : 'Director5',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
  {title : 'Title6',director : 'Director6',year : 2020},
]
const TableTest = (props) => {
  
  
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> Data Table Example</div>
        <div className="card-body">
        <DataTable
          title="Movie List"
          columns={columns}
          data={data}
          defaultSortField="title"
          pagination
        />
        </div>
        <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
    </>
  )
}
export default TableTest