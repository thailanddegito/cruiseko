
import React from 'react';
import Link from 'next/link'
import {toDateISO} from '../../../utils/tools'

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
          <p className="mb-0 font-weight-bold">{row.company_name_en}</p>
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
        <p className="mb-0 font-weight-bold">{row.license_no}</p>
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
    maxWidth : '200px',
    right : true,
    cell : row => (
      <span>
        <ul className="buttons manage">
          <li>
            <Link href="/backend/users/manage/[id]" as={`/backend/users/manage/${row.id}`}>
              <a className="a-manage warning"><i className="fa fa-fw fa-cog"></i> <span>Manage</span></a>
            </Link>
          </li>
        </ul>
      </span>
    )
  },
];

export default columns