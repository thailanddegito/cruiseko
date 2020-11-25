import React,{memo} from 'react';
import LoadingButton from '../../widget/LoadingButton';

const HeaderScrollPackage = memo((props) => {
  const {name, saving, handleSubmit, is_publish} = props;

  return (
    <div className="package-scroll" id="scroll-package">
      <div><h4>{name}</h4></div>
      <div>
        <LoadingButton type="button" 
          className="btn-outline-primary"  
          loading={saving}
          onClick={() => handleSubmit('draft')} >
          Save Draft
        </LoadingButton> 
        {
          is_publish ? (
            <LoadingButton type="button" 
              className="btn-primary publish ml-3"  
              loading={saving}
              onClick={() => handleSubmit('publish')} >
              Publish
            </LoadingButton> 
          ) : null
        }
      </div>
    </div>
  )
})
export default HeaderScrollPackage