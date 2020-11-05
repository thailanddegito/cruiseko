import { memo } from 'react';
import Input from '../../widget/Input'
import Button from '../../widget/Button'


const SubHeaderComponent = memo((props) => {
  const {filterText, setFilterText, resetPaginationToggle, setResetPaginationToggle} = props;
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };
  return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
});

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <div className="row w-100 justify-content-end">
      <div className="col-lg-3 col-12 px-0">
        <div className="d-flex">
          <Input inputProps={{id : 'search', className : "form-control",  type : "text", placeholder : "Filter By Company Name English", value : filterText, onChange : onFilter }} />
          <Button _type="button" _class="btn-reset"  _click={onClear} _name="X" />
        </div>
      </div>
    </div>
    
  </>
);

export default SubHeaderComponent