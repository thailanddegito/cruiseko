import dynamic from 'next/dynamic';
import React, { memo, useEffect, useState } from 'react';
import DivLoad from '../../widget/DivLoad';

const Loading = <div className="position-relative" style={{height : '200px'}}><DivLoad loading={true} /></div>;
const Editor = dynamic(() => import('../../widget/Editor'),{ ssr: false, loading: () => Loading })

const MetaTag = memo((props) => {
  const {pkg} = props;
  const [img, setImg] = useState("/template/img/tour_1.jpg");

  useEffect(() => {
    if(!pkg) return;
    setImg(pkg.meta_image ? pkg.meta_image : "/template/img/tour_1.jpg");
  },[pkg]);

  const handleChange = (event) => {
    if(!event.target.files[0]) {
      return;
    }
    setImg(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="row mx-0">
            <div className="col-12 px-0">
              <div className="form-group mb-4">
                <label>Title</label>
                <textarea className="form-control" name="meta_title" defaultValue={pkg ? pkg.meta_title : ''}></textarea>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12 px-0">
              <div className="form-group mb-4">
                <label>Description</label>
                <textarea className="form-control" name="meta_description" defaultValue={pkg ? pkg.meta_description : ''}></textarea>
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12 px-0">
              <div className="form-group mb-4">
                <label>Keyword</label>
                <textarea className="form-control" name="meta_keyword" defaultValue={pkg ? pkg.meta_keyword : ''}></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Images</label>
            <div className="default-picture">
              <div>
                <img src={img} className="mw-100" />
              </div>
              <input type="file" name="meta_image" id="meta_image" className="form-control"  onChange={handleChange} accept="image/png, image/jpeg, image/gif, image/jpg, image/svg"  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
export default MetaTag