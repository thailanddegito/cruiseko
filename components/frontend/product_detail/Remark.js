
import React, {useEffect} from 'react';

const Remark = (props) => {
  const {data} = props;

  useEffect(() => {

  },[]);

  return (
    data ? (
      <div className="pb-4">
        <h2>Remark</h2>
        <div className="" dangerouslySetInnerHTML={{ __html: ((!data ||data == 'undefined') ? '' :data) }} /><div></div>
      </div>
    ) : null
  )
}
export default Remark