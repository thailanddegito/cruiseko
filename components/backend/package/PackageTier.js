import React,{memo} from 'react';
import InputLabel from '../../widget/InputLabel';
import Button from '../../widget/Button';

const PackageTier = memo((props) => {
  const {name, handleAddTier} = props;

  return (
    <>
      <div className="row justify-content-center align-items-center my-4">
        <div className="col-lg-2 col-4">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'number',
            name : 'name', required : true
          }} 
          labelName="Start Tier : " iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-2 col-4">
          <InputLabel inputProps={{ 
            className:'form-control', type : 'number',
            name : 'name', required : true
          }} 
          labelName="End Tier : " iconProps={{className : 'fa icon icon-email'}}  />
        </div>
        <div className="col-lg-2 col-4">
          <Button _type="button" _name="Add" _class="btn-outline-primary ml-4" _click={handleAddTier} />
        </div>
      </div>
    </>
  )
})
export default PackageTier