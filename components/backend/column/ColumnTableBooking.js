
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
      name: 'Created date',
      selector: 'createdAt',
      sortable: true,
    },
    // {
    //   name: '',
    //   sortable: true,
    //   width : '200px',
    //   right : true,
    //   cell : row => (
    //     <span>
    //       <ul className="buttons manage">
    //         <li>
    //           <Link href="/backend/booking/manage/[id]" as={`/backend/booking/manage/${row.boat_id}`}>
    //             <button className="a-manage warning"><i className="fa fa-fw fa-pencil"></i> <span>Manage</span></button>
    //           </Link>
    //         </li>
    //       </ul>
    //     </span>
    //   )
    // },
  ];

  return columns;

}



export default ColumsBody