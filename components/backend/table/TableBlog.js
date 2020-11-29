import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

import DataTable from 'react-data-table-component'
import SubHeaderComponent from './SubHeaderComponent'
import ColumnTable from '../column/ColumnTableBlog'


const TableBoat = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [boats, setBoat] = useState();

  const fecthBoat = () => {
    api.getBoat()
    .then(res=>{
      const data = res.data;
      setBoat(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBoat();
  },[]);
  
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
  const filteredItems = boats ? boats.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) : [];
  
  const columns = ColumnTable({delData});


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