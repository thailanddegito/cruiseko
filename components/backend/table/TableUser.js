import React, { useEffect, useState } from 'react';
import api from '../../../utils/api-admin'
import DataTable from 'react-data-table-component'
import SubHeaderComponent from './SubHeaderComponent'
import ColumnTable from '../column/ColumnTableUser'

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
        columns={ColumnTable}
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