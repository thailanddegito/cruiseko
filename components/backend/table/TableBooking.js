import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import api from '../../../utils/api-admin';
import ColumnTable from '../column/ColumnTableBooking';
import SubHeaderComponent from './SubHeaderComponent';



const TableBooking = (props) => {
  const [bookings, setBooking] = useState();

  const fecthBooking = () => {
    api.getBooking()
    .then(res=>{
      const data = res.data;
      setBooking(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBooking();
  },[]);
  

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = bookings ? bookings.rows.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) : [];
  
  const columns = ColumnTable();

  console.log(bookings);

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
export default TableBooking