
import {useState,useEffect} from 'react';
  
const SelectLabel = (props) => {
  const [value,setValue] = useState()
  const {labelName,labelProps={},inputProps={}, icon = true, iconProps={}, options=[]} = props;

  const onChange = (e) =>{
    setValue(e.target.value)
    inputProps?.onChange && inputProps?.onChange(e)
  }
  useEffect(() => {
    if(inputProps.defaultValue){
      setValue(inputProps.defaultValue)
    }
    else if(inputProps.value){
      setValue(inputProps.value)
    }
  }, [inputProps.defaultValue,inputProps.value]);
  return (

      <div className="form-group">
        {!!labelName && <label {...labelProps}  >{labelName}</label>}
        <select {...inputProps} onChange={onChange} value={value} >
          {
            options.map((item, index) => (
              <option key={index} value={item.val}>{item.name}</option>
            ))
          }
        </select>
        {icon && <i {...iconProps}></i>}
        
      </div>

  )
}
export default SelectLabel