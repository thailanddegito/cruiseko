import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

import DataTable from 'react-data-table-component'
import SubHeaderComponent from './SubHeaderComponent'
import ColumnTable from '../column/ColumnTableLocation'


const TableLocation = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [locations, setLocation] = useState();

  const fechLocation = () => {
    api.getLocation()
    .then(res=>{
      const data = res.data;
      setLocation(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fechLocation();
  },[]);
  
  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delLocation(ref_id)
    .then(res=>{
      const data = res.data;
      fechLocation();
      setModalConfirm(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = locations ? locations.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) : [];
  
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
export default TableLocation