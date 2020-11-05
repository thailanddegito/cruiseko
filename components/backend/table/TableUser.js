import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import DataTable from 'react-data-table-component'
import {toDateISO} from '../../../utils/tools'
import SubHeaderComponent from './SubHeaderComponent'

const columns = [
  {
    name: 'Company Name',
    selector: 'company_name_en',
    sortable: true,
    cell : row => (
      <div className="d-flex align-items-center my-2">
        <div>
          <img src={row.image_logo ? row.image_logo : "/template/img/no-picture.png"} className="approve-logo-table" />
        </div>
        <div className="ml-3">
          <p className="mb-0">{row.company_name_en}</p>
          <p className="mb-0 font-14">{row.company_name_th}</p>
        </div>
      </div>
    )
  },
  {
    name: 'License NO.',
    selector: 'license_no',
    sortable: true,
    cell : row => (
      <div>
        <p className="mb-0">{row.license_no}</p>
        <p className="mb-0 font-14">Expired Date : {row.license_expired_date ? toDateISO(row.license_expired_date) : null}</p>
      </div>
    )
  },
  {
    name: 'Phone',
    selector: 'company_phone',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'company_email',
    sortable: true,
  },
  {
    name: 'Name',
    sortable: true,
    cell : row => <div>{row.firstname} {row.lastname}</div>
  },
  {
    name: '',
    sortable: true,
    cell : row => (
      <div>
        <ul className="buttons manage">
          <li>
            <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/${row.id}`}>
              <a className="a-manage warning"><i className="fa fa-fw fa-cog"></i> <span>Manage</span></a>
            </Link>
          </li>
        </ul>
      </div>
    )
  },
];

const TableUser = (props) => {
  const [users, setUsers] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const fecthUsers = () => {
    api.getUsers({user_type : 'partner', approve_status : 1})
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

  const filteredItems = users ? users.rows.filter(item => item.company_name_en && item.company_name_en.toLowerCase().includes(filterText.toLowerCase())) : [];

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        noHeader
        subHeader
        subHeaderComponent={
          <SubHeaderComponent 
            setResetPaginationToggle={setResetPaginationToggle} resetPaginationToggle={resetPaginationToggle} 
            setFilterText={setFilterText} filterText={filterText}
          />
        }
      />
    </>
  )
}
export default TableUser