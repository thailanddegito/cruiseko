import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

import DataTable from 'react-data-table-component'
import SubHeaderComponent from './SubHeaderComponent'
import ColumnTable from '../column/ColumnTableWidget'


const TableWidget = (props) => {
  const {page_id} = props;
  const [modalConfirm, setModalConfirm] = useState(false);
  const [pages, setPage] = useState();

  const fecthPageWidget = () => {
    api.getPageWidget({page_id})
    .then(res=>{
      const data = res.data;
      setPage(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    if(!page_id) return
    fecthPageWidget();
  },[page_id]);
  
  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delPageWidget(ref_id)
    .then(res=>{
      const data = res.data;
      fecthPageWidget();
      setModalConfirm(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  console.log('pages', pages);

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = pages ? pages.filter(item => item.widget_name && item.widget_name.toLowerCase().includes(filterText.toLowerCase())) : [];
 
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
            setFilterText={setFilterText} filterText={filterText} placeholder={"Filter By Widget Name"}
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
export default TableWidget