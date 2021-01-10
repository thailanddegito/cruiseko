import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import api from '../../../utils/api-admin'
import ModalConfirmDialog from '../../widget/ModalConfirmDialog';
import SuccessDialog from '../../../components/widget/ModalSuccessDialog';
import ModalDuplicate from '../../widget/ModalConfirmDialog';

import DataTable from 'react-data-table-component'
import SubHeaderComponent from './SubHeaderComponent'
import ColumnTable from '../column/ColumnTablePackage'


const TablePackage = (props) => {
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalDuplicate, setModalDuplicate] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const [packages, setPackage] = useState();

  const fecthPackage = () => {
    api.getPackage({is_draft : 1})
    .then(res=>{
      const data = res.data;
      console.log('data',data)
      setPackage(data);
    })
    .catch(err => {
      console.log(err.response);
    })
  }
  
  useEffect(() => {
    fecthPackage();
  },[]);
  
  const [ref_id, setrefID] = useState();
  const delData = (id) => {
    setrefID(id);
    setModalConfirm(true);
  }

  const duplicateData = (id) => {
    setrefID(id);
    setModalDuplicate(true);
  }

  const onConfirm = ()=>{
    if(!ref_id) return;
    api.delPackage(ref_id)
    .then(res=>{
      const data = res.data;
      fecthPackage();
      setModalConfirm(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const onConfirmDuplicate = ()=>{
    if(!ref_id) return;
    var data = {product_id : ref_id}
    api.dupPackage(data)
    .then(res=>{
      const data = res.data;
      fecthPackage();
      setModalDuplicate(false);
    })
    .catch(err => {
      console.log(err.response);
    })
  }

  const handleFunction = (status, id) => {
    console.log(id);
    var val = status == 1 ? 0 : 1;
    var data = {id, publish_status : val};
    console.log(data);
    api.updatePackagePublish(data)
    .then(res=>{
      const data = res.data;
      setModalSuccess(true);
      fecthPackage();
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    }) 
  }
  
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = packages ? packages.rows.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())) : [];
  
  const columns = ColumnTable({delData, handleFunction, duplicateData});


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

      <ModalDuplicate show={modalDuplicate}
        text={`Do you confirm to duplicate this ?`}
        size="md" 
        cancel_btn={true}
        onConfirm={() => onConfirmDuplicate()}
        ref_id={ref_id}
        onHide={() => setModalDuplicate(false)} />

      <SuccessDialog show={modalSuccess}
        text="Successfully saved data !!!"
        size="md" onHide={() => setModalSuccess(false)}
        /> 
    </>
  )
}
export default TablePackage