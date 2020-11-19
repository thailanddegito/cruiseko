import classNames from 'classnames';
import { BeatLoader } from "react-spinners";
  
const LoadingButton = (props) => {
  return (
      <button {...props} className={classNames("btn", props.className)} 
      loading={undefined}
      disabled={props.loading || props.disabled} >
        {
          props.loading ?  (
            <BeatLoader size={16} color={"#007BFF"} loading={props.loading} />
          )
          : props.children
          
        }
      </button>
  )
}

export default LoadingButton