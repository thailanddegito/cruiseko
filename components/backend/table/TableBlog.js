import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';

import DataTable from 'react-data-table-component'
import SubHeaderComponent from './SubHeaderComponent'
import ColumnTable from '../column/ColumnTableBlog'


const TableBlog = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [blogs, setBlog] = useState();

  const fecthBlog = () => {
    api.getBlog()
    .then(res=>{
      const data = res.data;
      setBlog(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthBlog();
  },[]);
  
  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delBlog(ref_id)
    .then(res=>{
      const data = res.data;
      fecthBlog();
      setModalConfirm(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  console.log(blogs);

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = blogs ? blogs.rows.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) : [];
  
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
export default TableBlog