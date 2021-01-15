import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

import DataTable from 'react-data-table-component'
import SubHeaderComponent from './SubHeaderComponent'
import ColumnTable from '../column/ColumnTableBoat'


const TableBoat = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [boats, setBoat] = useState();
  const [loading, setLoading] = useState(false);
  const [limit,setLimit] = useState(10);
  const [pageNumber,setPageNumber] = useState(1)
  const [sorting,setSorting] = useState({})

  const fecthBoat = (params={}) => {
    params.page = pageNumber;
    params.limit = limit;

    if(sorting.orderby) params.orderby = sorting.orderby
    if(sorting.op) params.op = sorting.op

    setLoading(true);
    api.getBoat(params)
    .then(res=>{
      const data = res.data;
      setBoat(data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err.response);
      setLoading(false);
    })
  }
  
  useEffect(() => {
    fecthBoat();
  },[limit,pageNumber,sorting]);

  const handlePageChange = page => {
    setPageNumber(page)
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLimit(newPerPage)
    // setPageNumber(1)
  };

  const handleSort = (column, sortDirection) => {
    setSorting({orderby : column.selector,op : sortDirection})
    // console.log(column,sortDirection)
  };
  
  
  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delBoat(ref_id)
    .then(res=>{
      const data = res.data;
      fecthBoat();
      setModalConfirm(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = boats ? boats.rows.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) : [];
  
  const columns = ColumnTable({delData});


  return (
    <>
      
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        paginationServer
        paginationTotalRows={boats?.count || 0}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        onSort={handleSort}
        sortServer
        progressPending={loading}
        noHeader
        subHeader
        subHeaderComponent={
          <SubHeaderComponent 
            setResetPaginationToggle={setResetPaginationToggle} resetPaginationToggle={resetPaginationToggle} 
            setFilterText={setFilterText} filterText={filterText}
          />
        }
      />
      
      <ModalConfirmDialog show={modalConfirm}
          text={`Do you confirm to delete this ?`}
          size="md" 
          cancel_btn={true}
          onConfirm={() => onConfirm()}
          ref_id={ref_id}
          onHide={() => setModalConfirm(false)} />
    </>
  )
}
export default TableBoat