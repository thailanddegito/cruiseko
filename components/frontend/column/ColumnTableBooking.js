
import Link from 'next/link';
import React from 'react';

const ColumsBody = (props) => {

  const columns = [
    {
      name: 'Booking NO.',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Booking By',
      selector: 'user_firstname',
      sortable: true,
      cell : row => (
        <span>{row.user_firstname} {row.user_lastname}</span>
      )
    },
    {
      name: 'Price',
      selector: 'net_price',
      sortable: true,
    },
    {
      name: 'Payment Status',
      selector: 'payment_status',
      sortable: true,
      cell : row => (
        row.payment_status == 1 ? <span className="text-warning">Pending</span> : <span className="text-success">Success</span>
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
          <ul className="buttons manage mb-0">
            <li>
              <Link href="/user/my_booking/detail/[id]" as={`/user/my_booking/detail/${row.id}`}>
                <button className="a-manage warning"><span>Detail</span></button>
              </Link>
            </li>
          </ul>
        </span>
      )
    },
  ];

  return columns;

}



export default ColumsBody