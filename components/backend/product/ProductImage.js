import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '../../widget/Button';
import InputLabel from '../../widget/InputLabel';
import SelectLabel from '../../widget/SelectLabel';
import Dropzone from '../../widget/Dropzone'
import api from '../../../utils/api-admin'
import DivLoad from '../../../components/widget/DivLoad';

const Loading = <div className="position-relative"><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../../components/widget/Editor'),{ ssr: false, loading: () => Loading })

const ProductImage = (props) => {

  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="form-group">
            <Dropzone />
          </div>
        </div>
      </div>

    </>
  )
}
export default ProductImage